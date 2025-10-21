/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"DM Sans"', 'sans-serif'],
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
        'inter-regular': ['"Inter"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
        'merriweather-sans': ['"Merriweather Sans"', 'sans-serif'],
        'segoe-ui': ['"Segoe UI"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'rajdhani-bold': ['"Rajdhani"', 'sans-serif'],
      },
      colors: {
        'light-purple': '#e6e7f3',
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(180deg, #e6e7f3 0%, #ffffff 100%)',
      },
    },
  },
  plugins: [],
}
