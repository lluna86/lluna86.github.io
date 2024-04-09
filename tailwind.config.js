/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Times New Roman', 'serif'],
        lato: ['Lato', 'sans-serif'],
        sans: ['Quicksand', 'sans-serif'],
      },
      colors: {
      'planta': {
        light: '#e4f0f2',
        clar: '#c3cecc',
        DEFAULT: '#87977e',
        fosc: '#6c826a',
      },
      'terros': {
        clar: '#cbc594',
        DEFAULT: '#6e371f',
      },
    },
    },
  },
  plugins: [],
}
