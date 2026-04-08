import React from "react";

export default function ThemedPanel() {
    return (
        <div
            style={{
                border: "1px solid var(--border)",
                background: "var(--card)",
                borderRadius: 12,
                padding: 16,
            }}
        >
            <h3 style={{ margin: "0 0 8px 0", color: "var(--accent)" }}>Theming con variables</h3>
            <p style={{ margin: 0 }}>
                Este panel cambia automáticamente con el atributo <code>data-theme</code>.
            </p>
        </div>
    );
}