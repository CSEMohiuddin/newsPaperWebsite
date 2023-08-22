/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#edf5f5",
        dark: "#374151",
        main: "#1d4ed8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "380px",
      sm: "420px",
      md: "768px",
      lg: "1060px",
      xl: "1280px",
      xxl: "1440px",
    },
  },
  plugins: [],
}

