/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionProperty: {
        'padding': 'padding',
      },
      transitionDuration: {
        '0.1s': '0.1s',
      },
    },
    colors: {
      ...colors,
      primary: colors.green,
      secondary: colors.orange,
      dark: {
        50: "#f6f7f6",
        100: "#e2e6e1",
        200: "#c5cdc2",
        300: "#a0ac9c",
        400: "#7b8b76",
        500: "#60705c",
        600: "#4c5948",
        700: "#3e493c",
        800: "#343c33",
        900: "#272c26",
        950: "#161816",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};