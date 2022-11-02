/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        auth: "url('/public/assets/img/auth-bg.jpg')",
        'fuel-type-icon':
          "url('https://cdn-icons-png.flaticon.com/512/1505/1505581.png')",
        'transmissions-type-icon':
          "url('https://cdn-icons-png.flaticon.com/512/5935/5935454.png')",
        'passengers-number-icon':
          "url('https://cdn-icons-png.flaticon.com/512/4804/4804579.png')",
        'engine-capacity-icon':
          "url('https://cdn-icons-png.flaticon.com/512/5557/5557384.png')"
      },
      backgroundSize: {
        1: '1rem'
      }
    }
  },
  plugins: []
};
