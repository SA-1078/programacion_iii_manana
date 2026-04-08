import React, { useState } from "react";

export default function BsNewsletter() {
    const [email, setEmail] = useState("");
    const [ok, setOk] = useState(false);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        setOk(true);
        setEmail("");
        setTimeout(() => setOk(false), 2000);
    };

    return (
        <section className="py-5 bg-light border-top border-bottom">
            <div className="container">
                <h2 className="h4 fw-bold mb-3">Newsletter</h2>

                {ok && (
                    <div className="alert alert-success" role="alert">
                        ✅ Suscripción simulada (demo).
                    </div>
                )}

                <form className="row g-2" onSubmit={submit}>
                    <div className="col-12 col-md-8">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="correo@dominio.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-12 col-md-4">
                        <button className="btn btn-primary w-100" type="submit">
                            Suscribirme
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}