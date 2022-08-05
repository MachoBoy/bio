export interface ProjectItemType {
  thumbnail: string;
  name: string;
  desc: string;
  module: string[];
  images: string | string[];
  mainLink: string | undefined;
  links: string[] | undefined;
}
const ProjectCardItem = [
  {
    thumbnail: '/hiossen_1.png',
    name: 'Hiossen Implant Shop',
    desc: 'An E-commerce platform that registered doctor can order the implant equipments. The option and quantity of items can be configure in shopify admin panel. View order status and history in account',
    module: ['Shopify', 'Plugins'],
    images: [],
    mainLink: 'https://denall.ca/',
    links: undefined,
  },
  {
    thumbnail: '/papaya-admin_1.png',
    name: 'Papaya Play Admin Dashboard',
    desc: 'An application that give you control over the Papaya Play Portal. The main features of admin tool are add admin account, block the accounts, user registration, password resets, publish / edit / delete posts, upload image files, track statistics data on graphs, configure the elements of the web contents, track sales / refund logs',
    module: ['Vue', 'Vuex', 'Vuetify', 'Chart.js', 'TinyMCE'],
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
  },
  {
    thumbnail: '/papaya-portal_1.png',
    name: 'Papaya Play Portal',
    desc: 'The web platforms that inform user about news, events, updates of games, purchase the game cash with cross platform billing APIs (Xsolla, Paypal, etc), manage the game forum based on vanilla forum, connect user to helpdesk',
    module: ['Vue', 'SCSS', 'jquery', 'bootstrap', 'GSAP'],
    images: [],
    mainLink: 'https://www.papayaplay.com/portal.do',
    links: undefined,
  },
  {
    thumbnail: '/update_1.png',
    name: 'Microsites & Webshop',
    desc: 'The website that promotes the game updates and events every specific duration depends on the games. Also created webshop or web games with animations to increase the features that interact with users',
    module: ['Vue', 'SCSS', 'tailwindcss', 'jquery', 'GSAP'],
    images: ['bg-update-1', 'bg-update-2', 'bg-update-3'],
    links: [
      'https://uwo.papayaplay.com/uwo.do?tp=shop',
      'https://latale.papayaplay.com/latale.do?tp=update',
      'https://warrock.papayaplay.com/warrock.do?tp=gacha',
      'https://uwo.papayaplay.com/uwo.do?tp=update',
    ],
    mainLink: undefined,
  },
  {
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
  },
  {
    thumbnail: '/grmk_4.png',
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
  },
  {
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
  },
];

export default ProjectCardItem;
