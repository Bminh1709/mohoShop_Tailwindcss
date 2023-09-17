/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
    './**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        MydarkYellow: "#ef9b0f",
        MypaleYellow: "#F5B03D",
        MypalePink: "#F8F1F5",
        MyPink: "#F8EBF3",
        MydarkPink: "#947173",
      },
    },
  },
  plugins: [],
}

