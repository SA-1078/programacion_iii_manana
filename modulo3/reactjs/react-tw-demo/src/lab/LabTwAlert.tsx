import React, { useState } from "react";

export default function LabTwAlert() {
    const [show, setShow] = useState(true);

    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <div className="mx-auto max-w-3xl px-4 py-10">
                <h2 className="text-xl font-extrabold">LAB: Alert</h2>

                {show && (
                    <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-200">
                        ✅ Operación exitosa (demo)
                    </div>
                )}

                <div className="mt-4">
                    <button
                        className="rounded-xl border border-white/15 px-4 py-2 font-semibold text-white/90 hover:bg-white/10 transition"
                        onClick={() => setShow((s) => !s)}
                    >
                        Toggle alert
                    </button>
                </div>
            </div>
        </main>
    );
}