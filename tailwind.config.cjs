/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ccff00', // verde
        secondary: '#aa33cc', // verde claro
        darkgrey: '#A9A9A9', // text-gray-200- 300
        warning: '#FFC107',
        dimgrey: '#696969', // text-gray-400 -500 - 600
        whitesmoke: '#F5F5F5', // text-gray-100
        snow: '#FFFAFA', // text-gray-50
        neutral: '#1B1D22', // text-gray-900
        indigo: '#6366f1',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
