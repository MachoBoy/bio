import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Props {
  children: JSX.Element;
  order: number;
}

const SlideFromBottom = ({ children, order }: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [150 * order, 1]);
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        style={{ opacity: scrollYProgress, y }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SlideFromBottom;
