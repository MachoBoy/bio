import { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import ProjectDetail from '../project-detail/project-detail';

const ProjectCard = () => {
  const sliderRef = useRef<Slider>(null);
  useEffect(() => {
    Modal.setAppElement('#project-modal');
    // Anything in here is fired on component mount.
  }, []);
  const [modalIsOpen, setIsOpen] = useState(false);

  const projectCardItem = [
    {
      thumbnail: 'bg-hiossen-1',
      name: 'Hiossen Implant Shop',
      desc: 'An E-commerce platform that registered doctor can order the implant equipments. The option and quantity of items can be configure in shopify admin panel. View your order status and history in account',
      module: ['Shopify', 'Plugins'],
      images: ['bg-hiossen-1', 'bg-hiossen-2', 'bg-hiossen-3'],
      links: ['https://denall.ca/'],
    },
    {
      thumbnail: 'bg-papaya-admin-1',
      name: 'Papaya Play Admin Panel',
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
      thumbnail: 'bg-papaya-portal-1',
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
      thumbnail: 'bg-update-1',
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
      thumbnail: 'bg-vertigo-games-1',
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
      thumbnail: 'bg-grmk-1',
      name: 'Gorae Market Admin Panel',
      desc: 'The web application that control over the seafood E-commerce platform. The main features are add admin account, publish / update / delete notifications, products, create coupon, track transactions, track packages, and manage product reviews.',
      module: ['React', 'Ant Design', 'tailwindcss', 'Firebase', 'TypeScript'],
      images: ['bg-grmk-1', 'bg-grmk-2', 'bg-grmk-3', 'bg-grmk-4', 'bg-grmk-5'],
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  const customStyles = {
    content: {
      width: '60%',
      overflow: 'none',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: '1px solid #c084fc',
      background: '#36363A',
      padding: '50px',
    },
  };

  const openModal = (index: number) => {
    setTimeout(() => {
      const sliderElement = sliderRef.current;
      // console.log(sliderRef, index);
      if (sliderElement) {
        // do stuff
        sliderRef.current.slickGoTo(index);
      }
    }, 100);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='w-full'>
      <div className='flex flex-wrap justify-center items-start mx-auto'>
        {projectCardItem.map((item, index) => (
          <div
            className={`relative w-1/4 m-3 h-64 bg-cover bg-center ${item.thumbnail} bg-no-repeat group cursor-pointer`}
            key={index}
            onClick={() => openModal(index)}
          >
            <div className='bg-purple-400/70 absolute w-full h-full inset-0 text-white opacity-0 group-hover:opacity-100 flex justify-center items-center font-notokr text-2xl font-semibold transition-all text-center'>
              {item.name}
            </div>
          </div>
        ))}
      </div>
      <div id='project-modal'>
        <Modal
          closeTimeoutMS={500}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          overlayClassName='Overlay'
        >
          <div className='w-full'>
            <Slider {...settings} ref={sliderRef}>
              {projectCardItem.map((item, index) => (
                <ProjectDetail key={index} item={item} />
              ))}
            </Slider>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ProjectCard;
