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
          <h3 className='block lg:text-3xl sm:text-2xl font-notokr text-purple-400'>
            {props.item.name}
          </h3>
        </div>
        <Slider {...settings}>
          {props.item.images.map((image: string, index: number) => (
            <div
              key={index}
              className={`${image} w-full lg:h-96 md:h-72 bg-top bg-cover bg-no-repeat`}
            ></div>
          ))}
        </Slider>
        <div className='flex justify-center mt-2 md:flex-wrap'>
          {props.item.module.map((lib: string, index: number) => (
            <div
              className='py-1 px-2 m-2 lg:text-sm sm:text-xs text-white bg-gray-500 rounded-md shadow-md'
              key={index}
            >
              {lib}
            </div>
          ))}
        </div>
        <div className='font-notokr lg:text-lg sm:text-base text-white text-center'>
          <p>{props.item.desc}</p>
        </div>
        <div className='flex justify-center mt-2'>
          <ul>
            {props.item.links
              ? props.item.links.map((link: string, index: number) => (
                  <a
                    className='text-white hover:text-purple-400 mx-3'
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
