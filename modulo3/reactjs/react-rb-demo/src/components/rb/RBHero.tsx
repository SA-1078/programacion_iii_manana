import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

export default function RBHero() {
    return (
        <section className="py-5 bg-light border-bottom">
            <Container>
                <h1 className="display-6 fw-bold mb-2">Home (React-Bootstrap)</h1>
                <p className="text-secondary mb-4">Página compuesta por varios componentes.</p>

                <Stack direction="horizontal" gap={2} className="flex-wrap">
                    <Button variant="primary">Acción</Button>
                    <Button variant="outline-primary">Secundaria</Button>
                </Stack>
            </Container>
        </section>
    );
}