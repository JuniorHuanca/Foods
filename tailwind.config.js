/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // pattner: "url('../assets/bg.webp')",
        pattner: "url('../assets/bg1.webp')",
        // pattner: "url('../assets/background.webp')",
        home: "url('../assets/home2.webp')",
        // home: "url('../assets/home.webp')",
        // home: "url('../assets/background.webp')",
        // home: "url('../assets/bg1.webp')",
        // home: "url('../assets/bg.webp')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
