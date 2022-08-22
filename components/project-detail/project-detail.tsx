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
        <div className='relative rounded-t-xl w-full h-12 bg-[#ebe4ee] dark:bg-card-bg flex justify-start items-center px-3'>
          <div className='flex flex-row'>
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
          <div className='absolute w-[350px] h-6 inset-0 m-auto text-center'>
            {name} &#9135; {category}
          </div>
        </div>
        <div className='w-full h-full flex flex-row'>
          <div className='relative w-1/2 h-full flex justify-center items-center overflow-hidden bg-black'>
            <Slider images={images} />
          </div>
          <div className='w-1/2 p-10 text-black dark:text-white'>
            <h2 className='text-xl uppercase tracking-wide'>- Description</h2>
            <p className='mt-2 text-lg pl-4'>{desc}</p>
            <h2 className='mt-5 text-xl uppercase tracking-wide'>
              - Key Features
            </h2>
            <ul className='mt-2 list-disc list-inside'>
              {features?.map((feature, index) => {
                return (
                  <li className='pl-4 text-lg' key={index}>
                    {feature}
                  </li>
                );
              })}
            </ul>
            <h2 className='mt-5 text-xl uppercase tracking-wide'>
              - Tech Stacks
            </h2>
            <div className='mt-5 grid grid-cols-5 justify-items-center'>
              {module.map(({ icon, name }, index) => {
                return <ModuleIcon key={index} icon={icon} name={name} />;
              })}
            </div>
          </div>
        </div>
        {mainLink && (
          <Link href={mainLink}>
            <a
              target='_blank'
              className='rounded-b-xl w-full h-16 text-2xl font-semibold bg-blue-400/80 hover:bg-gray-300 text-white hover:text-blue-400 dark:bg-purple-400/80 dark:hover:bg-card-bg dark:text-white dark:hover:text-purple-400 flex justify-center items-center transition-all'
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
