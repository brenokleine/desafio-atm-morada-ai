import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        moradaBlack: "#212121",
        moradaOrange: "#ce4313",
      },
    },
    screens: {
      'xs': '450px', // Extra small screens
      'sm': '640px', // Small screens
      'md': '784px', // Medium screens
      'lg': '1024px', // Large screens
      'xl': '1280px', // Extra large screens
      'xxl': '1400px', // Extra extra large
    },
  },
  plugins: [],
};
export default config;
