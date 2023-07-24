/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#26acd9",
        dark: "#171717",
        light: "#ffffff",
      },

      fontFamily: {
        main: ['"Oswald"', "sans-serif"],
        alt: ['"Roboto"', "sans-serif"],
      },

      fontSize: {
        "2xl": [
          "3.5rem",
          {
            lineHeight: "1.2",
            fontWeight: "900",
          },
        ],
        xl: [
          "2rem",
          {
            lineHeight: "1.2",
            fontWeight: "900",
          },
        ],
        lg: [
          "1.5rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        base: [
          "1.25rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        sm: [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        xs: [
          "0.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "300",
          },
        ],
      },
    },
    plugins: [],
  },
};
