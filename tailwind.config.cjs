/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray:{
          "900": "#181b23",
          "800": "#1F2029",
          "700": "#353646",
          "600": "#4B4D63",
          "500": "#616480",
          "400": "#737D9A",
          "300": "#9699B0",
          "200": "#B3B5C6",
          "100": "#D1D2DC",
          "50": "#EEEEF2",
        }
      },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}