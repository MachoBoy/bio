import { useState } from 'react';
import Parallax from '../parallax/Parallax';
import FadeInBottom from '../fade-in-bottom/fadeInBottom';
import SectionTitle from '../section-title/section-title';

const ExperienceCard = () => {
  const [experienceItem, setExperienceItem] = useState([
    {
      name: 'GRMK',
      position: 'Full Stack Developer',
      date: '2021 August - Current',
      description: [
        'Designed client-side and server-side architecture',
        'Created the admin dashboard of the E-commerce platform.',
        'Build features and applications with a mobile responsive design.',
        'Test application to find troubleshoot, debug and update with latest version.',
        'Supervised, led, and mentored 3 junior team member to achieve high performance.',
        'Write technical documentation.',
      ],
      isActive: true,
    },
    {
      name: 'Vertigo Games',
      position: 'Front End Developer',
      date: '2018 January - 2022 March',
      description: [
        'Delivered 100+ projects of landing pages with mobile responsive design for game services.',
        'Built 10+ reusable templates to support email marketing campaigns and promotions.',
        'Developed functions and maintain client side game platform.',
        'Created the admin dashboard of the game platform services.',
        'Built reusable code and libraries for future use.',
        'Optimize the speed and scalability of the applications.',
      ],
      isActive: false,
    },
    {
      name: 'Hiossen Implant',
      position: 'Front End Developer',
      date: '2016 December - 2017 July',
      description: [
        'Created E-commerce platform with Shopify.',
        'Generate custom Shopify themes and modify pre-existing templates based on brand objectives.',
        'Connect with marketing tools, platforms APIs, and apps to optimize the store for functionalities.',
      ],
      isActive: false,
    },
  ]);

  const handleExpItem = (index: number) => {
    console.log(index);
    const modifyExpItem = experienceItem.map((exp, expIndex) => {
      if (expIndex === index) {
        return { ...exp, isActive: true };
      }
      return { ...exp, isActive: false };
    });
    setExperienceItem(modifyExpItem);
  };

  return (
    <FadeInBottom isList={false}>
      <div className='relative'>
        <Parallax offset={110}>
          <div className='absolute 2xl:-top-56 xl:-top-44 lg:-top-36 md:-top-28 sm:-top-24 xs:-top-20 xxs:-top-16'>
            <SectionTitle number='03' title='Experiences' />
          </div>
        </Parallax>
        <Parallax offset={80}>
          <div className='exp-card-container w-full bg-blue-400 dark:bg-card-bg p-5 rounded-2xl flex sm:flex-row xxs:flex-col lg:h-[404px] xs:h-[500px] xxs:h-auto shadow-xl'>
            <div className='relative flex justify-start sm:flex-col xxs:flex-row md:w-max xxs:overflow-x-visible'>
              {experienceItem.map((item, index) => (
                <button
                  className={`block sm:m-3 xxs:m-2 sm:text-left xxs:text-center lg:text-base md:text-sm xxs:text-xs ${
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
            {experienceItem.map((exp, expIndex) => {
              return exp.isActive ? (
                <div
                  className='desc text-white pt-3 sm:pl-6 xxs:pl-2 max-w-3xl w-full'
                  key={expIndex}
                >
                  <div className='sm:text-2xl xxs:text-md'>
                    {exp.position}{' '}
                    <span className='text-[#FFD24C] dark:text-purple-400'>
                      @ {exp.name}
                    </span>
                  </div>
                  <div className='md:text-lg xxs:text-sm mt-1 sm:mb-5 xxs:mb-2 text-teal-900 dark:text-dusty-grey font-robotoMono'>
                    {exp.date}
                  </div>
                  <div>
                    <ul>
                      {exp.description.map((desc, descKey) => (
                        <li
                          className="relative pl-8 mb-2 lg:text-xl md:text-lg sm:text-base xxs:text-sm before:content-['>'] before:absolute before:left-0"
                          key={descKey}
                        >
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </Parallax>
      </div>
    </FadeInBottom>
  );
};

export default ExperienceCard;
