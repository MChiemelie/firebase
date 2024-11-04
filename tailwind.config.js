/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
        'afacad-flux': ['Afacad Flux', 'sans-serif'],
        fredoka: ['Fredoka', 'sans-serif'],
        candal: ['candal', 'sans-serif']
      }
    }
  },
  plugins: []
};
