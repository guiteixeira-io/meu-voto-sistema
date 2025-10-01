/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: "#012169",
          50: "#F0F4FF",
          100: "#E0E9FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
        },
        primary: {
          50: "#F0FDF4", // Verde muito claro
          100: "#DCFCE7", // Verde bem claro
          200: "#BBF7D0", // Verde claro
          300: "#86EFAC", // Verde claro médio
          400: "#4ADE80", // Verde médio
          500: "#009538", // Verde base
          600: "#007A2E", // Verde mais escuro
          700: "#006624", // Verde escuro
          800: "#00521D", // Verde bem escuro
          900: "#003E16", // Verde muito escuro
        },
        accent: {
          50: "#FFFBEB", // Amarelo muito claro
          100: "#FEF3C7", // Amarelo bem claro
          200: "#FDE68A", // Amarelo claro
          300: "#FCD34D", // Amarelo claro médio
          400: "#FBBF24", // Amarelo médio
          500: "#FEDD00", // Amarelo base
          600: "#D97706", // Amarelo mais escuro
          700: "#B45309", // Amarelo escuro
          800: "#92400E", // Amarelo bem escuro
          900: "#78350F", // Amarelo muito escuro
        },
      },
    },
  },
  plugins: [],
};
