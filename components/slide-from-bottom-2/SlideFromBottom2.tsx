import { motion } from 'framer-motion';

interface Props {
  children: JSX.Element;
  order: number;
}

const SlideFromBottom2 = ({ children, order }: Props) => {
  const variants = {
    out: {
      opacity: 0,
      y: 200,
    },
    in: {
      opacity: 1,
      y: 0,
      transition: { type: 'linear', delay: 0.2 * order },
    },
  };
  return (
    <motion.div
      initial='out'
      whileInView='in'
      variants={variants}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default SlideFromBottom2;
