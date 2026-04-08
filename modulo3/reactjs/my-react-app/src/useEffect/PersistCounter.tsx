import { useState, useEffect } from 'react';

export default function PersistCounter() {
    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem('contador');
        return saved ? parseInt(saved, 10) : 0;
    });

    useEffect(() => {
        localStorage.setItem('contador', count);
    }, [count]);

    return (
        <>
            <p>Contador persistente: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </>
    );
}
