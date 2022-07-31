import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
interface Props {
  children: JSX.Element;
}

function FadeInTop({ children }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end start', '1 0.8'],
  });

  return (
    <div ref={ref} className='w-full'>
      <motion.div
        initial={{ opacity: 1, scale: 0 }}
        transition={{ type: 'spring' }}
        style={{ opacity: scrollYProgress, scale: scrollYProgress }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default FadeInTop;
