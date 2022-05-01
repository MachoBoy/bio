import Image from 'next/image';
import useScrollPosition from '../../hook/useScrollPosition';
import { useScrollSections } from 'react-scroll-section';

const Header = () => {
  const scrollPosition = useScrollPosition();
  // const aboutSection = useScrollSection('about');
  // const skillSection = useScrollSection('skill');
  // const expSection = useScrollSection('experience');
  // const projectSection = useScrollSection('projects');
  const sections = useScrollSections();

  const menuItem = [
    {
      name: 'About Me',
    },
    {
      name: 'Skills',
    },
    {
      name: 'Experiences',
    },
    {
      name: 'Projects',
    },
  ];

  // const handleMenu = (name: string) => {
  //   if (name === 'About Me') {
  //     console.log(name);
  //     aboutSection.onClick;
  //   }
  // };
  return (
    <header
      className={`fixed top-0 left-0 w-full h-24 bg-green-cyan flex items-center justify-center mx-auto select-auto z-50 ${
        scrollPosition === 0 ? 'shadow-none' : 'shadow-lg'
      }`}
    >
      <nav className='w-11/12 flex justify-between items-center'>
        <div className='relative block w-20 h-20 mt-3'>
          <Image src='/jplogo.png' layout='fill' alt='logo' />
        </div>
        <ul className='nav-element flex flex-row'>
          {sections.map(({ id, onClick, selected }, index) => (
            <li
              className={`block p-4 font-notokr ${
                selected ? 'text-purple-400' : 'text-white'
              }`}
              key={index}
            >
              <button className='hover:text-purple-400' onClick={onClick}>
                {id}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
