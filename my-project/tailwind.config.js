/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xxs: ['0.5rem'],
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        '3xl': '0px 4px 25px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
};
