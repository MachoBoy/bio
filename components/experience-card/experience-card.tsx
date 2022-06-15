import { useState } from 'react';

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
    <div className='exp-card-container w-full bg-card-bg p-5 rounded-2xl flex sm:flex-row xxs:flex-col md:h-auto xxs:min-h-fit min-h-full shadow-md'>
      <div className='relative flex justify-start sm:flex-col xxs:flex-row md:w-max xxs:overflow-x-visible'>
        {experienceItem.map((item, index) => (
          <button
            className={`block sm:m-3 xxs:m-2 sm:text-left xxs:text-center text-sm ${
              item.isActive ? 'text-purple-400' : 'text-white'
            } hover:text-purple-400 transition-colors`}
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
            className='desc text-white pt-3 sm:pl-6 xxs:pl-2 max-w-2xl w-full'
            key={expIndex}
          >
            <div className='sm:text-2xl xxs:text-md'>
              {exp.position}{' '}
              <span className='text-purple-400'>@ {exp.name}</span>
            </div>
            <div className='text-md mt-1 sm:mb-5 xxs:mb-2 text-dusty-grey font-robotoMono'>
              {exp.date}
            </div>
            <div>
              <ul>
                {exp.description.map((desc, descKey) => (
                  <li
                    className="relative pl-8 mb-2 lg:text-lg sm:text-base xxs:text-sm before:content-['>'] before:absolute before:left-0"
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
  );
};

export default ExperienceCard;
