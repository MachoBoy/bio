import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Parallax from '../parallax/Parallax';
import SectionTitle from '../section-title/section-title';
import ProjectCard from '../project-card/project-card';
import { ProjectCardItem } from './projects-card-item';
import SlideFromBottom2 from '../slide-from-bottom-2/SlideFromBottom2';
import ProjectDetail from '../project-detail/project-detail';

const ProjectList = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const openProjectCard = (id: string) => {
    setActiveId(id);
  };
  const closeProjectCard = () => {
    setActiveId(null);
  };
  return (
    <div className='relative'>
      <div className='absolute 2xl:-top-56 xl:-top-36 lg:-top-28 md:-top-20 sm:-top-16 xs:-top-12 xxs:-top-8'>
        <Parallax offset={40}>
          <SectionTitle number='04' title='Projects' />
        </Parallax>
      </div>
      <div className='w-full z-10 grid grid-cols-4 gap-4'>
        {ProjectCardItem.map(
          ({ id, logo, category, thumbnail, name, color }, index) => (
            <SlideFromBottom2 key={index} order={index}>
              <div onClick={() => openProjectCard(id)}>
                <ProjectCard
                  id={id}
                  logo={logo}
                  category={category}
                  thumbnail={thumbnail}
                  name={name}
                  color={color}
                />
              </div>
            </SlideFromBottom2>
          )
        )}
      </div>
      <AnimatePresence>
        {activeId && (
          <ProjectDetail
            activeId={activeId}
            closeProjectCard={closeProjectCard}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectList;
