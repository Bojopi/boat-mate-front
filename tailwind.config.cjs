/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["index.html", "./src/**/*.tsx"],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
}
