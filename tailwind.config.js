module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      '7.5xl': '80px'
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
