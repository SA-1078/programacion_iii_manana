{/*
    import { useEffect, useState } from 'react';

export default function FetchUser() {
    const [user, setUsers] = useState<any | null>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h3>Usuario:</h3>
            {user ? (
                user.map((user, i)) =>
            <>
                <li> key={i}>
                    {user.name} - {user.email}
                </li>
            </>
            ) : (
            <p>Cargando...</p>
            )}
        </div>
    );
}
*/}