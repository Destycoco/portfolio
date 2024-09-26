'use client';
import { easeIn, motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Reveal = ({ children, width = 'fit', mdWidth = 'fit' }) => {
  const boxVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const slideVariant = {
    hidden: { left: 0, opacity: 1 },
    visible: { left: '100%', opacity: 1 },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView]);
  return (
    <div className={`w-${width} md:w-${mdWidth} relative`} ref={ref}>
      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={slideVariant}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: easeIn }}
        className="absolute top-3 left-0 right-0 bottom-3 bg-brandPurple"
      ></motion.div>
    </div>
  );
};

export default Reveal;
