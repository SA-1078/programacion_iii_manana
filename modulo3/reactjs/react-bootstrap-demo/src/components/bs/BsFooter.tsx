import React from "react";

export default function BsFooter() {
    return (
        <footer className="py-4 bg-dark text-light">
            <div className="container d-flex flex-wrap justify-content-between align-items-center gap-2">
                <small className="text-secondary">© {new Date().getFullYear()} BS Demo</small>
                <div className="d-flex gap-2">
                    <a className="link-light link-underline-opacity-0" href="#">Docs</a>
                    <a className="link-light link-underline-opacity-0" href="#">Soporte</a>
                </div>
            </div>
        </footer>
    );
}