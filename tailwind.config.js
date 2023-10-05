/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      maxWidth: {
        '6/2': '76.5rem',
      },
      colors: {
        'iconBlue': '#0161AA',
      }
    },
  },
  plugins: [],
}