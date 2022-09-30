/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#501FC1",

          secondary: "#8456EC",

          accent: "#E87BF8",

          textcol: "#240D57",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#D3FFE2",

          success: "#E61445",

          warning: "#FFD7E0",

          error: "#E61445",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
