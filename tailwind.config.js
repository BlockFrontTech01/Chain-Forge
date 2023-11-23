/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        midnightblue: "#002687",
        gray: "#01040d",
      },
      spacing: {},
      fontFamily: {
        inika: "Inika",
        "im-fell-english-sc": "'IM FELL English SC'",
        hanuman: "Hanuman",
        "inknut-antiqua": "'Inknut Antiqua'",
        "im-fell-english": "'IM FELL English'",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xl: "20px",
      "21xl": "40px",
      "11xl": "30px",
      "6xl": "25px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
