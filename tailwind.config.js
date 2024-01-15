/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
       display: ['Tangerine','cursive'],
      },
      animation: {
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(deg)',
          },
          '25%': {
            transform: 'rotate(0.8deg)',
          },
          '75%': {
            transform: 'rotate(-0.8deg)',
          },
        },
      },
    },
  },
  
  plugins: [],
}