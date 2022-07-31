const Menu = () => {
  const menuItem = [
    {
      num: '01',
      name: 'Skills',
    },
    {
      num: '02',
      name: 'Experiences',
    },
    {
      num: '03',
      name: 'Projects',
    },
  ];
  return (
    <div className='flex flex-col mt-16 w-2/5'>
      {menuItem.map((item, index) => (
        <div
          className='flex flex-row items-center mt-4 group cursor-pointer'
          key={index}
        >
          <span className='text-2xl text-dusty-grey group-hover:text-white transition-all'>
            {item.num}
          </span>
          <span className='w-11 h-1 bg-dusty-grey group-hover:bg-white group-hover:w-16 mx-2 transition-all'></span>
          <span className='text-2xl text-dusty-grey group-hover:text-white transition-all'>
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Menu;
