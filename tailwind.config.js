module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        nav:'#2C3E50'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
