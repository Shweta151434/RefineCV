/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#2782ea',
        background: '#F7F7FE',
        dark: '#0F1C2A',
      },
      maxWidth: {
        content: '1100px',
      },
    },
  },
  plugins: [],
};
