import Image from 'next/image';
import Parallax from '../parallax/Parallax';
import SectionTitle from '../section-title/section-title';
import ProjectCardItem from '../experience-card/experience-card-item';
import FadeInBottom from '../fade-in-bottom/fadeInBottom';

const ProjectList = () => {
  return (
    <div className='relative'>
      <div className='absolute 2xl:-top-44 xl:-top-36 lg:-top-28 md:-top-20 sm:-top-16 xs:-top-12 xxs:-top-8'>
        <Parallax offset={40}>
          <SectionTitle number='04' title='Projects' />
        </Parallax>
      </div>
      <div className='w-full z-10'>
        {ProjectCardItem.map(
          ({ thumbnail, name, desc, module, images, links }, index) => (
            <FadeInBottom key={index} isList={true}>
              <div className='list lg:h-[350px] xs:h-[650px] xxs:h-auto mt-10 flex lg:flex-row xxs:flex-col p-6 rounded-2xl bg-light-blue dark:bg-card-bg shadow-xl last:mb-10'>
                <div className='left lg:w-5/12 w-full h-full relative xs:block xxs:hidden'>
                  <Image
                    className='rounded-2xl'
                    src={thumbnail}
                    alt={thumbnail}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div className='right lg:w-7/12 xxs:w-full lg:pl-6 xxs:pl-0 lg:mt-0 xxs:mt-3 flex flex-col justify-start items-start'>
                  <h3 className='w-full xl:text-3xl lg:text-2xl md:text-xl xxs:text-lg text-white md:text-left xxs:text-center'>
                    {name}
                  </h3>
                  <p className='w-full mt-5 xl:text-xl lg:text-md text-white md:text-left xxs:text-center'>
                    {desc}
                  </p>
                  <div className='w-full flex md:justify-start xxs:justify-center mt-2 flex-wrap'>
                    {module.map((lib: string, index: number) => (
                      <div
                        className='w-auto py-1 px-2 sm:m-2 xxs:m-1 lg:text-sm xxs:text-xs text-black bg-[#ffd24c]  dark:bg-gray-500 rounded-md shadow-md first:ml-0'
                        key={index}
                      >
                        {lib}
                      </div>
                    ))}
                  </div>
                  <div className='w-full flex md:justify-start md:items-start xxs:justify-center mt-2 text-center'>
                    {links
                      ? links.map((link: string, index: number) => (
                          <a
                            className='text-white hover:text-light-blue dark:hover:text-purple-400 sm:mx-3 xxs:mx-1 sm:text-base xxs:text-sm first:ml-0'
                            key={index}
                            href={link}
                            target='_blank'
                            rel='noreferrer'
                          >
                            Link {index + 1}
                          </a>
                        ))
                      : null}
                  </div>
                </div>
              </div>
            </FadeInBottom>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectList;
