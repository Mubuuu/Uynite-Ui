/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bggreen:"#C1EDE2",
        textgreen:"#649B8E",
        bgcolor:"#E4E7EC",
        tabcolor:"#E6F2EF"
      }
    },
  },
  plugins: [],
}

