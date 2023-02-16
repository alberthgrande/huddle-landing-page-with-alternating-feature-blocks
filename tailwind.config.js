/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    colors: {
      "--primary-pink": "hsl(322, 100%, 66%)",
      "--neutral-very-pale-cyan": "hsl(193, 100%, 96%)",
      "--neutral-very-dark-cyan": "hsl(192, 100%, 9%)",
      "--neutral-grayish-blue": "hsl(208, 11%, 55%)",
    },
    fontFamily: {
      "--ff-body": ["Open Sans", "sans-serif"],
      "--ff-heading": ["Poppins", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
