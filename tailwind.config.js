/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        base: "#ffffff",
        surface: "#f8f9fa",
        border: "#e2e8f0",
        muted: "#64748b",
        telecel: "#FF3B30",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        checkpop: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "50%": { transform: "scale(1.2)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        fadein: "fadein 0.4s ease-out forwards",
        checkpop:
          "checkpop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        shimmer: "shimmer 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
}
