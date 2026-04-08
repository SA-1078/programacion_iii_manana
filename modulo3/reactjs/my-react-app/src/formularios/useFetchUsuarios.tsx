
import { useState, useEffect } from 'react';

interface Usuario {
    id: number;
    name: string;
    email: string;
}

interface EstadoUsuarios {
    data: Usuario[] | null;
    loading: boolean;
    error: string | null;
}

export function useFetchUsuarios(url: string): EstadoUsuarios {
    const [data, setData] = useState<Usuario[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(url)
            .then((res: Response) => {
                if (!res.ok) throw new Error('Error al cargar usuarios');
                return res.json();
            })
            .then((usuarios: Usuario[]) => {
                setData(usuarios);
                setLoading(false);
            })
            .catch((err: unknown) => {
                setError((err as Error).message);
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
}
