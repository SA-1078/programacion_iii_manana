import { useId } from 'react';

export default function ListaInputs() {
    const baseId = useId();
    const items = ['Nombre', 'Apellido', 'Correo'];

    return (
        <form>
            {items.map((item, i) => {
                const inputId = baseId + '-' + i;
                return (
                    <div key={inputId}>
                        <label htmlFor={inputId}>{item}</label>
                        <input id={inputId} type="text" />
                    </div>
                );
            })}
        </form>
    );
}
