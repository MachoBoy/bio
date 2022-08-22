import Image from 'next/image';
import FadeInBottom from '../fade-in-bottom/fadeInBottom';
import Parallax from '../parallax/Parallax';
import SectionTitle from '../section-title/section-title';
import SkillCardItem from './skill-card-item';

const SkillCard = () => {
  return (
    <div className='relative'>
      <Parallax offset={80}>
        <div className='absolute -top-14 2xl:-top-44 xl:-top-36 lg:-top-28 md:-top-24 sm:-top-20 xs:-top-16'>
          <SectionTitle number='02' title='Skills' />
        </div>
      </Parallax>
      <FadeInBottom isList={false}>
        <Parallax offset={50}>
          <div className='z-10 skill-card-container flex justify-center flex-row flex-wrap h-fit'>
            {SkillCardItem.map((item, index) => (
              <div
                className='flex-col w-20 h-20 xl:w-48 lg:w-40 md:w-32 md:h-36 sm:w-28 sm:h-v28 xs:w-24 xs:h-24 rounded-xl bg-light-blue-2 dark:bg-card-bg hover:bg-light-blue dark:hover:bg-purple-400 m-2 p-3 flex justify-center items-center shadow-xl hover:shadow-lg transition-all'
                key={index}
              >
                <div className='text-center w-full'>
                  <div className='relative sm:w-16 sm:h-16 xs:w-12 xs:h-12 w-12 h-12 m-auto'>
                    {item.icon ? (
                      <Image
                        src={item.icon}
                        alt={item.name}
                        layout='responsive'
                        width='64'
                        height='64'
                      />
                    ) : null}
                  </div>
                  <span className='tracking-wide leading-3 text-white font-light my-auto md:mt-3 mt-1 block md:text-lg xs:text-[11px] text-[10px]'>
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Parallax>
      </FadeInBottom>
    </div>
  );
};

export default SkillCard;
