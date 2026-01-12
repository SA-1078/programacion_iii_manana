import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function RBNewsletter() {
    const [email, setEmail] = useState("");
    const [ok, setOk] = useState(false);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        setOk(true);
        setEmail("");
        setTimeout(() => setOk(false), 2000);
    };

    return (
        <section className="py-5 bg-light border-top">
            <Container>
                <h2 className="h4 fw-bold mb-3">Newsletter</h2>

                {ok && <Alert variant="success">✅ Suscripción simulada</Alert>}

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

                    <Button type="submit">Suscribirme</Button>
                </Form>
            </Container>
        </section>
    );
}