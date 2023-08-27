/**
 *  @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito', sans-serif"],
        serif: ["Poppins', sans-serif"],
        mons: ["Montserrat', sans-serif"],
      },
      colors: {
        "accent-1": "#113255",
        "accent-2": "#ffffff",
        "accent-3": "#F8F9FB",
      },
    },
  },
  plugins: [],
};
