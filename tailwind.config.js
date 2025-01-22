/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'mmsm': '360px',
      'msm': '435px',
      'smm20': '620px',
      'sm': '640px',
      'sm10': '650px',
      'md': '768px',
      'mlg': '800px',
      'lg': '1024px',
      'plg': '1135px',
      'mxl': '1335px',
      'xl': '1280px',
      'dxl': '1425px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        ...colors,
        "app-blue": "#256395",
      },

    },
  },
  plugins: [],
}