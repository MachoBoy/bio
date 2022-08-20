import { ReactNode, useState, useRef, useEffect } from 'react';
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

const Parallax = ({ children, offset }: ParallaxProps): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref: any = useRef(null);

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  // console.log('when y is', initial, final, offset, -offset);

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);

  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          setClientHeight(window.innerHeight)
      );
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [ref]);

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
