import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from '../modal/modal';
import SectionTitle from '../section-title/section-title';
import ProjectCard from '../project-card/project-card';
import { ProjectCardItem } from './projects-card-item';
import SlideFromBottom2 from '../slide-from-bottom-2/SlideFromBottom2';
import ProjectDetail from '../project-detail/project-detail';

const ProjectList = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    if (activeId === null) return;
    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = 'hidden';
    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [activeId]);

  const openProjectCard = (id: number) => {
    setActiveId(id);
  };
  const closeProjectCard = () => {
    setActiveId(null);
  };

  const prevProject = (id: number) => {
    const itemLength = ProjectCardItem.length;
    const prev = id + 1;
    if (prev > itemLength) {
      return setActiveId(1);
    }
    return setActiveId(prev);
  };
  const nextProject = (id: number) => {
    const itemLength = ProjectCardItem.length;
    const next = id - 1;
    if (next === 0) {
      return setActiveId(itemLength);
    }
    return setActiveId(next);
  };
  return (
    <div className='relative w-full'>
      <SectionTitle number='04' title='Projects' />
      <div className='w-full z-10 grid gap-2 sm:gap-4 2xl:grid-cols-4 sm:grid-cols-3 grid-cols-2'>
        {ProjectCardItem.map(({ id, logo, category, name, color }, index) => (
          <SlideFromBottom2 key={index} order={index}>
            <div onClick={() => openProjectCard(id)}>
              <ProjectCard
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
