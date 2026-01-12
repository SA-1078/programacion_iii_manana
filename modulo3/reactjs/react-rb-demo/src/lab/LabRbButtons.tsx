import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

export default function LabRbButtons() {
    return (
        <Container className="py-4">
            <h2 className="h4 fw-bold mb-3">LAB: Buttons</h2>

            <Stack direction="horizontal" gap={2} className="flex-wrap">
                <Button variant="primary">Primary</Button>
                <Button variant="outline-primary">Outline</Button>
                <Button variant="success">Success</Button>
                <Button variant="danger">Danger</Button>
            </Stack>
        </Container>
    );
}