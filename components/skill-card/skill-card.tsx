import Image from 'next/image';

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
      icon: '/graph.png',
      name: 'GraphQL',
    },
  ];
  return (
    <div className='skill-card-container flex justify-center flex-row flex-wrap h-fit'>
      {skillCardItem.map((item, index) => (
        <div
          className='flex-col xl:w-48 lg:w-44 md:w-32 md:h-36 sm:w-28 sm:h-28 xs:w-24 xs:h-24 xxs:w-20 xxs:h-20 rounded-xl bg-card-bg hover:bg-purple-400 m-2 p-3 flex justify-center items-center shadow-md hover:shadow-lg transition-all'
          key={index}
        >
          <div className='text-center w-full'>
            <div className='relative sm:w-16 sm:h-16 xs:w-12 xs:h-12 xxs:w-12 xxs:h-12 m-auto'>
              <Image
                src={item.icon}
                alt={item.name}
                layout='fill'
                objectFit='contain'
              />
            </div>
            <span className='notokr text-white font-light my-auto md:mt-3 sm:mt-0 block xl:text-2xl lg:text-xl xs:text-base xxs:text-xs'>
              {item.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
