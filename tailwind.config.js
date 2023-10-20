/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#4D5057',
        g1: "#8360c3",
        g2: "#2ebf91"
      }
    },
  },
  plugins: [],
}

