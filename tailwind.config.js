/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        blue: {
          50: "#232F3E",
          150: " #66CCDF",
          100: "#313131",
          200: " #1A5CAE ",
          300: "#0f75bc96",
          400: "#1C469C",
          500: "#428BCA",
          600: "#313993",
          700: "#7270ff",
          800: "#1377bd",
          900: "#cfebff",
          1000: "#A3B2C6",
        },
        black: {
          100: "#898B8D",
          200: "#000000",
          300: "#7C7C7C",
          400: "#444444",
          500: "#D9D9D9",
          600: "#828282",
          700: "#4D4D4D",
          800: "#444444",
          900: "#333333",
          1000: "#202020",
        },
        white: {
          100: "#E9E9E9",
          200: "#ffffff",
          300: "#F9F9F9",
          400: "#E2E2E2",
          500: "#D9D9D9",
          600: "#DDDDDD",
          700: "#F7F5EB",
          800: "#F3F3F3",
          850: "#F7F7F8",
          900: "#EFF0F4",
          950: " #CCCCCC",
          1000: "#EDEDED",
        },
        red: {
          100: "#FF0707",
          200: "",
        },

        yellow: {
          100: " #FFA500",

          200: "#FFFCF0",
          300: "#FF5C00",
        },
      },
    },
  },
  plugins: [],
};
