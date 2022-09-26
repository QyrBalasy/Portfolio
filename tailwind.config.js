/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontSize: {
      headline5XL: [
        '48px',
        {
          fontWeight: 700,
          lineHeight: 1,
        },
      ],
      headline3XL: [
        '32px',
        {
          fontWeight: 700,
          lineHeight: '36px',
        },
      ],
      headline2XL: [
        '24px',
        {
          fontWeight: 700,
          lineHeight: '32px',
        },
      ],
      headlineLG: [
        '18px',
        {
          fontWeight: 500,
          lineHeight: '28px',
        },
      ],
      default: [
        '16px',
        {
          fontWeight: 400,
          lineHeight: '24px',
        },
      ],
    },
    colors: {
      white: '#ffff',
      whiteFont: '#FAFAFA',
      darkFont: '#767676',
      silver: '#E4E6EB',
      lightBg: '#F0F0F6',
      paragraphFont: '#767676',
      darkView1: '#242526',
      darkView2: '#3A3B3C',
      darkBg: '#18191A',
      lightDark: '#2B2B2B',
      yellow: '#FFB400',
    },
  },
  plugins: [],
  darkMode: 'class',
};
