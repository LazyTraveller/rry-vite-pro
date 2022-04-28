module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        3.38: '3.38rem',
        2.63: '2.63rem',
        1.25: '1.25rem',
        0.75: '0.75rem',
        0.91: '0.91rem',
        5.5: '22px',
        40.5: '162px',
        7.5: '30px',
        // 2.5: '28px',
        53.5: '214px',
        12.5: '50px',
        8.5: '34px',
        50: '200px',
        348: '348px',
        51.86: '207.44px',
      },
      backgroundImage: {
        'register-img': "url('/src/img/bg.png')",
      },
      fontFamily: {
        family: ['"PingFangSC-Regular, PingFang SC"'],
      },
      colors: {
        none: 'none',
      },
      opacity: {
        35: '0.35',
      },
    },
  },
  plugins: [],
}
