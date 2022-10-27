/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'secondary' :'#4397A4',
        'primary' :'#486A6F',
        'gradient-blue-1' : '#C6DBFF',
        'gradient-blue-2' : '#E1EBFA',
        'gradient-green-1' : '#9ED5DE',
        'gradient-green-2' : '#4397A4',
        'light-blue' : ' #F4F7FF',
        'heading-blue' : '#5BCCDE',
      },
    },
  },
  plugins: [],
}
