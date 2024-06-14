/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js"],
  theme: {
    extend: {
      colors: {
        'regal-blue': 'rgba(19, 173, 199, 1) rgba(105, 120, 209, 1) rgba(148, 93, 214, 1)',
      },
      width: {
        '128': '570px',
        '600': '33rem',
      },
      height:{
        '62' : '485.6px'
      }
    },
  },
  plugins: [],
}