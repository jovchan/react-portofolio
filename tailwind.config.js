import flowbitePlugin from 'flowbite/plugin';
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral': '#c2c2c2',
        'primary': '#131313',
        'primary2': '#FBF6EE',
        'secondary': '#D1603D',
        'secondary2': '#FFB534',
        'accent': '#363636',
        'base-100': '#1d1d1d',
        'abu-putih': '#9d9d9d'
      },
      maxHeight: {
        '90vh': '90vh',
      },
      perspective: {
        '500': '500px',
      },
      height: {
        '95vh': '95vh',
      },
      screens: {
        // '2xl': '1320px',
      },
    },
    dropShadow: {
      '3xl': '0 25px 35px rgba(0, 0, 0, 1)',
      '4xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      'logo': '0 5px 5px rgba(0, 0, 0, 0.5)'
    }
  },
  plugins: [
    [flowbitePlugin],
    function ({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar': {
          'scrollbar-width': 'none', // for Firefox
          '-ms-overflow-style': 'none', // for Internet Explorer and Edge
          '&::-webkit-scrollbar': {
            display: 'none', // for Chrome, Safari, and Opera
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          'neutral': '#c2c2c2',
        'primary': '#131313',
        'secondary': '#D1603D',
        'accent': '#363636',
        'base-100': '#1d1d1d',
        },
      },
      "dark",
      "cupcake",
      "light",
    ],
  },
  corePlugins: {
    transitionProperty: true,
    transitionDuration: true,
  },
}

