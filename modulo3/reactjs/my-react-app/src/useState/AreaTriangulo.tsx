import { useState } from 'react';

export default function AreaTriangulo() {
    const [base, setBase] = useState('');
    const [altura, setAltura] = useState('');
    const [area, setArea] = useState<number | null>(null);

    const calcularArea = () => {
        const b = parseFloat(base);
        const h = parseFloat(altura);

        if (isNaN(b) || isNaN(h) || b <= 0 || h <= 0) {
            window.alert("Por favor ingresa valores numéricos positivos.");
            return;
        }

        const resultado = (b * h) / 2;
        setArea(resultado);
    };

    const limpiar = () => {
        setBase('');
        setAltura('');
        setArea(null);
    };

    return (
        <div>
            <h3>Calculadora de Área de Triángulo</h3>
            <input type="number" value={base} onChange={(e) => setBase(e.target.value)} placeholder="Base" /> <br />
            <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder="Altura" /> <br />
            <button onClick={calcularArea}>Calcular Área</button>
            <button onClick={limpiar}>Limpiar</button>
            {area !== null && <p>El área del triángulo es: {area}</p>}
        </div>
    );
}