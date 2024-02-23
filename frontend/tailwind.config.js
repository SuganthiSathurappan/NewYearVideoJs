///** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'CaviarDreams': ['Caviar Dreams'],                                                
      },
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
      },
    },
  },
  plugins: [],
})

