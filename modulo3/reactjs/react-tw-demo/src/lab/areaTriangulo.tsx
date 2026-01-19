import React, { useState } from "react";

export default function LabTriangleForm() {
    const [base, setBase] = useState("");
    const [altura, setAltura] = useState("");
    const [area, setArea] = useState<number | null>(null);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        const b = parseFloat(base);
        const h = parseFloat(altura);

        const resultado = (b * h) / 2;

        setArea(resultado);
    };

    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <div className="mx-auto max-w-3xl px-4 py-10">
                <h2 className="text-xl font-extrabold">LAB: Área del Triángulo</h2>

                <form onSubmit={submit} className="mt-5 max-w-xl space-y-4">

                    {/* Campo: Base */}
                    <div>
                        <label className="block text-sm font-semibold text-white/80 mb-1">Base</label>
                        <input
                            className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-600/50"
                            type="number"
                            placeholder="Ej: 10"
                            value={base}
                            onChange={(e) => setBase(e.target.value)}
                            required
                            step="any"
                        />
                    </div>

                    {/* Campo: Altura */}
                    <div>
                        <label className="block text-sm font-semibold text-white/80 mb-1">Altura</label>
                        <input
                            className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-600/50"
                            type="number"
                            placeholder="Ej: 5"
                            value={altura}
                            onChange={(e) => setAltura(e.target.value)}
                            required
                            step="any"
                        />
                    </div>

                    <button
                        className="h-11 w-full rounded-xl bg-blue-600 px-5 font-semibold hover:bg-blue-500 transition"
                        type="submit"
                    >
                        Calcular Área
                    </button>
                </form>

                {/* Mostrar el resultado solo si ya se calculó */}
                {area !== null && (
                    <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                        <p className="text-sm text-white/60">El área es:</p>
                        <p className="text-2xl font-bold text-blue-400">{area}</p>
                    </div>
                )}

            </div>
        </main>
    );
}