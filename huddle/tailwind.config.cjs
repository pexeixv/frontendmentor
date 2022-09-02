/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins','sans-serif'],
        open: ['Open Sans','sans-serif']
      },
      colors:{
            pri: 'hsl(322, 100%, 66%)', 
            sec: 'hsl(321, 100%, 78%)', 
            ter: 'hsl(0, 100%, 63%)',
            'neu-li': 'hsl(207, 100%, 98%)', 
            'neu-da': 'hsl(192, 100%, 9%)',
      }
    },
  },
  plugins: [],
}
