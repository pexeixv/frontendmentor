/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        pri: "hsl(300, 43%, 22%)",
        sec: "hsl(333, 80%, 67%)",
        neu1: "hsl(303, 10%, 53%)",
        neu2: "hsl(300, 24%, 96%)",
      },
      fontFamily:{
        spartan: ['League Spartan', 'sans-serif']
      }
    },
  },
  plugins: [],
}
