import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from '../modal/modal';
import Parallax from '../parallax/Parallax';
import SectionTitle from '../section-title/section-title';
import ProjectCard from '../project-card/project-card';
import { ProjectCardItem } from './projects-card-item';
import SlideFromBottom2 from '../slide-from-bottom-2/SlideFromBottom2';
import ProjectDetail from '../project-detail/project-detail';

const ProjectList = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const openProjectCard = (id: number) => {
    setActiveId(id);
    document.body.style.overflow = 'hidden';
  };
  const closeProjectCard = () => {
    setActiveId(null);
    document.body.style.overflow = 'unset';
  };

  const prevProject = (id: number) => {
    const itemLength = ProjectCardItem.length;
    let prev = id + 1;
    if (prev > itemLength) {
      return setActiveId(1);
    }
    return setActiveId(prev);
  };
  const nextProject = (id: number) => {
    const itemLength = ProjectCardItem.length;
    let next = id - 1;
    if (next === 0) {
      return setActiveId(itemLength);
    }
    return setActiveId(next);
  };
  return (
    <div className='relative'>
      <div className='absolute 2xl:-top-56 xl:-top-48 lg:-top-40 md:-top-32 xs:-top-24 -top-20'>
        <Parallax offset={40}>
          <SectionTitle number='04' title='Projects' />
        </Parallax>
      </div>
      <div className='w-full z-10 grid gap-4 2xl:grid-cols-4 sm:grid-cols-3 grid-cols-2'>
        {ProjectCardItem.map(({ id, logo, category, name, color }, index) => (
          <SlideFromBottom2 key={index} order={index}>
            <div onClick={() => openProjectCard(id)}>
              <ProjectCard
                id={id}
                logo={logo}
                category={category}
                name={name}
                color={color}
              />
            </div>
          </SlideFromBottom2>
        ))}
      </div>
      <AnimatePresence>
        {activeId && (
          <Modal closeModal={closeProjectCard}>
            <ProjectDetail
              activeId={activeId}
              closeProjectCard={closeProjectCard}
              prevProject={prevProject}
              nextProject={nextProject}
            />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectList;
