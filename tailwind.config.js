/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#AEDDB6',
          100: '#99D5A4',
          200: '#84CC93',
          300: '#6DC381',
          400: '#54BA70',
          500: '#36B15F',
        },
        secondary: {
          50: '#F8EAA3',
          100: '#F5E48C',
          200: '#F2DF74',
          300: '#EDDA5A',
          400: '#E9D53D',
          500: '#E4D00A',
        },
        grays: {
          50: '#FBFDFB',
          100: '#FAFCFB',
          200: '#F9FCFA',
          300: '#F8FBF9',
          400: '#F7FBF8',
          500: '#F6FAF7',
        },
        dark: {
          50: '#8B8B8B',
          100: '#717171',
          200: '#575757',
          300: '#575757',
          400: '#282828',
          500: '#121212',
        },
        mixDark: {
          50: '#8F9390',
          100: '#757A76',
          200: '#5C625D',
          300: '#444B45',
          400: '#2D352F',
          500: '#18201A',
        },
      },
    },
    fontFamily: {
      mulish: ['Mulish', 'sans-serif'],
    },
    bgImage: {
      heroImg: 'url("./src/assets/filler3.png")',
    },
    backgroundImage: {
      'radial-gradient':
        'radial-gradient(circle, rgba(100,134,109,1) 0%, rgba(74,99,80,1) 35%, rgba(48,65,52,1) 63%, rgba(30,30,30,1) 100%)',
    },
  },
  plugins: [],
};
