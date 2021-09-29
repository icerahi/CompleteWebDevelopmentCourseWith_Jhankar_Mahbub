module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor:{
      'primary':'blue',
      'success':'green',
      'danger':'red',
      'custom':'gray',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
