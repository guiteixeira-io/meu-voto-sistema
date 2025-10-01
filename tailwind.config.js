/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: "#012169",
        },
        primary: {
          50: "#009538",
          100: "#009538",
          200: "#009538",
          300: "#009538",
          400: "#009538",
          500: "#009538",
          600: "#009538",
          700: "#009538",
          800: "#009538",
          900: "#009538",
        },
        accent: {
          50: "#FEDD00",
          100: "#FEDD00",
          200: "#FEDD00",
          300: "#FEDD00",
          400: "#FEDD00",
          500: "#FEDD00",
          600: "#FEDD00",
          700: "#FEDD00",
          800: "#FEDD00",
          900: "#FEDD00",
        },
      },
    },
  },
  plugins: [],
};
