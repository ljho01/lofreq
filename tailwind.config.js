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
        "photos": "#FAF5EE",
        "music": "#FFEEFF",
        "me": "#EEEEFF",
        "photosHalf": "rgba(250, 245, 238, 0.8)",
        "musicHalf": "rgba(255, 238, 255, 0.8)",
        "meHalf": "rgba(238, 238, 255, 0.8)"
      },
    },
  },
  plugins: [],
};
