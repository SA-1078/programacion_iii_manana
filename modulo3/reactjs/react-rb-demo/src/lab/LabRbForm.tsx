import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function LabRbForm() {
    const [email, setEmail] = useState("");

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Email enviado: ${email}`);
        setEmail("");
    };

    return (
        <Container className="py-4">
            <h2 className="h4 fw-bold mb-3">LAB: Form</h2>

            <Form onSubmit={submit} style={{ maxWidth: 520 }}>
                <Form.Group className="mb-3">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="correo@dominio.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button type="submit">Enviar</Button>
            </Form>
        </Container>
    );
}