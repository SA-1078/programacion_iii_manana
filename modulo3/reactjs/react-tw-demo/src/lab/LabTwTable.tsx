import React from "react";

export default function LabTwTable() {
    const rows = [
        { name: "Juan", age: 30, status: "ok" },
        { name: "Ana", age: 25, status: "warn" },
        { name: "Luis", age: 28, status: "err" },
    ];

    const badge = (s: string) =>
        s === "ok"
            ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
            : s === "warn"
                ? "border-amber-400/20 bg-amber-400/10 text-amber-200"
                : "border-red-400/20 bg-red-400/10 text-red-200";

    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <div className="mx-auto max-w-4xl px-4 py-10">
                <h2 className="text-xl font-extrabold">LAB: Table</h2>

                <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10">
                    <table className="min-w-full text-sm">
                        <thead className="bg-white/5 text-white/80">
                            <tr>
                                <th className="px-4 py-3 text-left">Nombre</th>
                                <th className="px-4 py-3 text-left">Edad</th>
                                <th className="px-4 py-3 text-left">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((r) => (
                                <tr key={r.name} className="border-t border-white/10">
                                    <td className="px-4 py-3">{r.name}</td>
                                    <td className="px-4 py-3">{r.age}</td>
                                    <td className="px-4 py-3">
                                        <span className={`inline-flex rounded-full border px-3 py-1 text-xs ${badge(r.status)}`}>
                                            {r.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}