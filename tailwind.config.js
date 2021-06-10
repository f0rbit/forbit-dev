module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgGrayDark: '#0e0e0e',
        bgGray: '#151515',
        bgGrayLight: '#2a2a2a',
        bgGrayLighter: '#3f3f3f',
        fgGrayLigther: '#eaeaea',
        fgGrayLight: '#d5d5d5',
        fgGray: '#c0c0c0',
        forbitPink: '#b05ae9',
        forbitBlue: '#5084e4',
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
      maxWidth: {
        '1/2': '50%',
        '940': '940px',
      },
      minHeight: {
        '16': '16px',
      },
      minWidth: {
        '64': '64px',
      },
      width: {
        '128': '32rem',
        '256': '64rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ]
}
