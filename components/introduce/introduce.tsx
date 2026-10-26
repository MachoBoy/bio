import Parallax from '../parallax/Parallax';
import SectionTitle from '../section-title/section-title';

const Introduce = () => {
  return (
    <div className='relative w-full'>
      <SectionTitle number='01' title='About Me' />
      <Parallax offset={50}>
        <div className='z-10'>
          <span className='block lg:text-6xl sm:text-5xl xs:text-4xl text-3xl font-bold text-light-blue dark:text-white whitespace-pre-line'>
            <p>Hello,</p>
            <p className='sm:mt-4 mt-2'>I&apos;m Jiwon Park</p>
          </span>
          <p className='lg:text-2xl lg:leading-10 sm:text-xl text-base sm:leading-8 text-teal-900 dark:text-dusty-grey sm:mt-10 xs:mt-8 mt-6'>
            I&apos;m a{' '}
            <span className='text-light-blue dark:text-white underline underline-offset-2'>
              Software Engineer
            </span>{' '}
            at Pixieset, building the{' '}
            <span className='text-light-blue dark:text-white underline underline-offset-2'>
              Studio Manager
            </span>{' '}
            platform and its mobile app.
            <br />
            I also published{' '}
            <a
              href='https://apps.apple.com/us/app/mood-eats/id6762584116'
              target='_blank'
              rel='noreferrer'
              className='text-light-blue dark:text-white underline underline-offset-2'
            >
              mood eats
            </a>
            , a personal iOS app that suggests dishes for how you feel.
            <br />
            Before that, I shipped custom admin dashboards and more than 100
            landing pages.
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default Introduce;
