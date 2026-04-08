import { useLayoutEffect, useRef } from 'react';

export default function MedicionCaja() {
    const ref = useRef();

    useLayoutEffect(() => {
        const { offsetWidth, offsetHeight } = ref.current;
        console.log("Medidas:", offsetWidth, "x", offsetHeight);
    }, []);

    return (
        <div ref={ref} style={{ width: '300px', height: '150px', backgroundColor: 'slateblue' }}>
            Caja medible
        </div>
    );
}