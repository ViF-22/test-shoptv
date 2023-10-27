/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      header: "26px",
      text: "16px",
      subtext: "14px",
      telnum: "32px",
    },
    colors: {
      white: "#ffffff",
      main1: "#86d3f4",
      black: "#000000",
      subline: "#565656",
      error: "#ea0000",
      disabled: "#4e4e4e",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      gridTemplateColumns: {
        phnumber: "repeat(3, minmax(0, 88px))",
      },
    },
  },
  plugins: [],
};
