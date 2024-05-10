/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        'geist-regular': ["Geist-Regular"],
        'geist-semibold': ["Geist-SemiBold"],
        'geist-bold': ["Geist-Bold"]
      },
    },
  },
  plugins: [],
};
