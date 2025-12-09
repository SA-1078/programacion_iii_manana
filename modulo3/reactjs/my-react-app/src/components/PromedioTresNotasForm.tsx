import { useState } from 'react';

export default function PromedioTresNotasForm() {
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const handleSubmit = (a: any) => {
        a.preventDefault();
        alert(`Promedio, ${(nota1 + nota2 + nota3) / 3}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="number" 
            placeholder='Nota 1'
            value={nota1}
            onChange={(e) => setNota1(Number(e.target.value))}
            />
            <input 
            type="number" 
            placeholder='Nota 2'
            value={nota2}
            onChange={(e) => setNota2(Number(e.target.value))}
            />
            <input 
            type="number" 
            placeholder='Nota 3'
            value={nota3}
            onChange={(e) => setNota3(Number(e.target.value))}
            />
            <button type="submit">Calcular</button>
        </form>
    );
}