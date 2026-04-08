import React from "react";

export default function BsHero() {
    return (
        <section className="py-5 bg-light border-bottom">
            <div className="container">
                <h1 className="display-6 fw-bold mb-2">Home (Bootstrap)</h1>
                <p className="text-secondary mb-4">
                    Home armada con componentes separados + utilidades de Bootstrap.
                </p>

                <div className="d-flex gap-2 flex-wrap">
                    <button className="btn btn-primary">Acción principal</button>
                    <button className="btn btn-outline-primary">Acción secundaria</button>
                </div>
            </div>
        </section>
    );
}