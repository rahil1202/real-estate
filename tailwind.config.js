/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   ],
     
  theme: {
    extend:{
    colors: {
      primary: '#D19563',
      secondary: '#002D62',
    },
    fontFamily: {
      primary : ['Montserrat', 'sans-serif'],
      secondary : ['Lato', 'sans-serif'],
    },
   },    
  },
  plugins: [],
}