// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#8619E4',
        'primary-blue': '#2563EB',
        'accent-green': '#16A34A',
        'brand-dark': '#111827',
        'brand-light': '#F9FAFB',
      }
    }
  },
  plugins: [],
};
