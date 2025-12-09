import { useState } from 'react';

export default function SumaForm() {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const handleSubmit = (a: any) => {
        a.preventDefault();
        alert(`Resultado, ${numero1 + numero2}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="number" 
            placeholder='Numero 1'
            value={numero1}
            onChange={(e) => setNumero1(Number(e.target.value))}
            />
            <input 
            type="number" 
            placeholder='Numero 2'
            value={numero2}
            onChange={(e) => setNumero2(Number(e.target.value))}
            />
            <button type="submit">Sumar</button>
        </form>
    );
}