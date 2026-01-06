import React from 'react';
import { useState, useTransition } from 'react';
import type { FC } from 'react';

interface ContenidoPesadoProps {
    tab: string;
}

const ContenidoPesado: FC<ContenidoPesadoProps> = ({ tab }) => {
    const content: React.ReactNode[] = [];

    for (let i = 0; i < 5000; i++) {
        content.push(<div key={i}>Contenido de {tab} #{i + 1}</div>);
    }

    return <>{content}</>;
};

export const TabsUseTransition: FC = () => {
    const [contenido, setContenido] = useState<React.ReactNode>(() => (
        <ContenidoPesado tab="A" />
    ));
    const [isPending, startTransition] = useTransition();

    const cambiarPestaña = (nueva: string): void => {
        startTransition(() => {
            setContenido(<ContenidoPesado tab={nueva} />);
        });
    };

    return (
        <>
            <button onClick={() => cambiarPestaña('A')}>Pestaña A</button>
            <button onClick={() => cambiarPestaña('B')}>Pestaña B</button>
            {isPending && <p>Cargando contenido...</p>}
            {contenido}
        </>
    );
};
