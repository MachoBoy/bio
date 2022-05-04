import Image from 'next/image';

const SkillCard = () => {
  const skillCardItem = [
    {
      w: '95',
      h: '85',
      icon: '/html.png',
      name: 'HTML 5',
    },
    {
      w: '95',
      h: '85',
      icon: '/css.png',
      name: 'CSS',
    },
    {
      w: '85',
      h: '80',
      icon: '/sass.png',
      name: 'Sass',
    },
    {
      w: '70',
      h: '70',
      icon: '/js.png',
      name: 'JavaScript',
    },
    {
      w: '70',
      h: '70',
      icon: '/typescript.png',
      name: 'TypeScript',
    },
    {
      w: '85',
      h: '75',
      icon: '/react.png',
      name: 'React JS',
    },
    {
      w: '85',
      h: '75',
      icon: '/vue.png',
      name: 'Vue JS',
    },
    {
      w: '77',
      h: '78',
      icon: '/next.png',
      name: 'Next JS',
    },
    {
      w: '75',
      h: '75',
      icon: '/node.png',
      name: 'Node JS',
    },
    {
      w: '75',
      h: '75',
      icon: '/graph.png',
      name: 'GraphQL',
    },
  ];
  return (
    <div className='skill-card-container flex justify-center flex-row flex-wrap h-fit'>
      {skillCardItem.map((item, index) => (
        <div
          className='flex-col xl:w-48 lg:w-44 md:w-32 md:h-36 sm:w-28 sm:h-28 xs:w-24 xs:h-24 rounded-xl bg-card-bg hover:bg-purple-400 m-2 p-3 flex justify-center items-center shadow-md hover:shadow-lg transition-all'
          key={index}
        >
          <div className='text-center w-full'>
            <div className='relative sm:w-16 sm:h-16 xs:w-12 xs:h-12 m-auto'>
              <Image
                src={item.icon}
                alt={item.name}
                layout='fill'
                objectFit='contain'
              />
            </div>
            <span className='notokr text-white font-light my-auto md:mt-3 sm:mt-0 block xl:text-2xl lg:text-xl xxs:text-base'>
              {item.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
