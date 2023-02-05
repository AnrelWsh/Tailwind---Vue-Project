/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'white' : '#ffffff',
      'main' : '#F5F5F5',
      'dark' : '#0A0909',
      'purple' : '#8D4ED8',
      'orange' : '#FF6A60',
      'blue' : '#80D4F8',
      'red' : '#FC1616',
      'grey' : '#FFFFFF4C',
      'social-bg-grey' : 'rgba(255, 255, 255, 0.3)',
      'page-number-grey' : '#808080',
      'footer-dropdown-grey' : 'rgba(255, 255, 255, 0.18)',
      'light-pink' : '#F3EDFB',
      'gradient-blue' : 'rgba(128, 212, 248, 1)',
      'gradient-purple' : 'rgba(141, 78, 216, 1)',
      'gradient-coral' : 'rgba(255, 106, 96, 1)',
      'gradient-red' : 'rgba(252, 22, 22, 1)'
    },
    fontFamily:{
      'main_font': ['Poppins', 'sans-serif'],
      'secondary_font' :['NeuzeitGro-Bol', 'sans-serif'] ,
    },
    extend: {},
  },
  plugins: [],
}
