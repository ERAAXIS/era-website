/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#10B981",
        "primary-dark": "#059669",
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
