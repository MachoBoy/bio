import Image from 'next/image';
import useScrollPosition from '../../hook/useScrollPosition';
import { useScrollSections } from 'react-scroll-section';

interface Props {
  isNavOpen: boolean;
  setNavOpen: Function;
}

const Header = ({ isNavOpen, setNavOpen }: Props) => {
  const scrollPosition = useScrollPosition();
  const sections = useScrollSections();

  const handleNav = () => {
    setNavOpen(!isNavOpen);
  };

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
        <button
          className='hamburger w-6 items-center justify-center relative z-50 lg:hidden xxs:flex'
          onClick={handleNav}
        >
          <span
            className={`transform transition w-full h-px bg-white absolute ${
              isNavOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
            }`}
          ></span>
          <span
            className={`transform transition w-full h-px bg-white absolute ${
              isNavOpen ? 'opacity-0 translate-x-3' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`transform transition w-full h-px bg-white absolute ${
              isNavOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
            }`}
          ></span>
        </button>
        <aside
          className={`sm:w-1/2 xxs:w-3/4 h-screen bg-card-bg fixed top-0 bottom-0 right-0 shadow-2xl py-14 px-3 flex items-center transition-all ${
            isNavOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className='w-full flex justify-between items-center flex-col text-center'>
            <ul className='nav-element flex flex-col'>
              {sections.map(({ id, onClick, selected }, index) => (
                <li
                  className={`block w-full p-4 mb-2 font-notokr text-lg ${
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
        </aside>
        <ul className='nav-element flex-row lg:flex xxs:hidden'>
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
