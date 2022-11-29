/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tesabGray':'#323A47',
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
        bakbakone: ['BakBak One', 'cursive']
      }
    },
  },
  plugins: [],
}
