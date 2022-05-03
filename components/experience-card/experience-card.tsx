import { useState } from 'react';

const ExperienceCard = () => {
  const [experienceItem, setExperienceItem] = useState([
    {
      name: 'GRMK',
      position: 'Full Stack Developer',
      date: '2021 August - Current',
      description: [
        'Build the admin panel of the E-commerce platform',
        'Write Front End and Back-End codes using Firebase and Firebase cloud functions',
        'Developed the Back-End codes to cancel the transactions using third party APIs',
        'Developed security and permissions',
      ],
      isActive: true,
    },
    {
      name: 'Vertigo Games',
      position: 'Front End Developer',
      date: '2018 January - 2022 March',
      description: [
        'Developed user experience features and deploy a platform',
        'Optimize the speed and scalability of the application',
        'Developed promotion and event pages to promote games',
        'Built, optimized, updated and maintained the features of the admin panel',
        'Write documentation to help teams to maintain the application',
      ],
      isActive: false,
    },
    {
      name: 'Hiossen Implant',
      position: 'Front End Developer',
      date: '2016 December - 2017 July',
      description: [
        'Building Online Stores, themes, and apps using the Shopify platform',
        'Developing customize code, scripts and apps to solve complex problems',
        'Integrate third-party apps into online store',
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
    <div className='exp-card-container w-full bg-card-bg p-5 rounded-2xl flex flex-row h-96 min-h-full shadow-md'>
      <div className='relative flex flex-col justify-start w-max'>
        {experienceItem.map((item, index) => (
          <button
            className={`block m-3 text-left text-sm ${
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
            className='desc text-white pt-3 pl-6 max-w-xl w-full'
            key={expIndex}
          >
            <div className='text-2xl'>
              {exp.position}{' '}
              <span className='text-purple-400'>@ {exp.name}</span>
            </div>
            <div className='text-md mt-1 mb-5 text-dusty-grey font-robotoMono'>
              {exp.date}
            </div>
            <div>
              <ul>
                {exp.description.map((desc, descKey) => (
                  <li
                    className="relative pl-8 mb-2 lg:text-lg md:text-base before:content-['>'] before:absolute before:left-0"
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
