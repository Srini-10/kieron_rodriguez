const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scrollbarTrack: "#f3f4f6", // Light gray for track
        scrollbarThumb: "#8b5cf6", // Violet for thumb
        scrollbarThumbHover: "#6d28d9", // Dark violet for hover
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwind-scrollbar-hide")],
};
