import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ProjectCardItem } from '../project-list/projects-card-item';

interface Props {
  id: number;
  logo: string;
  category: string;
  thumbnail: string;
  name: string;
  color: string;
}

const ProjectCard = ({ id, logo, category, thumbnail, name, color }: Props) => {
  const colorBoxMotion = {
    hover: {
      backgroundColor: color,
      boxShadow: 'inset 0px 0px 10px rgba(0,0,0,0.6)',
      y: 0,
      transition: {
        type: 'tween',
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
      className='overflow-hidden cursor-pointer rounded-3xl block my-auto w-[300px] h-[300px] relative xs:block xxs:hidden'
    >
      <motion.div
        variants={colorBoxMotion}
        className='rounded-3xl z-30 absolute w-full h-full overflow-hidden'
      ></motion.div>
      <div className='absolute w-full h-full z-40'>
        <div className='p-5 w-full z-20 absolute left-0 top-0 text-lg text-left text-white dark:text-gray-400'>
          {category}
        </div>
        <div className='absolute inset-0 m-auto z-20 flex items-center justify-center flex-col'>
          <div className='relative w-4/6 h-[60px]'>
            {logo ? (
              <Image alt={logo} src={logo} layout='fill' objectFit='contain' />
            ) : (
              <div className='mt-3 w-full text-center text-3xl font-semibold'>
                {name}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='rounded-3xl absolute inset-0 m-auto w-full h-full bg-black/30 dark:bg-black/60 z-10'></div>
    </motion.div>
  );
};

export default ProjectCard;
