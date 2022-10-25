/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bakbak-one': ['"Bakbak One"'],
      },
      width: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
