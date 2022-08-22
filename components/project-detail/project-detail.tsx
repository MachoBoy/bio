import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Slider } from '../slider/slider';
import ModuleIcon from '../module-icon/module-icon';
import { ProjectCardItem } from '../project-list/projects-card-item';
interface Props {
  activeId: number;
  closeProjectCard: Function;
  prevProject: Function;
  nextProject: Function;
}

const ProjectDetail = ({
  activeId,
  closeProjectCard,
  prevProject,
  nextProject,
}: Props) => {
  const project = ProjectCardItem.find(({ id }) => activeId === id);
  if (!project) return null;

  const { name, category, mainLink, images, desc, module, features } = project;
  return (
    <>
      <div className='rounded-2xl absolute top-0 left-0 w-full h-full z-50 bg-light-white dark:bg-[#24292e] flex flex-col'>
        <div className='relative rounded-t-xl w-full sm:h-12 h-10 bg-[#ebe4ee] dark:bg-card-bg flex justify-start items-center px-3'>
          <div className='flex flex-row z-10'>
            <div
              className='cursor-pointer pt-[1px] w-6 h-6 rounded-full bg-[#FF605C] text-center text-black shadow-[inset_0_0px_5px_rgba(0,0,0,0.6)]'
              onClick={() => closeProjectCard()}
            >
              &#10005;
            </div>
            <div
              className='cursor-pointer w-6 h-6 rounded-full bg-[#FFBD44] mx-3 text-center text-black shadow-[inset_0_0px_5px_rgba(0,0,0,0.6)]'
              onClick={() => prevProject(activeId)}
            >
              &#8592;
            </div>
            <div
              className='cursor-pointer w-6 h-6 rounded-full bg-[#00CA4E] text-center text-black shadow-[inset_0_0px_5px_rgba(0,0,0,0.6)]'
              onClick={() => nextProject(activeId)}
            >
              &#8594;
            </div>
          </div>
          <div className='absolute w-auto h-6 inset-0 m-auto text-center hidden sm:block'>
            {name} &#9135; {category}
          </div>
        </div>
        <div className='w-full h-full flex lg:flex-row flex-col'>
          <div className='relative w-full lg:w-1/2 lg:h-full h-1/2 flex justify-center items-center overflow-hidden bg-black'>
            <Slider images={images} />
          </div>
          <div className='flex lg:flex-col md:flex-row flex-col lg:w-1/2 w-full p-3 2xl:p-10 xl:p-5 text-black dark:text-white'>
            <div className='w-auto text-center font-semibold sm:hidden block'>
              {name} &#9135; {category}
            </div>
            <div className='lg:w-full md:w-1/3 w-full lg:mt-0 md:mt-5 mt-3 lg:text-left text-center'>
              <h2 className='text-base md:text-lg uppercase tracking-wide'>
                - Description
              </h2>
              <p className='mt-2 xl:text-lg text-sm lg:pl-4 md:pl-0'>{desc}</p>
            </div>
            <div className='lg:w-full w-1/3 md:mt-5 lg:text-left text-center md:block hidden'>
              <h2 className='text-base md:text-lg uppercase tracking-wide'>
                - Key Features
              </h2>
              <ul className='mt-2 list-disc list-inside text-left lg:h-auto lg:overflow-hidden md:h-60 md:overflow-y-auto'>
                {features?.map((feature, index) => {
                  return (
                    <li className='pl-4 2xl:text-lg xl:text-base' key={index}>
                      {feature}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='lg:w-full md:w-1/3 w-full mt-5 lg:text-left text-center'>
              <h2 className='text-base md:text-lg uppercase tracking-wide'>
                - Tech Stacks
              </h2>
              <div className='md:mt-5 sm:mt-0 gap-1 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-4 justify-items-center'>
                {module.map(({ icon, name }, index) => {
                  return <ModuleIcon key={index} icon={icon} name={name} />;
                })}
              </div>
            </div>
          </div>
        </div>
        {mainLink && (
          <Link href={mainLink}>
            <a
              target='_blank'
              className='rounded-b-xl w-full md:h-16 md:text-2xl text-lg h-12 font-semibold bg-blue-400/80 hover:bg-gray-300 text-white hover:text-blue-400 dark:bg-purple-400/80 dark:hover:bg-card-bg dark:text-white dark:hover:text-purple-400 flex justify-center items-center transition-all'
            >
              {mainLink}
            </a>
          </Link>
        )}
      </div>
    </>
  );
};

export default ProjectDetail;
