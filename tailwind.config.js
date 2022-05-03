const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xxs: '320px',
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        notokr: ['Noto Sans KR', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        'green-cyan': '#1C2422',
        'dusty-grey': '#A39595',
        'card-bg': '#36363A',
      },
      backgroundImage: {
        'papaya-admin-1': "url('/papaya-admin_1.png')",
        'papaya-admin-2': "url('/papaya-admin_2.png')",
        'papaya-admin-3': "url('/papaya-admin_3.png')",
        'papaya-admin-4': "url('/papaya-admin_4.png')",
        'papaya-admin-5': "url('/papaya-admin_5.png')",
        'papaya-admin-6': "url('/papaya-admin_6.png')",
        'papaya-admin-7': "url('/papaya-admin_7.png')",
        'hiossen-1': "url('/hiossen_1.png')",
        'hiossen-2': "url('/hiossen_2.png')",
        'hiossen-3': "url('/hiossen_3.png')",
        'papaya-portal-1': 'url(/papaya-portal_1.png)',
        'papaya-portal-2': 'url(/papaya-portal_2.png)',
        'papaya-portal-3': 'url(/papaya-portal_3.png)',
        'papaya-portal-4': 'url(/papaya-portal_4.png)',
        'vertigo-games-1': 'url(/vertigogames_1.png)',
        'vertigo-games-2': 'url(/vertigogames_2.png)',
        'vertigo-games-3': 'url(/vertigogames_3.png)',
        'vertigo-games-4': 'url(/vertigogames_4.png)',
        'update-1': 'url(/update_1.png)',
        'update-2': 'url(/update_2.png)',
        'update-3': 'url(/update_3.png)',
        'grmk-1': 'url(/grmk_1.png)',
        'grmk-2': 'url(/grmk_2.png)',
        'grmk-3': 'url(/grmk_3.png)',
        'grmk-4': 'url(/grmk_4.png)',
        'grmk-5': 'url(/grmk_5.png)',
      },
    },
  },
  plugins: [],
};
