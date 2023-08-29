/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: "0.2rem",
      sm: "0.9rem",
      base: "1rem",
      lg: "1.2rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      colors: {
        lightgray: "#c6c9d1",
        darkgray: "#798399",
        linegray: "#d2d6e0",
        yellow: "#FEC900",
      },
      keyframes: {
        "fade-in": {
          "0%": { transform: "translateY(10%); opacity: 0" },
          "100%": { transform: "translateY(0); opacity: 1" },
        },
        "bg-fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 0.4 },
        },
      },
      animation: {
        "fade-in": "fade-in .25s ease-in-out forwards",
        "bg-fade-in": "bg-fade-in .25s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
