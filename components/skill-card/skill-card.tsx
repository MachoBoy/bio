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
          className='w-56 h-44 rounded-xl bg-card-bg hover:bg-purple-400 m-2 p-3 flex justify-center items-start shadow-md hover:shadow-lg transition-all'
          key={index}
        >
          <div className='m-auto text-center'>
            <Image
              className='m-auto'
              src={item.icon}
              alt={item.name}
              width={item.w}
              height={item.h}
            />
            <span className='notokr text-white text-2xl font-light my-auto mt-2 block'>
              {item.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
