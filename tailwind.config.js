/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            defaultdarksky: '#09131B',
            defaultamber: '#FFF7AD',
            defaultteal: '#8DF1C9',
        }
    },
  },
  plugins: [],
}

