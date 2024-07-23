/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#edf3ff",
          "100": "#dfe8ff",
          "200": "#c5d4ff",
          "300": "#a2b7ff",
          "400": "#7d8efc",
          "500": "#5b66f6",
          "600": "#4140eb",
          "700": "#3633cf",
          "800": "#2d2ca7",
          "900": "#2b2c84",
          "950": "#19194d",
        },
        secondary: {
          "50": "#f5f5f6",
          "100": "#B5BAC1",
          "200": "#d0d0d1",
          "300": "#aeaeb2",
          "400": "#86878a",
          "500": "#6b6c6f",
          "600": "#5b5b5f",
          "700": "#4e4f50",
          "800": "#444546",
          "900": "#313338",
          "925": "#2B2D31",
          "950": "#1E1F22",
        }
      }
    },
  },
  plugins: [],
};

