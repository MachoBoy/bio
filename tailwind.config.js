const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xxs: '320px',
      xs: '425px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        notokr: ['Noto Sans KR', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'monospace'],
        pretender: [
          'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, sans-serif;',
        ],
      },
      colors: {
        'green-cyan': '#1C2422',
        'dusty-grey': '#A39595',
        'card-bg': '#36363A',
        'light-card-bg': '#fff',
        'light-white': '#f3ebcb',
        'light-green': '#CEE5D0',
        'light-red': '#FF7878',
        'light-orange': '#FFAB73',
        'light-blue': '#1C6DD0',
        'light-blue-2': '#92B4EC',
      },
    },
  },
  plugins: [],
};
