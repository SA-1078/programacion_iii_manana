import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function AboutRB() {
    return (
        <Container className="py-4">
            <h1 className="h3 fw-bold mb-3">About (RB)</h1>
            <Card className="shadow-sm">
                <Card.Body>
                    <ul className="mb-0">
                        <li>Fase LAB: 5 ejemplos aislados</li>
                        <li>Fase Home: composición real (incluye Carousel)</li>
                    </ul>
                </Card.Body>
            </Card>
        </Container>
    );
}