/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        'primary':'#7F56DA',
        //'textColor':'#8988A3',
        'textColor':'#DFD4F6',
        'textColorprimary':'#FFFFFF',
        'bgColor':'#FCFBFF'
      }
    },
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    
  ],
}

