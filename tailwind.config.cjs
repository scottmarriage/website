/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "Space Grotesk Variable",
          "Space Grotesk",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dce8ff",
          200: "#b9d1ff",
          300: "#8fb4ff",
          400: "#5f8fff",
          500: "#2F73F6",
          600: "#245cd6",
          700: "#1F4FB2",
          800: "#1c3f8a",
          900: "#1a366f",
          DEFAULT: "#2F73F6",
          dark: "#1F4FB2",
          light: "#7BA8FF",
        },
        surface: {
          DEFAULT: "var(--bg)",
          elevated: "var(--bg-elevated)",
          subtle: "var(--bg-subtle)",
        },
        border: {
          DEFAULT: "var(--border)",
        },
        ink: {
          DEFAULT: "var(--text)",
          muted: "var(--text-muted)",
          faint: "var(--text-faint)",
        },
      },
      fontSize: {
        display: ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1: ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        h2: ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.2" }],
        h3: ["1.25rem", { lineHeight: "1.3" }],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -8px rgba(0,0,0,0.15)",
        "card-hover": "0 2px 4px rgba(0,0,0,0.06), 0 16px 40px -12px rgba(47,115,246,0.25)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
