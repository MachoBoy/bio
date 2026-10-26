import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
  logo: string;
  category: string;
  name: string;
  color: string;
}

const ProjectCard = ({ logo, category, name, color }: Props) => {
  const colorBoxMotion = {
    hover: {
      backgroundColor: color,
      y: 0,
      transition: {
        type: 'tween' as const,
        duration: 0.3,
      },
    },
    initial: {
      y: 300,
    },
  };
  return (
    <motion.div
      initial='initial'
      whileHover='hover'
      animate='initial'
      className='overflow-hidden cursor-pointer rounded-3xl relative mx-auto block aspect-square w-full sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]'
    >
      <motion.div
        variants={colorBoxMotion}
        className='rounded-3xl z-30 absolute w-full h-full overflow-hidden shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]'
      ></motion.div>
      <div className='absolute w-full h-full z-40'>
        <div className='p-4 sm:p-5 w-full z-20 absolute left-0 top-0 md:text-lg sm:text-sm text-xs md:text-left text-center text-white dark:text-gray-400'>
          {category}
        </div>
        <div className='absolute inset-0 m-auto z-20 flex items-center justify-center flex-col'>
          {logo ? (
            <div className='relative w-4/6 h-[60px]'>
              <Image
                alt={logo}
                src={logo}
                fill
                sizes='180px'
                className='object-contain'
              />
            </div>
          ) : (
            <div className='mt-3 w-full text-center xl:text-3xl lg:text-2xl md:text-xl text-sm font-semibold'>
              {name}
            </div>
          )}
        </div>
      </div>
      <div className='rounded-3xl absolute inset-0 m-auto w-full h-full bg-black/30 dark:bg-black/60 z-10'></div>
    </motion.div>
  );
};

export default ProjectCard;
