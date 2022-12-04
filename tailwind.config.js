/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Ubuntu", "sans-serif"],
      secondary: ["Lora", "serif"],
      logo: ["Indie Flower", "cursive"],
    },
    extend: {
      colors: {
        primary: "#5f59f7",
        secondary: "#6592fd",
        dark: "#333333",
        light: "#FBFBFB",
        gray: "#998C8C",
      },
    },
  },
  plugins: [],
};
