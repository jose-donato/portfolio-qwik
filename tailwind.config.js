/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        "sm-only": {
          raw: "(max-width: 639px)",
        },
      },
    },
  },
  plugins: [require("@plaiceholder/tailwindcss")],
  darkMode: "class",
};
