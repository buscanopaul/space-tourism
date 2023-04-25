/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif'],
        barlowNormal: ['Barlow', 'sans-serif'],
        bellefair: ['Bellefair', 'serif'],
      },
      colors: {
        primary: '#0B0D17',
        secondary: '#D0D6F9',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
