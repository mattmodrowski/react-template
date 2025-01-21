/** @type {import('tailwindcss').Config} */
import tailwindcssRadixColors from "tailwindcss-radix-colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssRadixColors],
};
