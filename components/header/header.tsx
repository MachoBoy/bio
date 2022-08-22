import Image from 'next/image';
import { useTheme } from 'next-themes';
import useScrollPosition from '../../hook/useScrollPosition';
import { useScrollSections } from 'react-scroll-section';
import GithubIcon from '../github-icon/GithubIcon';
import LinkedInIcon from '../linkedin-icon/LinkedinIcon';
import MoonIcon from '../moon-icon/moonIcon';
import SunIcon from '../sun-icon/sunIcon';

interface Props {
  isNavOpen: boolean;
  setNavOpen: Function;
}

const Header = ({ isNavOpen, setNavOpen }: Props) => {
  const scrollPosition = useScrollPosition();
  const sections = useScrollSections();
  const { theme, setTheme } = useTheme();

  const handleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const closeNav = (scrollToSection: () => void) => {
    setNavOpen(false);
    scrollToSection();
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };

  return (
    <header
      className={`transition-colors duration-500 bg-light-white dark:bg-green-cyan fixed top-0 left-0 w-full sm:h-24 h-20 flex items-center justify-center mx-auto select-auto z-40 ${
        scrollPosition === 0 ? 'shadow-none' : 'shadow-lg'
      }`}
    >
      <nav className='w-11/12 flex justify-between items-center'>
        <div
          className='relative block mt-3 cursor-pointer box-border w-20 max-h-20'
          onClick={() => scrollToTop()}
        >
          <Image
            src='/jplogo.png'
            layout='responsive'
            width={80}
            height={80}
            alt='logo'
          />
        </div>
        <button
          className='hamburger w-6 h-8 flex items-center justify-center relative z-50 lg:opacity-0 opacity-100'
          onClick={() => handleNav()}
        >
          <span
            className={`transform transition w-full h-px bg-light-blue dark:bg-white absolute ${
              isNavOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
            }`}
          ></span>
          <span
            className={`transform transition w-full h-px bg-light-blue dark:bg-white absolute ${
              isNavOpen ? 'opacity-0 translate-x-3' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`transform transition w-full h-px bg-light-blue dark:bg-white absolute ${
              isNavOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
            }`}
          ></span>
        </button>
        {/* tablet mobile menu */}
        <aside
          className={`sm:w-1/2 w-3/4 h-screen bg-light-white dark:bg-card-bg fixed top-0 bottom-0 right-0 shadow-2xl py-14 px-3 flex items-center transition-all ${
            isNavOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className='w-full flex justify-between items-center flex-col text-center'>
            <ul className='nav-element flex flex-col'>
              {sections &&
                sections.map(({ id, onClick, selected }, index) => (
                  <li
                    className={`block w-full p-4 mb-2 text-lg ${
                      selected
                        ? 'text-light-blue dark:text-purple-400'
                        : 'text-teal-900 dark:text-white'
                    }`}
                    key={index}
                  >
                    <button
                      className='hover:text-purple-400'
                      onClick={() => closeNav(onClick)}
                    >
                      {id}
                    </button>
                  </li>
                ))}
              <li className='nav-element flex flex-row justify-center'>
                <div className='flex justify-center p-4 text-teal-900 dark:text-white hover:text-light-blue dark:hover:text-purple-400 cursor-pointer'>
                  <a
                    href='https://github.com/MachoBoy'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <GithubIcon />
                  </a>
                </div>
                <div className='flex justify-center p-4 text-teal-900 dark:text-white hover:text-light-blue dark:hover:text-purple-400 cursor-pointer'>
                  <a
                    href='https://www.linkedin.com/in/jiwon-park-vanBusan/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </li>
              <li className='flex justify-center'>
                {theme === 'light' ? (
                  <button
                    className='flex items-center p-4 text-teal-900 dark:text-white dark:hover:text-light-orange hover:text-purple-400 cursor-pointer'
                    onClick={() => {
                      setTheme('dark');
                      setNavOpen(false);
                    }}
                  >
                    <MoonIcon />
                  </button>
                ) : (
                  <button
                    className='flex items-center p-4 text-teal-900 dark:text-white dark:hover:text-light-orange hover:text-purple-400 cursor-pointer'
                    onClick={() => {
                      setTheme('light');
                      setNavOpen(false);
                    }}
                  >
                    <SunIcon />
                  </button>
                )}
              </li>
            </ul>
          </nav>
        </aside>
        {/* desktop */}
        <ul className='nav-element flex-row hidden lg:flex'>
          {sections
            ? sections.map(({ id, onClick, selected }, index) => (
                <li
                  className={`block p-4 ${
                    selected
                      ? 'text-light-blue dark:text-purple-400'
                      : 'text-teal-900 dark:text-white'
                  }`}
                  key={index}
                >
                  <button
                    className='hover:text-light-blue dark:hover:text-purple-400 text-lg font-semibold'
                    onClick={onClick}
                  >
                    {id}
                  </button>
                </li>
              ))
            : null}
          <li className='flex items-center p-4 text-teal-900 dark:text-white hover:text-light-blue dark:hover:text-purple-400 cursor-pointer'>
            <a
              href='https://github.com/MachoBoy'
              target='_blank'
              rel='noreferrer'
            >
              <GithubIcon />
            </a>
          </li>
          <li className='flex items-center p-4 text-teal-900 dark:text-white hover:text-light-blue dark:hover:text-purple-400 cursor-pointer'>
            <a
              href='https://www.linkedin.com/in/jiwon-park-vanBusan/'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            {theme === 'light' ? (
              <button
                className='flex items-center p-4 text-teal-900 dark:text-white dark:hover:text-light-orange hover:text-purple-400 cursor-pointer'
                onClick={() => setTheme('dark')}
              >
                <MoonIcon />
              </button>
            ) : (
              <button
                className='flex items-center p-4 text-teal-900 dark:text-white dark:hover:text-light-orange hover:text-purple-400 cursor-pointer'
                onClick={() => setTheme('light')}
              >
                <SunIcon />
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
