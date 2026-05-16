/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bodoni Moda", "Cormorant Garamond", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        noir: "#050505",
        ink: "#0b0b0d",
        silver: "#d7d9dc",
        platinum: "#f1f1ee",
        smoke: "#8d9298",
        mercury: "#bfc3c7",
        champagne: "#c8b88a"
      },
      boxShadow: {
        glow: "0 0 60px rgba(215, 217, 220, 0.16)",
        card: "0 28px 90px rgba(0, 0, 0, 0.45)"
      }
    }
  },
  plugins: []
};
