import { useId } from 'react';

export default function LoginCampos() {
    const emailId = useId();
    const passId = useId();
    console.log('emailId', emailId)
    console.log('passId', passId)

    return (
        <form>
            <label htmlFor={emailId}>Email:</label>
            <input id={emailId} type="email" />

            <label htmlFor={passId}>Contraseña:</label>
            <input id={passId} type="password" />
        </form>
    );
}
