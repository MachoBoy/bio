import Image from 'next/image';
import { useTheme } from 'next-themes';
import useScrollPosition from '../../hook/useScrollPosition';
import { useScrollSections } from 'react-scroll-section';

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
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`transition-colors duration-500 bg-light-white dark:bg-green-cyan fixed top-0 left-0 w-full sm:h-24 xxs:h-20 flex items-center justify-center mx-auto select-auto z-40 ${
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
          className='hamburger w-6 h-8 flex items-center justify-center relative z-50 lg:opacity-0 xxs:opacity-100'
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
        <aside
          className={`sm:w-1/2 xxs:w-3/4 h-screen bg-light-white dark:bg-card-bg fixed top-0 bottom-0 right-0 shadow-2xl py-14 px-3 flex items-center transition-all ${
            isNavOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className='w-full flex justify-between items-center flex-col text-center'>
            <ul className='nav-element flex flex-col'>
              {sections.map(({ id, onClick, selected }, index) => (
                <li
                  className={`block w-full p-4 mb-2 font-notokr text-lg ${
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
              <ul className='nav-element flex flex-row justify-center'>
                <li className='flex justify-center p-4 text-teal-900 dark:text-white hover:text-light-blue dark:hover:text-purple-400 cursor-pointer'>
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
                <li className='flex justify-center p-4 text-teal-900 dark:text-white hover:text-light-blue dark:hover:text-purple-400 cursor-pointer'>
                  <a
                    href='https://www.linkedin.com/in/jiwon-park-vanBusan/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      fill='currentColor'
                      className='bi bi-linkedin'
                      viewBox='0 0 16 16'
                    >
                      <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
                    </svg>
                  </a>
                </li>
              </ul>
              <li className='flex justify-center'>
                {theme === 'light' ? (
                  <button
                    className='flex items-center p-4 text-teal-900 dark:text-white dark:hover:text-light-orange hover:text-purple-400 cursor-pointer'
                    onClick={() => {
                      setTheme('dark');
                      setNavOpen(false);
                    }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      fill='currentColor'
                      className='bi bi-moon'
                      viewBox='0 0 16 16'
                    >
                      <path d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z' />
                    </svg>
                  </button>
                ) : (
                  <button
                    className='flex items-center p-4 text-teal-900 dark:text-white dark:hover:text-light-orange hover:text-purple-400 cursor-pointer'
                    onClick={() => {
                      setTheme('light');
                      setNavOpen(false);
                    }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      fill='currentColor'
                      className='bi bi-brightness-high'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z' />
                    </svg>
                  </button>
                )}
              </li>
            </ul>
          </nav>
        </aside>
        <ul className='nav-element flex-row lg:flex xxs:hidden'>
          {sections.map(({ id, onClick, selected }, index) => (
            <li
              className={`block p-4 font-notokr ${
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
          ))}
          <li className='flex items-center p-4 text-teal-900 dark:text-white hover:text-light-blue dark:hover:text-purple-400 cursor-pointer'>
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
          <li className='flex items-center p-4 text-teal-900 dark:text-white hover:text-light-blue dark:hover:text-purple-400 cursor-pointer'>
            <a
              href='https://www.linkedin.com/in/jiwon-park-vanBusan/'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                className='bi bi-linkedin'
                viewBox='0 0 16 16'
              >
                <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
              </svg>
            </a>
          </li>
          <li>
            {theme === 'light' ? (
              <button
                className='flex items-center p-4 text-teal-900 dark:text-white dark:hover:text-light-orange hover:text-purple-400 cursor-pointer'
                onClick={() => setTheme('dark')}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='currentColor'
                  className='bi bi-moon'
                  viewBox='0 0 16 16'
                >
                  <path d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z' />
                </svg>
              </button>
            ) : (
              <button
                className='flex items-center p-4 text-teal-900 dark:text-white dark:hover:text-light-orange hover:text-purple-400 cursor-pointer'
                onClick={() => setTheme('light')}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='currentColor'
                  className='bi bi-brightness-high'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z' />
                </svg>
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
