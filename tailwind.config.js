import flowbitePlugin from 'flowbite/plugin';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hitam': '#131313',
        'oren': '#D1603D',
        // 'abu': '#878787',
        // 'abu': '#FAF9F6',
        // 'abu': '#FFFFFF',
        'abu': '#363636',
        'abu-gelap': '#1d1d1d',
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
}

