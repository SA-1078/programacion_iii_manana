import { useState, useDeferredValue } from 'react';

export default function FormularioLogin() {
    const [form, setForm] = useState({
        email: '',
        nombres: '',
        apellidos: '',
        password: ''
    });

    const [enviado, setEnviado] = useState(false);
    const formDiferido = useDeferredValue(form);

    const esValido =
        formDiferido.nombres.length > 1 &&
        formDiferido.apellidos.length > 1 &&
        formDiferido.email.includes('@') &&
        formDiferido.password.length >= 6;

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        if (enviado) setEnviado(false);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setEnviado(true);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
            <input name="email" type="email" placeholder="Tu correo electrónico" value={form.email} onChange={handleChange} />
            <input name="nombres" type="text" placeholder="Tus nombres" value={form.nombres} onChange={handleChange} />
            <input name="apellidos" type="text" placeholder="Tus apellidos" value={form.apellidos} onChange={handleChange} />
            <input name="password" type="password" placeholder="Tu password" value={form.password} onChange={handleChange} />
            <button type="submit" disabled={!esValido}>Enviar</button>

            {enviado && (
                <p style={{ color: 'green', fontWeight: 'bold' }}>
                    ¡Registro exitoso!
                </p>
            )}
        </form>
    );
}