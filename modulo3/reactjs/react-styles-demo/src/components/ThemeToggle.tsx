import React from "react";
import { useTheme } from "../theme/ThemeContext";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                border: "1px solid var(--border)",
                background: "var(--card)",
                color: "var(--text)",
                padding: "10px 14px",
                borderRadius: 10,
                cursor: "pointer",
                fontWeight: 800,
            }}
            title="Cambiar tema"
        >
            Cambiar a {theme === "dark" ? "claro" : "oscuro"}
        </button>
    );
}