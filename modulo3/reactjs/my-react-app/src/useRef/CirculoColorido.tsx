
import { useRef } from 'react';

export default function CirculoColorido() {
    const circuloRef = useRef<HTMLDivElement>(null);
    const cuadradoRef = useRef<HTMLDivElement>(null);

    const cambiarColor = () => {
        const colores = ['crimson', 'royalblue', 'mediumseagreen', 'orange', 'violet'];
        const color = colores[Math.floor(Math.random() * colores.length)];
        if (circuloRef.current) {
            circuloRef.current.style.backgroundColor = color;
        }
    };
    const cambiarColorAzul = () => {
        const colores = ['blue', 'green', 'yellow', 'black', 'red'];
        const color = colores[Math.floor(Math.random() * colores.length)];
        if (cuadradoRef.current) {
            cuadradoRef.current.style.backgroundColor = color;
        }
    };

    return (
        <>
            <div
                ref={circuloRef}
                style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    backgroundColor: 'gray',
                    marginBottom: '1rem',
                    transition: 'background-color 0.5s'
                }}
            />
            <button onClick={cambiarColor}>Cambiar color del círculo</button>
            <div
                ref={cuadradoRef}
                style={{
                    width: '120px',
                    height: '120px',
                    backgroundColor: 'gray',
                    marginBottom: '1rem',
                    transition: 'background-color 0.5s',
                    marginTop: '1rem'
                }}
            />
            <button onClick={cambiarColorAzul}>Cambiar color del cuadrado</button>
        </>
    );
}
