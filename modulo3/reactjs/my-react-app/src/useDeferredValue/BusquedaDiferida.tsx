
import {
    useState,
    useDeferredValue,
    useTransition,
    type ChangeEvent
} from 'react';
import type { FC } from 'react';

const lista: string[] = Array.from({ length: 10000 }, (_, i) => `Elemento ${i + 1}`);

interface ResultadoFiltradoProps {
    filtro: string;
}

const ResultadoFiltrado: FC<ResultadoFiltradoProps> = ({ filtro }) => {
    const resultado = lista.filter(item =>
        item.toLowerCase().includes(filtro.toLowerCase())
    );

    // Simula una operación pesada (como cálculo o render muy grande)
    const start = performance.now();
    while (performance.now() - start < 300) { }

    return (
        <ul>
            {resultado.slice(0, 10).map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
};

export default function BusquedaDiferidaDeferred() {
    const [input, setInput] = useState<string>('');
    const inputDiferido = useDeferredValue(input);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value;
        setInput(valor); // input fluido
    };

    return (
        <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
            <h2>🔍 Búsqueda con `useDeferredValue`</h2>
            <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="Busca entre 10,000 elementos"
                style={{
                    padding: '0.5rem',
                    width: '100%',
                    maxWidth: '400px',
                    fontSize: '1rem',
                }}
            />
            {isPending || input !== inputDiferido ? (
                <p style={{ color: '#999' }}>⌛ Filtrando resultados...</p>
            ) : (
                <p style={{ color: 'green' }}>✅ Resultados actualizados</p>
            )}

            <ResultadoFiltrado filtro={inputDiferido} />
        </div>
    );
}
