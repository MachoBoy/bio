import Image from 'next/image';
import SectionTitle from '../section-title/section-title';

const ProjectList = () => {
  const projectCardItem = [
    {
      thumbnail: '/hiossen_1.png',
      //thumbnail: 'bg-hiossen-1',
      name: 'Hiossen Implant Shop',
      desc: 'An E-commerce platform that registered doctor can order the implant equipments. The option and quantity of items can be configure in shopify admin panel. View order status and history in account',
      module: ['Shopify', 'Plugins'],
      images: ['bg-hiossen-1', 'bg-hiossen-2', 'bg-hiossen-3'],
      links: ['https://denall.ca/'],
    },
    {
      thumbnail: '/papaya-admin_1.png',
      //thumbnail: 'bg-papaya-admin-1',
      name: 'Papaya Play Admin Dashboard',
      desc: 'An application that give you control over the Papaya Portal. The main features of admin tool are add admin account, block the accounts, user registration, password resets, publish / edit / delete posts, upload image files, track statistics data on graphs, configure the elements of the web contents, track sales / refund logs',
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
    },
    {
      thumbnail: '/papaya-portal_1.png',
      //thumbnail: '/bg-papaya-portal-1',
      name: 'Papaya Play Portal',
      desc: 'The web platforms that inform user about news, events, updates of games, purchase the game cash with cross platform billing APIs (Xsolla, Paypal, etc), manage the game forum based on vanilla forum, connect user to helpdesk',
      module: ['Vue', 'SCSS', 'jquery', 'bootstrap'],
      images: [
        'bg-papaya-portal-1',
        'bg-papaya-portal-2',
        'bg-papaya-portal-3',
        'bg-papaya-portal-4',
      ],
      links: ['https://www.papayaplay.com/portal.do'],
    },
    {
      thumbnail: '/update_1.png',
      //thumbnail: '/bg-update-1',
      name: 'Updates & Webshop & Newsletter',
      desc: 'The website that promotes the game updates and events every specific duration depends on the games. Also created webshop or web games with animations to increase the features that interact with users',
      module: ['Vue', 'SCSS', 'jquery', 'gsap'],
      images: ['bg-update-1', 'bg-update-2', 'bg-update-3'],
      links: [
        'https://uwo.papayaplay.com/uwo.do?tp=shop',
        'https://latale.papayaplay.com/latale.do?tp=update',
        'https://warrock.papayaplay.com/warrock.do?tp=gacha',
        'https://uwo.papayaplay.com/uwo.do?tp=update',
      ],
    },
    {
      thumbnail: '/vertigogames_1.png',
      //thumbnail: '/bg-vertigo-games-1',
      name: 'Vertigo Games',
      desc: 'The official website that introduce the company. Implemented Headless WordPress that manage backend contents while front-end developer access the data via APIs. Also offer to switch two different languages(English / Korean)',
      module: [
        'React',
        'styled-component',
        'TypeScript',
        'react-intl',
        'Headless CMS',
      ],
      images: [
        'bg-vertigo-games-1',
        'bg-vertigo-games-2',
        'bg-vertigo-games-3',
        'bg-vertigo-games-4',
      ],
      links: ['https://vertigogames.com/'],
    },
    {
      thumbnail: '/grmk_3.png',
      //thumbnail: 'bg-grmk-1',
      name: 'Gorae Market Admin Dashboard',
      desc: 'The web application that control over the seafood E-commerce platform. The main features are add admin account, publish / update / delete notifications, products, create coupon, track transactions, track packages, and manage product reviews.',
      module: ['React', 'Ant Design', 'tailwindcss', 'Firebase', 'TypeScript'],
      images: ['bg-grmk-1', 'bg-grmk-2', 'bg-grmk-3', 'bg-grmk-4', 'bg-grmk-5'],
    },
  ];
  return (
    <div className='relative'>
      <div className='absolute 2xl:-top-44 xl:-top-36 lg:-top-28 md:-top-16 sm:-top-10 xs:-top-8 xxs:-top-3'>
        <SectionTitle number='04' title='Projects' />
      </div>
      <div className='w-full'>
        {projectCardItem.map(
          ({ thumbnail, name, desc, module, images, links }, index) => (
            <div
              className='list lg:h-[350px] xs:h-[650px] xxs:h-auto mt-10 flex lg:flex-row xxs:flex-col p-6 rounded-2xl bg-light-orange dark:bg-card-bg shadow-xl last:mb-10'
              key={index}
            >
              <div className='left lg:w-5/12 w-full h-full relative xs:block xxs:hidden'>
                <Image
                  className='rounded-2xl'
                  src={thumbnail}
                  alt={thumbnail}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='right lg:w-7/12 xxs:w-full lg:pl-6 xxs:pl-0 lg:mt-0 xxs:mt-3 flex flex-col justify-start items-start'>
                <h3 className='w-full font-notokr xl:text-3xl lg:text-2xl md:text-xl xxs:text-lg text-white md:text-left xxs:text-center'>
                  {name}
                </h3>
                <p className='w-full font-notokr mt-5 xl:text-xl lg:text-md text-white md:text-left xxs:text-center'>
                  {desc}
                </p>
                <div className='w-full flex md:justify-start xxs:justify-center mt-2 flex-wrap'>
                  {module.map((lib: string, index: number) => (
                    <div
                      className='w-auto py-1 px-2 sm:m-2 xxs:m-1 lg:text-sm xxs:text-xs text-white bg-light-blue-2  dark:bg-gray-500 rounded-md shadow-md first:ml-0'
                      key={index}
                    >
                      {lib}
                    </div>
                  ))}
                </div>
                <div className='w-full flex md:justify-start md:items-start xxs:justify-center mt-2 text-center'>
                  {links
                    ? links.map((link: string, index: number) => (
                        <a
                          className='text-white hover:text-light-blue dark:hover:text-purple-400 sm:mx-3 xxs:mx-1 sm:text-base xxs:text-sm first:ml-0'
                          key={index}
                          href={link}
                          target='_blank'
                          rel='noreferrer'
                        >
                          Link {index + 1}
                        </a>
                      ))
                    : null}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectList;
