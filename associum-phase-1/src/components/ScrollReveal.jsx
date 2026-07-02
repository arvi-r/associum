import React from 'react';
import { motion } from 'framer-motion';

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const revealTransition = {
  duration: 0.8,
  ease: 'easeOut',
};

export function ScrollReveal({ children, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={revealVariants}
      transition={revealTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
