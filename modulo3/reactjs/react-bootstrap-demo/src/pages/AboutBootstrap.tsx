import React from "react";

export default function AboutBootstrap() {
    return (
        <main className="py-5">
            <div className="container">
                <h1 className="h3 fw-bold">About (Bootstrap)</h1>
                <p className="text-secondary">Segunda página para practicar Router.</p>

                <div className="card shadow-sm">
                    <div className="card-body">
                        <h2 className="h5">Checklist</h2>
                        <ul className="mb-0">
                            <li>Instalación</li>
                            <li>Componentes separados</li>
                            <li>Home compuesta</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}