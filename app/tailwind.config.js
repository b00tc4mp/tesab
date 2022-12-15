/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'tesabGray': '#323A47',
      },
      width: {
        '112': '28rem',
        '128': '32rem',
        '160': '40rem',
        '200': '50rem',
        '240': '60rem'
      },
      spacing: {
        '112': '28rem',
        '128': '32rem',
        '160': '40rem',
      },
      borderRadius: {
        'circle': '0'
      },
      fontFamily: {
        bakbakone: ['BakBak One', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        alexandria: ['Alexandria', 'sans-serif'],

      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },

        div : {
          'from':{ml: '100%'},
          'to': {ml: '0%'}
        }


      },

      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
        
    }
  },

plugins: [],
}
