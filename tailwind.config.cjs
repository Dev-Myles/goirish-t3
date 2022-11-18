/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pop: 'Poppins-Medium',
        ciz: 'CinzelDecorative-Bold',
        hind: 'HindSiliguri-Regular',
        fact: 'Factoria-Ultra',
      },
      boxShadow: {
        DEFAULT: '0 0 5px silver',
      },
      colors: {
        ndGold: '#f0cb37',
        ndBlue: '#13233c',
        ndGreen: '#4c7e49',
      },
    },
  },
  plugins: [],
};
