const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        green100: '#50B2C0',
        green200: '#255D6A',
        green300: '#0A313C',
        purple100: '#8381D9',
        purple200: '#2A2879',
        gray100: '#F8F9FC',
        gray200: '#E6E8F2',
        gray300: '#D1D6E4',
        gray400: '#8D95AF',
        gray500: '#303F73',
        gray600: '#252D4A',
        gray700: '#181C2A',
        gray800: '#0E1116',
        red: '',

        'gradient-vertical': `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
        'gradient-horizontal': `linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)`
      },
      gridTemplateColumns: {
        feed: '15% 50% 35%'
      },
      gridTemplateRows: {
        feed: '7% 93%'
      }
    }
  },
  variants: {
    border: ['responsive', 'hover', 'focus', 'active'],
    color: ['responsive', 'hover', 'focus', 'active'],
    fontWeight: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus']
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('current', '&:active::before')
    })
  ]
}
