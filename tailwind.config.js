module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgGray: '#151515',
        bgGrayLight: '#2a2a2a',
        bgGrayLighter: '#3f3f3f',
        forbitPink: '#ed5fed',
        forbitBlue: '#3c8be6',
      },
      fontFamily: {
        'sans': ['Quicksand', 'Montserrat', 'ui-sans-serif', 'system-ui'],
        'serif': ['Belgrano', 'ui-serif', 'Georgia'],
        'mono': ['Source Code Pro'],
        'display': ['Courier New'],
      },
      spacing: {
        '48rem': '48rem',
      },
      height: {
        '90s': '90vh',
        '85s': '85vh'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ]
}
