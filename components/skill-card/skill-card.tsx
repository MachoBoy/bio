import Image from 'next/image';
import SectionTitle from '../section-title/section-title';

const SkillCard = () => {
  const skillCardItem = [
    {
      icon: '/html.png',
      name: 'HTML 5',
    },
    {
      icon: '/css.png',
      name: 'CSS',
    },
    {
      icon: '/sass.png',
      name: 'Sass',
    },
    {
      icon: '/styled-components.png',
      name: 'Styled-components',
    },
    {
      icon: '/tailwindcss.png',
      name: 'Tailwindcss',
    },
    {
      icon: '/js.png',
      name: 'JavaScript',
    },
    {
      icon: '/typescript.png',
      name: 'TypeScript',
    },
    {
      icon: '/react.png',
      name: 'React JS',
    },
    {
      icon: '/vue.png',
      name: 'Vue JS',
    },
    {
      icon: '/next.png',
      name: 'Next JS',
    },
    {
      icon: '/node.png',
      name: 'Node JS',
    },
    {
      icon: '/expressjs-icon.png',
      name: 'Express',
    },
    {
      icon: '/graph.png',
      name: 'GraphQL',
    },
    {
      icon: '/firebase.png',
      name: 'Firebase',
    },
  ];
  return (
    <div className='relative'>
      <div className='absolute 2xl:-top-44 xl:-top-36 lg:-top-28 md:-top-20 sm:-top-14 xs:-top-12 xxs:-top-8'>
        <SectionTitle number='02' title='Skills' />
      </div>
      <div className='z-10 skill-card-container flex justify-center flex-row flex-wrap h-fit'>
        {skillCardItem.map((item, index) => (
          <div
            className='flex-col xl:w-48 lg:w-44 md:w-32 md:h-36 sm:w-28 sm:h-28 xs:w-24 xs:h-24 xxs:w-20 xxs:h-20 rounded-xl bg-light-blue-2 dark:bg-card-bg hover:bg-light-blue dark:hover:bg-purple-400 m-2 p-3 flex justify-center items-center shadow-xl hover:shadow-lg transition-all'
            key={index}
          >
            <div className='text-center w-full'>
              <div className='relative sm:w-16 sm:h-16 xs:w-12 xs:h-12 xxs:w-12 xxs:h-12 m-auto'>
                {item.icon ? (
                  <Image
                    src={item.icon}
                    alt={item.name}
                    layout='fill'
                    objectFit='contain'
                  />
                ) : null}
              </div>
              <span className='notokr tracking-wide leading-3 text-white font-light my-auto md:mt-3 xxs:mt-1 block md:text-lg xs:text-[11px] xxs:text-[10px]'>
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
