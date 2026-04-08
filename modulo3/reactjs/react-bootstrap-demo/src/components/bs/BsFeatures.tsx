import React from "react";

const items = [
    { title: "Rápido", text: "Componentes listos + grilla." },
    { title: "Consistente", text: "UI homogénea." },
    { title: "Responsive", text: "Buen soporte móvil." },
];

export default function BsFeatures() {
    return (
        <section className="py-5">
            <div className="container">
                <h2 className="h4 fw-bold mb-3">Features</h2>

                <div className="row g-3">
                    {items.map((it) => (
                        <div className="col-12 col-md-4" key={it.title}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h3 className="h5 card-title">{it.title}</h3>
                                    <p className="card-text text-secondary">{it.text}</p>
                                    <span className="badge text-bg-primary">Bootstrap</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}