/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'jcrea-orange': '#FF6B00',
        'jcrea-dark': '#111111',
        'jcrea-gray': '#1E1E1E',
      },
    },
  },
  plugins: [],
}
