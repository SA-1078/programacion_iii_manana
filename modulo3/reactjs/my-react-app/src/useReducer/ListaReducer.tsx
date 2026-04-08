import { useReducer, useState, type FormEvent } from 'react';

type State = string[];
type Action =
    | { type: 'add'; payload: string }
    | { type: 'remove'; index: number };

const initialState: State = [];

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'remove':
            return state.filter((_, i) => i !== action.index);
        default:
            return state;
    }
}

export default function ListaReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [texto, setTexto] = useState<string>("");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (texto.trim()) {
            dispatch({ type: 'add', payload: texto });
            setTexto("");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={texto}
                    onChange={e => setTexto(e.target.value)}
                />
                <button type="submit">Agregar</button>
            </form>
            <ul>
                {state.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => dispatch({ type: 'remove', index })}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}