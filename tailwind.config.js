/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      //We define our color variable here to be assigned a value on the stylesheet

      colors: {
        accent: {
          1: "var(--accent1)",
        },
        baseOne: "var(--baseOne)",
        baseTwo: "var(--baseTwo)",
        baseThree: "var(--baseThree)",
        baseFour: "var(--baseFour)",
      },
    },
  },
  plugins: [],
}
