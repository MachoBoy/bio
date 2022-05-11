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
      className={`fixed top-0 left-0 w-full h-24 bg-green-cyan flex items-center justify-center mx-auto select-auto z-40 ${
        scrollPosition === 0 ? 'shadow-none' : 'shadow-lg'
      }`}
    >
      <nav className='w-11/12 flex justify-between items-center'>
        <div className='relative block w-20 h-20 mt-3'>
          <Image src='/jplogo.png' layout='fill' alt='logo' />
        </div>
        <button
          className='hamburger w-6 flex items-center justify-center relative z-50 lg:opacity-0 xxs:opacity-100'
          onClick={() => handleNav()}
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
              <li className='flex justify-center p-4 text-white hover:text-purple-400 cursor-pointer'>
                <a
                  href='https://github.com/MachoBoy'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='currentColor'
                    className='bi bi-github'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
                  </svg>
                </a>
              </li>
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
          <li className='flex items-center p-4 text-white hover:text-purple-400 cursor-pointer'>
            <a
              href='https://github.com/MachoBoy'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                className='bi bi-github'
                viewBox='0 0 16 16'
              >
                <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
