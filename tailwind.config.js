module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      '7.5xl': '80px'
    },
    screens: {
      '3xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... },
      '2xl': { max: '1400px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
      ssm: { max: '450px' }
      // => @media (max-width: 450px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      wbermuda: '#8892B0',
      silver: '#CCD6F6',
      'bubble-gum': '#ff77e9',
      bermuda: '#64FFDA'
    },
    extend: {
      fontFamily: {
        bitter: ['Bitter']
      },
      lineHeight: {
        extra: '88px'
      },
      height: {
        '1h': '100vh'
      }
    }
  },
  plugins: []
};
