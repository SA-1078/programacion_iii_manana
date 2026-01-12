import React, { createContext, useContext, useMemo, useState } from "react";

type Theme = "dark" | "light";

type ThemeCtx = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeCtx | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");

    const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

    const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

    return (
        <ThemeContext.Provider value={value}>
            <div data-theme={theme} style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme debe usarse dentro de ThemeProvider");
    return ctx;
}