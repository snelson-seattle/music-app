/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideup: 'slideup 1s ease-in-out',        
      },
      keyframes: {       
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },        
      },
    },
  },
  plugins: [],
}
