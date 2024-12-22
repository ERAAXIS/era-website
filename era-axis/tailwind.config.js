/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "era-black": "#000000",
        "era-grey": {
          50: "#f0f0f0",
          100: "#d9d9d9",
          200: "#b3b3b3",
          300: "#8c8c8c",
          400: "#666666",
          500: "#494949",
          600: "#3d3d3d",
          700: "#303030",
          800: "#242424",
          900: "#181818",
        },
        "era-purple": {
          50: "#eae9f5",
          100: "#cbc9e6",
          200: "#a8a6d5",
          300: "#8582c4",
          400: "#6b69b5",
          500: "#4c4795",
          600: "#403c7d",
          700: "#322f62",
          800: "#252347",
          900: "#18172e",
        },
      },
      backgroundImage: {
        "hero-manufacturing": "url('/public/images/manufacturing-bg.svg')",
        "cta-pattern": "url('/public/images/pattern.jpg')",
        "solutions-pattern": "url('/public/images/pattern_1.jpg')",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        slideUp: "slideUp 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
