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
  },
  plugins: [
    [flowbitePlugin],
  ],
}

