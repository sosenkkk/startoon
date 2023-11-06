/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      boxShadow: {
        "3xl": " rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        "4xl": "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
      },
    },
  },
  plugins: [],
}