/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      fontFamily: {
        geist: ["Geist", "sans-serif"],
      },
      colors: {
        "kmr-black": {
          100: "#B9B9B9",
          500: "#0A0A0A",
          900: "#000000",
        },
        "kmr-green": {
          0: "#408A4C",
        },
        "kmr-grey": {
          200: "#898989",
        },
      },
    },
  },
  plugins: [],
};
