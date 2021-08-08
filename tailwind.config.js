const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#38A1DB',
        'orange': colors.orange,
      },
      borderWidth: {
        '6': '6px',
      },
      minHeight: {
        '16': '4rem',
      },
      fontSize: {
        '10xl' : ['10rem', '1']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
