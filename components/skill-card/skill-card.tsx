import Image from 'next/image';
import Parallax from '../parallax/Parallax';
import SectionTitle from '../section-title/section-title';
import SkillCardItem from './skill-card-item';

const SkillCard = () => {
  return (
    <div className='relative'>
      <Parallax offset={80}>
        <div className='absolute 2xl:-top-44 xl:-top-36 lg:-top-28 md:-top-24 sm:-top-20 xs:-top-16 xxs:-top-14'>
          <SectionTitle number='02' title='Skills' />
        </div>
      </Parallax>
      <Parallax offset={50}>
        <div className='z-10 skill-card-container flex justify-center flex-row flex-wrap h-fit'>
          {SkillCardItem.map((item, index) => (
            <div
              className='flex-col xl:w-48 lg:w-44 md:w-32 md:h-36 sm:w-28 sm:h-28 xs:w-24 xs:h-24 xxs:w-20 xxs:h-20 rounded-xl bg-light-blue-2 dark:bg-card-bg hover:bg-light-blue dark:hover:bg-purple-400 m-2 p-3 flex justify-center items-center shadow-xl hover:shadow-lg transition-all'
              key={index}
            >
              <div className='text-center w-full'>
                <div className='relative sm:w-16 sm:h-16 xs:w-12 xs:h-12 xxs:w-12 xxs:h-12 m-auto'>
                  {item.icon ? (
                    <Image
                      src={item.icon}
                      alt={item.name}
                      layout='fill'
                      objectFit='contain'
                    />
                  ) : null}
                </div>
                <span className='notokr tracking-wide leading-3 text-white font-light my-auto md:mt-3 xxs:mt-1 block md:text-lg xs:text-[11px] xxs:text-[10px]'>
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Parallax>
    </div>
  );
};

export default SkillCard;
