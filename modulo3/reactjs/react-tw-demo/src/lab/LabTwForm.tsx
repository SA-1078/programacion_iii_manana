import React, { useState } from "react";

export default function LabTwForm() {
    const [email, setEmail] = useState("");

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Email enviado: ${email}`);
        setEmail("");
    };

    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <div className="mx-auto max-w-3xl px-4 py-10">
                <h2 className="text-xl font-extrabold">LAB: Form</h2>

                <form onSubmit={submit} className="mt-5 max-w-xl space-y-3">
                    <label className="block text-sm font-semibold text-white/80">Correo</label>

                    <input
                        className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-600/50"
                        type="email"
                        placeholder="correo@dominio.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button className="h-11 rounded-xl bg-blue-600 px-5 font-semibold hover:bg-blue-500 transition" type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </main>
    );
}