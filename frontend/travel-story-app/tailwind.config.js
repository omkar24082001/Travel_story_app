/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      display: ["Poppins","sans-serif"]
    },
    extend: {
      // colors use in the projects
      colors: {
        primary: "#058603",
        secondary: "#EF863E",
      },
    },
  },
  plugins: [],
}

