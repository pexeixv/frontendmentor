/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
          pri: 'hsl(31, 77%, 52%)',
          sec: 'hsl(184, 100%, 22%)',
          ter: 'hsl(179, 100%, 13%)',
          neu1: 'hsla(0, 0%, 100%, 0.75)',
          neu2: 'hsl(0, 0%, 95%)'
      },
      fontFamily:{
        shoulders: ['Big Shoulders Display', 'sans-serif'],
        lexend:  ['Lexend Deca', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
