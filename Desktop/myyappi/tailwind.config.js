/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all files in the src folder
    './components/**/*.{js,jsx,ts,tsx}', // Include all files in the components folder
    './pages/**/*.{js,jsx,ts,tsx}', // Include all files in the pages folder
    './public/index.html', // If applicable, include any HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

