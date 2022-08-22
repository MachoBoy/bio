import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from 'react-modal';
import { ProjectCardItem } from '../../../components/project-list/projects-card-item';

Modal.setAppElement('#__next');

const DetailPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/');
  });

  return (
    <>
      <AnimatePresence>
        <motion.div>
          <Modal isOpen={true}>dddd</Modal>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default DetailPage;

export function getStaticProps({ params: { projectId } }: any) {
  console.log(projectId);
  return { props: { projectId } };
}

export function getStaticPaths() {
  return {
    paths: ProjectCardItem.map((project) => ({
      params: { projectId: project.id },
    })),
    fallback: false,
  };
}
