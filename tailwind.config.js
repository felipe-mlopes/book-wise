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
        green50: '#7FD1CC',
        green100: '#50B2C0',
        green200: '#255D6A',
        green300: '#0A313C',
        purple50: '#9694F5',
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
        red100: '#F75A68',
        red200: '#DE515E',
      },
      fill: {
        white: '#FFFFFF',
        black: '#000000',
        green50: '#7FD1CC',
        green100: '#50B2C0',
        green200: '#255D6A',
        green300: '#0A313C',
        purple50: '#9694F5',
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
        red100: '#F75A68'
      },
      boxShadow: {
        modal: '4px 16px 24px rgba(0, 0, 0, 0.25)',
        sidebar: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)'
      },
      gridTemplateColumns: {
        lg: '18% 82%',
        card: '20% 80%'
      },
      gridTemplateRows: {
        global: '11vh 89vh',
        card: '15% 25% 60%'
      },
      screens: {
        'm': '375px',
        'xs': '425px'
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
    }),
    require('tailwind-scrollbar')
  ]
}
