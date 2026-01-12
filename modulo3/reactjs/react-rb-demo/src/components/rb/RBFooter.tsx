import React from "react";
import Container from "react-bootstrap/Container";

export default function RBFooter() {
    return (
        <footer className="py-4 bg-dark text-light">
            <Container className="d-flex flex-wrap justify-content-between align-items-center gap-2">
                <small className="text-secondary">© {new Date().getFullYear()} RB Home</small>
                <div className="d-flex gap-2">
                    <a className="link-light link-underline-opacity-0" href="#">Docs</a>
                    <a className="link-light link-underline-opacity-0" href="#">Soporte</a>
                </div>
            </Container>
        </footer>
    );
}