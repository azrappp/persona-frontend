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
      colors: {
        'kmr-black': {
          100: '#B9B9B9',
          500: '#0A0A0A',
          900: '#000000'
        },
        'kmr-green': {
          0: '#408A4C'
        }
      }
    },
  },
  plugins: [],
};
