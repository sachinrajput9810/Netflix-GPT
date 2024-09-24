/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust based on your file structure
  ],
  theme: {
    extend: {
      scrollbar: {
        hide: {
          '&::-webkit-scrollbar': {
            display: 'none', // for Chrome, Safari, and Opera
          },
          '&': {
            '-ms-overflow-style': 'none',  // for Internet Explorer and Edge
            'scrollbar-width': 'none',      // for Firefox
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // ensure this line is present
  ],
};
