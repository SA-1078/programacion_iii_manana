import React, { useContext } from 'react';
import { LoginContext } from './LoginContext';

export default function LoginStatus() {
    const { isLoggedIn, toggleLogin } = useContext(LoginContext);

    return (
        <div>
            <p>Estado: {isLoggedIn ? 'Logueado' : 'No logueado'}</p>
            <button onClick={toggleLogin}>Alternar login</button>
        </div>
    );
}