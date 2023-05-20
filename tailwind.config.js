/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#6FB656",
        productPrimary: "#7AC58D",
        secondary: "#181A28",
      },
    },
  },
  plugins: [],
};
