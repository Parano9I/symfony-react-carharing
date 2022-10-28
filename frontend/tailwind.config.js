/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        auth: "url('/public/assets/img/auth-bg.jpg')"
      }
    }
  },
  plugins: []
};
