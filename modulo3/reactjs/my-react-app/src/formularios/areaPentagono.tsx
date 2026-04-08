import { useState } from 'react';

export default function AreaPentagono() {
    const [lado, setLado]= useState<number>(0);
    const [apotema, setApotema] = useState<number>(0);
    const [resultado, setResultado] = useState<number | null>(null);

    const calcularArea = (e: React.FormEvent) => {
        e.preventDefault();

        // Perímetro = 5 * lado
        // Área = (Perímetro * apotema) / 2
        const areaCalculada = (5 * lado * apotema) / 2;
        setResultado(areaCalculada);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Área de Pentágono</h2>

            <form onSubmit={calcularArea}>
                <label>Longitud del Lado:</label><br />
                <input type="number"
                    step="any"
                    placeholder="Ej: 5"
                    value={lado}
                    onChange={e => setLado(Number(e.target.value))}
                    required
                /><br /><br />

                <label>Apotema:</label><br />
                <input
                    type="number"
                    step="any"
                    placeholder="Ej: 3.44"
                    value={apotema}
                    onChange={e => setApotema(Number(e.target.value))}
                    required
                /><br /><br />

                <button type="submit">Calcular Área</button>
            </form>

            {resultado !== null && (
                <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                    El área es: {resultado.toFixed(2)} unidades²
                </div>
            )}
        </div>
    );
}