import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

export default function LabRbTable() {
    const rows = [
        { name: "Juan", age: 30, status: "ok" },
        { name: "Ana", age: 25, status: "warn" },
        { name: "Luis", age: 28, status: "err" },
    ];

    return (
        <Container className="py-4">
            <h2 className="h4 fw-bold mb-3">LAB: Table</h2>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((r) => (
                        <tr key={r.name}>
                            <td>{r.name}</td>
                            <td>{r.age}</td>
                            <td>
                                <Badge bg={r.status === "ok" ? "success" : r.status === "warn" ? "warning" : "danger"}>
                                    {r.status}
                                </Badge>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}