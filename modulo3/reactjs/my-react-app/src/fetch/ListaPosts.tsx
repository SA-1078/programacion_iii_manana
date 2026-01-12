
import { useEffect, useState, type JSX } from 'react';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function ListaPosts(): JSX.Element {
    const [posts, setPosts] = useState<Post[]>(() => []);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect((): void => {
        const fetchData = async (): Promise<void> => {
            try {
                const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) throw new Error('Error en la petición');
                const data: Post[] = await response.json();
                setPosts(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {posts.slice(0, 10).map((post: Post): JSX.Element => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}
