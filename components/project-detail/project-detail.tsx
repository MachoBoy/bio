import Image from 'next/image';
import { motion } from 'framer-motion';
import { ProjectCardItem } from '../project-list/projects-card-item';
interface Props {
  activeId: string;
  closeProjectCard: Function;
}

const ProjectDetail = ({ activeId, closeProjectCard }: Props) => {
  const project = ProjectCardItem.find(({ id }) => activeId === id);
  if (!project) {
    return null;
  }
  const { thumbnail, name } = project;
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='rounded-2xl absolute top-0 left-0 w-full h-full z-50 bg-white'
      >
        <div className='rounded-t-xl w-full h-12 bg-gray-300 dark:bg-card-bg flex justify-start items-center px-3'>
          <div className='flex flex-row'>
            <div
              className='cursor-pointer w-6 h-6 rounded-full bg-[#FF605C] text-center text-black shadow-[inset_0_0px_5px_rgba(0,0,0,0.6)]'
              onClick={() => closeProjectCard()}
            >
              &#10005;
            </div>
            <div className='w-6 h-6 rounded-full bg-[#FFBD44] mx-3 text-center text-black shadow-[inset_0_0px_5px_rgba(0,0,0,0.6)]'>
              &#8592;
            </div>
            <div className='w-6 h-6 rounded-full bg-[#00CA4E] text-center text-black shadow-[inset_0_0px_5px_rgba(0,0,0,0.6)]'>
              &#8594;
            </div>
          </div>
        </div>
        <div className='relative w-full h-1/2'>
          <Image
            src={thumbnail}
            alt={thumbnail}
            layout='fill'
            objectFit='cover'
            objectPosition='top center'
          />
        </div>
        <h1 className='text-black'>{name}</h1>
      </motion.div>
    </>
  );
};

export default ProjectDetail;
