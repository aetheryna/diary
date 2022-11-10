/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: {
        default: '#30336b',
        light: '#35397f',
      },
      white: {
        default: '#fff',
      },
      black: {
        default: '#000',
      }
    },
    extend: {},
  },
  plugins: [],
}
