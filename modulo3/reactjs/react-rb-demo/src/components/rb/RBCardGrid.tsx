import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function RBCardGrid() {
    return (
        <Container className="py-4">
            <h2 className="h4 fw-bold mb-3">Cards</h2>

            <Row className="g-3">
                {[1, 2, 3].map((n) => (
                    <Col key={n} md={4}>
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                <Card.Title>Card {n}</Card.Title>
                                <Card.Text>Ejemplo de grid responsive.</Card.Text>
                                <Button variant="primary">Ver</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}