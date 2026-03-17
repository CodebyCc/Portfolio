// tailwind.config.js
const motionPlugin = require("tailwindcss-motion");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    motionPlugin, // add plugin here
  ],
};
