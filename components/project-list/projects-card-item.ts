export interface ProjectItemType {
  id: string;
  category: string;
  thumbnail: string;
  name: string;
  desc: string;
  module: string[];
  images: string | string[];
  mainLink: string | undefined;
  links: string[] | undefined;
}
export const ProjectCardItem = [
  {
    id: '01',
    category: 'E-Commerce',
    logo: '/hiossen-logo.png',
    thumbnail: '/hiossen_1.png',
    name: 'Hiossen Implant Shop',
    desc: 'An E-commerce platform that registered doctor can order the implant equipments. The option and quantity of items can be configure in shopify admin panel. View order status and history in account',
    module: ['Shopify', 'Plugins'],
    images: [],
    mainLink: 'https://denall.ca/',
    links: undefined,
    color: '#b24d67',
  },
  {
    id: '02',
    category: 'Console',
    logo: '/papaya-logo.png',
    thumbnail: '/papaya-admin_1.png',
    name: 'Papaya Play Admin Dashboard',
    desc: 'An application that give you control over the Papaya Play Portal. The main features of admin tool are add admin account, block the accounts, user registration, password resets, publish / edit / delete posts, upload image files, track statistics data on graphs, configure the elements of the web contents, track sales / refund logs',
    module: ['Vue', 'Vuex', 'Vuetify', 'Axios', 'Chart.js', 'TinyMCE'],
    images: [
      'bg-papaya-admin-1',
      'bg-papaya-admin-2',
      'bg-papaya-admin-3',
      'bg-papaya-admin-4',
      'bg-papaya-admin-5',
      'bg-papaya-admin-6',
      'bg-papaya-admin-7',
    ],
    mainLink: undefined,
    links: undefined,
    color: '#518a6b',
  },
  {
    id: '03',
    category: 'Website',
    logo: '/papaya-logo.png',
    thumbnail: '/papaya-portal_1.png',
    name: 'Papaya Play Portal',
    desc: 'The web platforms that inform user about news, events, updates of games, purchase the game cash with cross platform billing APIs (Xsolla, Paypal, etc), manage the game forum based on vanilla forum, connect user to helpdesk',
    module: ['Vue', 'Sass', 'jquery', 'bootstrap', 'GSAP'],
    images: [],
    mainLink: 'https://www.papayaplay.com/portal.do',
    links: undefined,
    color: '#518a6b',
  },
  {
    id: '031',
    category: 'Website',
    logo: '/lt_logo.png',
    thumbnail: '/latale_1.png',
    name: 'La Tale Online',
    desc: '',
    module: ['Vue', 'Sass', 'GSAP', 'ScrollMagic'],
    images: [],
    mainLink: 'https://latale.papayaplay.com/latale.do?tp=home',
    links: undefined,
    color: '#d8c838',
  },
  {
    id: '032',
    category: 'Entertain',
    logo: '/wr_logo.png',
    thumbnail: '/warRock_1.png',
    name: 'WarRock Gacha',
    desc: '',
    module: ['Vue', 'Sass', 'GSAP'],
    images: [],
    mainLink: '',
    links: undefined,
    color: '#1b1b1b',
  },
  {
    id: '033',
    category: 'E-Commerce',
    logo: '/uwo-logo.png',
    thumbnail: '/uwo_1.png',
    name: 'UWO webshop',
    desc: '',
    module: ['Vue', 'Sass', 'GSAP'],
    images: [],
    mainLink: 'https://uwo.papayaplay.com/uwo.do?tp=shop',
    links: undefined,
    color: '#dce7fa',
  },
  {
    id: '04',
    category: 'Website',
    logo: '/vertigo-logo.png',
    thumbnail: '/vertigogames_1.png',
    name: 'Vertigo Games',
    desc: 'The official website that introduce the company. Implemented Headless WordPress that manage backend contents while front-end developer access the data via APIs. Also offer to switch two different languages(English / Korean)',
    module: [
      'React',
      'styled-component',
      'TypeScript',
      'react-intl',
      'Headless CMS',
    ],
    images: [],
    mainLink: 'https://vertigogames.com/',
    links: undefined,
    color: '#bf803b',
  },
  {
    id: '05',
    category: 'Console',
    logo: '/gorae_logo.png',
    thumbnail: '/grmk_1.png',
    name: 'Gorae Market Admin Dashboard',
    desc: 'The web application that control over the seafood E-commerce platform. The main features are add admin account, publish / update / delete notifications, products, create coupon, track transactions, track packages, and manage product reviews.',
    module: [
      'React',
      'Ant Design',
      'tailwindcss',
      'Node JS',
      'Firebase',
      'TypeScript',
    ],
    images: ['bg-grmk-1', 'bg-grmk-2', 'bg-grmk-3', 'bg-grmk-4', 'bg-grmk-5'],
    mainLink: undefined,
    links: undefined,
    color: '#2464d7',
  },
  {
    id: '06',
    category: 'Website',
    logo: '',
    thumbnail: '/reventures1.png',
    name: 'RE:VENTURES',
    desc: 'The official website of company called RE:VENTURES. The project used Next.js(SSR), GraphQL, Wordpress as Headless CMS and WPGraqQL. Admin can post news, events, and informations using wordpress.',
    module: [
      'Next JS',
      'Typescript',
      'tailwindcss',
      'GraphQL',
      'Apollo Client',
      'react-hook-form',
      'Headless CMS',
    ],
    images: [],
    links: undefined,
    mainLink: 'https://www.reventures.co.kr/',
    color: '#7d7d7d',
  },
];
