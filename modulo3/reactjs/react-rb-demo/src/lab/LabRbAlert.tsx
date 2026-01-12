import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export default function LabRbAlert() {
    const [show, setShow] = useState(true);

    return (
        <Container className="py-4">
            <h2 className="h4 fw-bold mb-3">LAB: Alert</h2>

            {show && (
                <Alert variant="success" onClose={() => setShow(false)} dismissible>
                    ✅ Operación exitosa (demo).
                </Alert>
            )}

            <Button onClick={() => setShow(true)}>Mostrar alert</Button>
        </Container>
    );
}