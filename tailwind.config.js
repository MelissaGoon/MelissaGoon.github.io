/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        blue: {
          500: "#2b77e7"
        },
        pink:{
          500:"#d80989" 
        }
      },
      fontFamily: {
        jacquard12: ['"Jacquard 12"', 'system-ui'],
        silkscreen: ["Silkscreen", 'system-ui']
      },
      backgroundImage: {
        'portfolio': "url('/src/assets/images/portfolioImg.png')"
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        },
      } 
    },
  },
  plugins: [],
}