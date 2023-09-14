/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        gray: "#F2F2F2",
      },
      container: {
        center: true,
      } ,
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      height: {
        nav: "70px",
      },
      width: {
        aside: "240px",
      },
      fontSize: {},
      backgroundImage: {},
    },
  },
  plugins: [],
};
