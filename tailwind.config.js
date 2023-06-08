/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
        colors: {
            defaultsky: '#09131B',
            defaultamber: '#FFF7AD',
            defaultteal: '#8DF1C9',
        },
        fontFamily: {
            mono: ['JetBrains Mono'],
            libre: ['Averia Sans Libre'],
        }
    },
  },
  plugins: [],
}

