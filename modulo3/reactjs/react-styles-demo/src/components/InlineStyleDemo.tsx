import React from "react";

export default function InlineStyleDemo() {
    const card: React.CSSProperties = {
        border: "1px solid #30363d",
        background: "#161b22",
        borderRadius: 12,
        padding: 16,
    };

    const title: React.CSSProperties = {
        margin: "0 0 8px 0",
        color: "#58a6ff",
        fontWeight: 800,
    };

    return (
        <div style={card}>
            <h3 style={title}>Inline styles</h3>
            <p style={{ margin: 0 }}>
                Útil para estilos dinámicos rápidos (pero no es ideal para todo).
            </p>
        </div>
    );
}