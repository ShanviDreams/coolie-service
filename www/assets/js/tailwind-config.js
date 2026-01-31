tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "background-light": "var(--background)",
                "background-dark": "var(--background)",
                "primary": "var(--primary)",
                border: "var(--border)",
                input: "var(--input)",
                ring: "var(--ring)",
                background: "var(--background)",
                foreground: "var(--foreground)",
                secondary: {
                    DEFAULT: "var(--secondary)",
                    foreground: "var(--secondary-foreground)",
                },
                destructive: {
                    DEFAULT: "var(--destructive)",
                    foreground: "var(--destructive-foreground)",
                },
                muted: {
                    DEFAULT: "var(--muted)",
                    foreground: "var(--muted-foreground)",
                },
                accent: {
                    DEFAULT: "var(--accent)",
                    foreground: "var(--accent-foreground)",
                },
                popover: {
                    DEFAULT: "var(--popover)",
                    foreground: "var(--popover-foreground)",
                },
                card: {
                    DEFAULT: "var(--card)",
                    foreground: "var(--card-foreground)",
                },
            },
            fontFamily: {
                "display": ["var(--font-sans)", "sans-serif"],
                "headline": ["var(--font-sans)", "cursive"],
                "sans": ["var(--font-sans)", "sans-serif"],
                 "serif": ["var(--font-serif)", "serif"],
                 "mono": ["var(--font-mono)", "monospace"],
            },
            borderRadius: {
                "DEFAULT": "var(--radius)",
                "lg": "calc(var(--radius) + 2px)",
                "xl": "calc(var(--radius) + 4px)",
            },
        },
    },
}