import React from "react";

export default function LabTwCard() {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <div className="mx-auto max-w-3xl px-4 py-10">
                <h2 className="text-xl font-extrabold">LAB: Card</h2>

                <div className="mt-5 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
                    <h3 className="text-lg font-bold">Card Tailwind</h3>
                    <p className="mt-2 text-white/70">Bordes, background, shadow, spacing.</p>

                    <button className="mt-4 rounded-xl bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-500 transition">
                        Acción
                    </button>
                </div>
            </div>
        </main>
    );
}