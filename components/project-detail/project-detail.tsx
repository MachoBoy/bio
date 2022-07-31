import Slider from 'react-slick';

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ProjectDetail = (props: any) => {
  return (
    <div className='flex flex-col align-center items-center'>
      <div className='w-5/6'>
        <div className='w-full text-center my-5'>
          <h3 className='block lg:text-3xl sm:text-2xl xxs:text-lg text-purple-400'>
            {props.item.name}
          </h3>
        </div>
        <Slider {...settings}>
          {props.item.images.map((image: string, index: number) => (
            <div
              key={index}
              className={`${image} w-full lg:h-96 md:h-72 sm:h-56 xxs:h-48 bg-top bg-contain bg-no-repeat`}
            ></div>
          ))}
        </Slider>
        <div className='flex justify-center mt-2 flex-wrap'>
          {props.item.module.map((lib: string, index: number) => (
            <div
              className='w-auto py-1 px-2 sm:m-2 xxs:m-1 lg:text-sm xxs:text-xs text-white bg-gray-500 rounded-md shadow-md'
              key={index}
            >
              {lib}
            </div>
          ))}
        </div>
        <div className='lg:text-lg sm:text-base xxs:text-sm text-white text-center'>
          <p>{props.item.desc}</p>
        </div>
        <div className='flex justify-center mt-2 text-center'>
          <ul>
            {props.item.links
              ? props.item.links.map((link: string, index: number) => (
                  <a
                    className='text-white hover:text-purple-400 sm:mx-3 xxs:mx-1 sm:text-base xxs:text-sm'
                    key={index}
                    href={link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    website {index + 1}
                  </a>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
