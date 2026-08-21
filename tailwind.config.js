/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tea: {
          50:  "#fdf8f0",
          100: "#f9edd8",
          200: "#f1d8a8",
          300: "#e6be72",
          400: "#d9a043",
          500: "#c4832a",
          600: "#a86520",
          700: "#86491c",
          800: "#6d3b1e",
          900: "#5a311c",
        },
        forest: {
          50:  "#f2f7f2",
          100: "#deeede",
          200: "#beddbe",
          300: "#91c491",
          400: "#60a460",
          500: "#3d8b3d",
          600: "#2d6e2d",
          700: "#255825",
          800: "#1e461e",
          900: "#1a3b1a",
        },
        cream: "#faf6ef",
        charcoal: "#1c1a17",
        brand: "#0057A0",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Lato'", "sans-serif"],
        accent: ["'Cormorant Garamond'", "serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
      backgroundImage: {
        "tea-texture": "url('/assets/tea-texture.png')",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-right": "slideRight 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
