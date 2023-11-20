/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'KonexyPersonalUse': '"Konexy Personal Use"',
        'Gilroy-light': '"Gilroy-light"',
        'gilroy-extrabold': '"gilroy-extrabold"',
        'Inter':'"Inter"'
      },
      backgroundImage: {
        'purple': 'linear-gradient(91deg, #5F21E9 60.06%, #FA00FF 103.73%)',
      },
    },
  },
  plugins: [],
}

