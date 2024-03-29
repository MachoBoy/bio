import Parallax from '../parallax/Parallax';
import SectionTitle from '../section-title/section-title';

const Introduce = () => {
  return (
    <div className='relative'>
      <Parallax offset={100}>
        <div className='absolute 2xl:-top-52 xl:-top-36 lg:-top-32 md:-top-24 -top-20'>
          <SectionTitle number='01' title='About Me' />
        </div>
      </Parallax>
      <Parallax offset={50}>
        <div className='z-10'>
          <span className='block lg:text-6xl sm:text-5xl xs:text-4xl text-3xl font-bold text-light-blue dark:text-white whitespace-pre-line'>
            <p>Hello,</p>
            <p className='sm:mt-4 mt-2'>I&apos;m Jiwon Park</p>
          </span>
          <p className='lg:text-2xl lg:leading-10 sm:text-xl text-base sm:leading-8 text-teal-900 dark:text-dusty-grey sm:mt-10 xs:mt-8 mt-6'>
            I&apos;m a&nbsp;
            <span className='text-light-blue dark:text-white underline underline-offset-2'>
              Front End Developer,
            </span>
            <br /> who love to support community with user-friendly applications{' '}
            <br />
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
            Recently, I have experienced designing the web application to deploy
            a project with Firebase. I love to{' '}
            <span className='text-light-blue dark:text-white underline underline-offset-2'>
              study and implement
            </span>{' '}
            new technology.
            <span className='text-light-blue dark:text-white underline underline-offset-2'>
              {' '}
              Keep challenging the unfamiliar way.{' '}
            </span>
            Do not wait until everything is perfect, Even if it&apos;s not
            enough,{' '}
            <span className='text-light-blue dark:text-white underline underline-offset-2'>
              let&apos;s continue to try new things.
            </span>
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default Introduce;
