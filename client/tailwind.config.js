const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts, jsx, tsx}',
    './app/components/**/*.{js,ts, jsx, tsx}'
  ],
  theme: {
    fontSize: {
      'xs':'1.1rem',
      sm: '1.21rem',
      'tiny':'1.27rem',
      base: '1.46rem',
      xl: '1.25rem',
      '2xl': '2.2rem',
      '3xl': '2.7rem',
      '4xl': '3.25rem',
      '5xl': '4.3rem',
    },
    extend: {
      colors: {
        primary: '#5F3DF7'
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out"
      },
      transitionDuration: {
        DEFAULT: "350ms"
      }
    },
  },
  plugins: [
    plugin(({ addUtilities, addComponents }) => {
      addComponents({
        '.shadow-icon': {
          border: 'none',
          outline: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          padding: '0.6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(45, 8, 125, 0.2)',
          fontSize: '2.7rem',
          transition: 'box-shadow .4s ease-in-out',
          color: '#353538',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(45, 8, 125, 0.3)'
          }
        }
      })
      addUtilities({
        '.flex-center-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between '
        },'.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
        
      })
    })
  ],
}
