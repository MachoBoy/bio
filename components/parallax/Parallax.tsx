import { ReactNode, useState, useRef, useEffect, type ReactElement } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion';

type ParallaxProps = {
  children: ReactNode;
  offset: number;
};

const Parallax = ({ children, offset }: ParallaxProps): ReactElement => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);

  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const measure = () => {
      setElementTop(element.getBoundingClientRect().top + window.scrollY);
      setClientHeight(window.innerHeight);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default Parallax;
