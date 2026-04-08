
import { useState, type JSX } from 'react';
import { useFetchUsuarios } from './useFetchUsuarios';

export default function ListaUsuariosPaginado(): JSX.Element {
    const { data: usuarios = [], loading, error } = useFetchUsuarios('https://jsonplaceholder.typicode.com/users');
    const [page, setPage] = useState<number>(1);
    const perPage = 3;

    const total = usuarios?.length || 0;
    const totalPages = Math.ceil(total / perPage);
    const paginados = usuarios?.slice((page - 1) * perPage, page * perPage) || [];

    if (loading) return <p>Cargando usuarios...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h3>Usuarios - Página {page}/{totalPages}</h3>
            <ul>
                {paginados.map(u => (
                    <li key={u.id}>
                        <strong>{u.name}</strong> - {u.email}
                    </li>
                ))}
            </ul>

            <button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}>
                ⬅️ Anterior
            </button>

            <button onClick={() => setPage(p => Math.min(p + 1, totalPages))} disabled={page === totalPages}>
                Siguiente ➡️
            </button>
        </div>
    );
}
