import React from "react";

export default function LabTwButtons() {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <div className="mx-auto max-w-3xl px-4 py-10">
                <h2 className="text-xl font-extrabold">LAB: Buttons</h2>
                <p className="mt-2 text-white/70">Clases utilitarias: colores, hover, rounded, padding.</p>

                <div className="mt-5 flex flex-wrap gap-2">
                    <button className="rounded-xl bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-500 transition">Primary</button>
                    <button className="rounded-xl border border-white/15 px-4 py-2 font-semibold text-white/90 hover:bg-white/10 transition">Outline</button>
                    <button className="rounded-xl bg-emerald-600 px-4 py-2 font-semibold hover:bg-emerald-500 transition">Success</button>
                    <button className="rounded-xl bg-red-600 px-4 py-2 font-semibold hover:bg-red-500 transition">Danger</button>
                </div>
            </div>
        </main>
    );
}