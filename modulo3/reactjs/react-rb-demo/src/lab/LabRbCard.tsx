import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function LabRbCard() {
    return (
        <Container className="py-4">
            <h2 className="h4 fw-bold mb-3">LAB: Card</h2>

            <Card className="shadow-sm" style={{ maxWidth: 520 }}>
                <Card.Body>
                    <Card.Title>Card React-Bootstrap</Card.Title>
                    <Card.Text>Estructura típica: Title, Text, Actions.</Card.Text>
                    <Button variant="primary">Acción</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}