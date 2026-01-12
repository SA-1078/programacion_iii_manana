import { useRef, useLayoutEffect, useState } from 'react';

export default function MostrarSinParpadeoTS() {
    const refCaja = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState<boolean>(false);

    useLayoutEffect(() => {
        setVisible(true);
    }, []);

    return (
        <div
            ref={refCaja}
            style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.4s ease',
                backgroundColor: 'darkslategray',
                color: 'white',
                padding: '1rem',
            }}
        >
            Este contenido se muestra sin parpadeo inicial
        </div>
    );
}