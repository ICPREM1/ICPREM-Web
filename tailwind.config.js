/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0C9CC5",
        grey: "#666666",
        secondary: "#7142F5",
        text: "#000000B2",
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
};
