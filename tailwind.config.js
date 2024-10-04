module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This ensures Tailwind scans all JS/JSX/TS/TSX files in the src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Define the Poppins font family
      },
    },
  },
  plugins: [],
}
