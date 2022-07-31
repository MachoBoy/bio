import Parallax from '../parallax/Parallax';
import SectionTitle from '../section-title/section-title';

const Introduce = () => {
  return (
    <div className='relative'>
      <Parallax offset={100}>
        <div className='absolute 2xl:-top-44 xl:-top-36 lg:-top-32 md:-top-24 xxs:-top-20'>
          <SectionTitle number='01' title='About Me' />
        </div>
      </Parallax>
      <Parallax offset={50}>
        <div className='z-10'>
          <span className='block lg:text-6xl sm:text-5xl xs:text-4xl xxs:text-3xl font-bold text-light-blue dark:text-white whitespace-pre-line'>
            <p>Hello,</p>
            <p className='sm:mt-4 xxs:mt-2'>I&apos;m Jiwon Park</p>
          </span>
          <p className='lg:text-2xl lg:leading-10 sm:text-xl xxs:text-base sm:leading-8 text-teal-900 dark:text-dusty-grey sm:mt-10 xs:mt-8 xxs:mt-6'>
            I&apos;m a&nbsp;
            <span className='text-light-blue dark:text-white underline underline-offset-2'>
              Front End Developer,
            </span>
            <br /> who love to support community with user-friendly websites and
            web applications. <br />
            I&apos;m from Busan, Korea 🇰🇷 and currently staying in Vancouver,
            Canada 🇨🇦
            <br /> I have developed the{' '}
            <span className='text-light-blue dark:text-white underline underline-offset-2'>
              two custom admin dashboards
            </span>{' '}
            for the platforms, and&nbsp;
            <span className='text-light-blue dark:text-white underline underline-offset-2'>
              delivered +100 landing pages with animations.
            </span>{' '}
            Recently, I have experienced{' '}
            <span className='text-light-blue dark:text-white underline underline-offset-2'>
              designing the web application to deploy
            </span>{' '}
            a project with Firebase. I love to{' '}
            <span className='text-light-blue dark:text-white underline underline-offset-2'>
              study and implement
            </span>{' '}
            new technology. I don&apos;t like to settle and try to move{' '}
            <span className='text-light-blue dark:text-white underline underline-offset-2'>
              forward in my career path.
            </span>
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default Introduce;
