/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title: ["Playfair Display", "serif"],
        title2: ["Inconsolata", "monospace"]
    }
    },
  },
  plugins: [],
}

