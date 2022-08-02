import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Parallax from '../parallax/Parallax';
import LinkIcon from '../link-icon/linkIcon';
import CarouselIcon from '../carousel-icon/carouselIcon';
import SectionTitle from '../section-title/section-title';
import ProjectCardItem from './projects-card-item';
import FadeInBottom from '../fade-in-bottom/fadeInBottom';
import Modal from '../modal/modal';
import Slider from 'react-slick';

const ProjectList = () => {
  const sliderRef = useRef<Slider>(null);

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  const openModal = (images: any) => {
    setModalOpen(true);
    setModalContent(images);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  return (
    <div className='relative'>
      <div className='absolute 2xl:-top-44 xl:-top-36 lg:-top-28 md:-top-20 sm:-top-16 xs:-top-12 xxs:-top-8'>
        <Parallax offset={40}>
          <SectionTitle number='04' title='Projects' />
        </Parallax>
      </div>
      <div className='w-full z-10'>
        {ProjectCardItem.map(
          (
            { thumbnail, name, desc, module, images, links, mainLink },
            index
          ) => (
            <FadeInBottom key={index} isList={true}>
              <div className='list lg:h-[350px] xs:h-[550px] xxs:h-auto mt-10 flex lg:flex-row xxs:flex-col p-6 rounded-2xl bg-light-blue dark:bg-card-bg shadow-xl last:mb-10 group'>
                <div className='left rounded-2xl bg-white lg:w-5/12 mx-auto w-full h-full relative xs:block xxs:hidden'>
                  <Image
                    src={thumbnail}
                    alt={thumbnail}
                    layout='fill'
                    objectFit='contain'
                  />
                  <div className='hidden md:hidden lg:block'>
                    {mainLink ? (
                      <a
                        className='absolute inset-0 m-auto w-full h-hull rounded-2xl opacity-0 group-hover:opacity-100 bg-[#ffd24c]/60 dark:bg-purple-400/50 text-white font-semibold flex justify-center items-center'
                        href={mainLink}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <div className='transition duration-500 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100'>
                          <LinkIcon />
                        </div>
                      </a>
                    ) : (
                      <div
                        onClick={() => openModal(images)}
                        className='cursor-pointer absolute inset-0 m-auto w-full h-hull rounded-2xl opacity-0 group-hover:opacity-100 bg-[#ffd24c]/50 dark:bg-purple-400/50 flex justify-center items-center'
                      >
                        <div className='transition duration-500 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100'>
                          <CarouselIcon />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className='right lg:w-7/12 xxs:w-full lg:pl-6 xxs:pl-0 lg:mt-0 xxs:mt-3 flex flex-col justify-start items-start'>
                  <h3 className='w-full xl:text-3xl lg:text-2xl md:text-xl xxs:text-lg text-lg text-white md:text-left xxs:text-center font-semibold'>
                    {name}
                  </h3>
                  <p className='w-full mt-5 xl:text-xl lg:text-md text-white md:text-left xxs:text-center'>
                    {desc}
                  </p>
                  <div className='w-full flex md:justify-start xxs:justify-center mt-2 flex-wrap'>
                    {module.map((lib: string, index: number) => (
                      <div
                        className='w-auto py-1 px-2 sm:m-2 m-1 text-xs xxs:m-1 lg:text-sm xxs:text-xs text-black bg-[#ffd24c]  dark:bg-gray-500 dark:text-white rounded-md shadow-md first:ml-0'
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
                            className='text-white hover:text-[#ffd24c] dark:hover:text-purple-400 sm:mx-3 xxs:mx-1 sm:text-base xxs:text-sm first:ml-0'
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
      <>
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <div className='w-full h-96'>
            <Slider {...settings} ref={sliderRef}>
              {modalContent &&
                modalContent.map((image, key) => {
                  return (
                    <div
                      key={key}
                      className={`${image} w-full lg:h-[600px] md:h-72 sm:h-56 xxs:h-48 bg-center bg-contain bg-no-repeat`}
                    ></div>
                  );
                })}
            </Slider>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default ProjectList;
