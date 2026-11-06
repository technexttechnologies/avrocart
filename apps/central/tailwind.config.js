/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0A192F",
          800: "#0F203C",
          700: "#1E293B",
        },
        electric: {
          500: "#2563EB",
          600: "#1D4ED8",
        },
      },
    },
  },
  plugins: [],
};
