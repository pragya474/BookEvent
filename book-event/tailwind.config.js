/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(150px, 5fr))",
      },
      colors: {
        primary: "#E38E49",
      },
    },
  },
  plugins: [],
};
