import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
interface Props {
  children: JSX.Element;
  isList: boolean;
}

function FadeInBottom({ children, isList }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isList ? ['start end', '0.4 0.8'] : ['start end', '0.2 0.3'],
  });

  return (
    <div ref={ref} className='w-full'>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        transition={{ type: 'spring' }}
        style={{ opacity: scrollYProgress, scale: scrollYProgress }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default FadeInBottom;
