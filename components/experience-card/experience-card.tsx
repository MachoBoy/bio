import { useState } from 'react';
import Parallax from '../parallax/Parallax';
import FadeInBottom from '../fade-in-bottom/fadeInBottom';
import SectionTitle from '../section-title/section-title';

const ExperienceCard = () => {
  const [experienceItem, setExperienceItem] = useState([
    {
      name: 'Pixieset',
      position: 'Software Engineer',
      date: '2022 September - Current',
      description: [
        'Build the Studio Manager platform and its admin dashboard.',
        'Developed the Studio Manager mobile app.',
        'Work on both the front end and the back end of Studio Manager.',
      ],
      isActive: true,
    },
    {
      name: 'GRMK',
      position: 'Full Stack Developer',
      date: '2021 August - 2022 August',
      description: [
        'Built the Gorae Market admin for a seafood commerce platform, covering products, coupons, reviews, and shipments.',
        'Implemented payment and shipment-tracking APIs with Express and Firebase.',
        'Mentored 3 junior developers.',
      ],
      isActive: false,
    },
    {
      name: 'Vertigo Games',
      position: 'Front End Developer',
      date: '2018 January - 2022 March',
      description: [
        'Built Papaya Play, a game portal for news, events, and cross-platform billing, and its admin dashboard.',
        'Shipped game sites for Uncharted Waters Online, WarRock, and La Tale, including the web shop, gacha, and music player.',
        'Delivered 100+ landing pages and 10+ email templates for game campaigns.',
      ],
      isActive: false,
    },
    {
      name: 'Hiossen Implant',
      position: 'Front End Developer',
      date: '2016 December - 2017 July',
      description: [
        'Built a Shopify store where registered doctors order implant equipment.',
        'Set up product options and order history in each clinic account.',
      ],
      isActive: false,
    },
  ]);

  const handleExpItem = (index: number) => {
    const modifyExpItem = experienceItem.map((exp, expIndex) => {
      if (expIndex === index) {
        return { ...exp, isActive: true };
      }
      return { ...exp, isActive: false };
    });
    setExperienceItem(modifyExpItem);
  };

  return (
    <div className='relative w-full'>
      <SectionTitle number='03' title='Experiences' />
      <FadeInBottom isList={false}>
        <Parallax offset={80}>
          <div className='exp-card-container w-full bg-blue-400 dark:bg-card-bg p-5 rounded-2xl flex sm:flex-row flex-col h-auto items-start shadow-xl'>
            <div className='relative flex shrink-0 justify-start sm:flex-col flex-row'>
              {experienceItem.map((item, index) => (
                <button
                  className={`block sm:m-3 m-2 sm:text-left text-center lg:text-base md:text-sm text-sm ${
                    item.isActive
                      ? 'text-[#FFD24C] dark:text-purple-400'
                      : 'text-white'
                  } hover:text-[#FFD24C] dark:hover:text-purple-400 transition-colors`}
                  key={index}
                  onClick={() => handleExpItem(index)}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className='grid w-full min-w-0 flex-1'>
              {experienceItem.map((exp, expIndex) => (
                <div
                  className={`desc col-start-1 row-start-1 min-w-0 text-white pt-3 sm:pl-6 pl-2 ${
                    exp.isActive ? '' : 'invisible'
                  }`}
                  key={expIndex}
                  aria-hidden={!exp.isActive}
                  inert={exp.isActive ? undefined : true}
                >
                  <div className='sm:text-2xl text-md'>
                    {exp.position}{' '}
                    <span className='text-[#FFD24C] dark:text-purple-400'>
                      @ {exp.name}
                    </span>
                  </div>
                  <div className='md:text-lg text-sm mt-1 sm:mb-5 mb-2 text-teal-900 dark:text-dusty-grey font-robotoMono'>
                    {exp.date}
                  </div>
                  <ul>
                    {exp.description.map((desc, descKey) => (
                      <li
                        className="relative pl-8 mb-2 tracking-wide break-words lg:text-xl md:text-lg sm:text-base text-sm before:content-['>'] before:absolute before:left-0"
                        key={descKey}
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Parallax>
      </FadeInBottom>
    </div>
  );
};

export default ExperienceCard;
