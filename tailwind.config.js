module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './gatsby-config.js',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        primary: '#009ae4',
      },
    },
  },
  plugins: [],
};