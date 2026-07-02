import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../PageTransition';
import { ButtonLink } from '../ButtonLink';
import styles from './NotFoundPage.module.scss';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function NotFoundPage() {
  return (
    <PageTransition>
      <main className={styles.notFound}>
        <div className={styles.backdrop} aria-hidden="true">
          <div className={styles.glow} />
        </div>

        <motion.div
          className={styles.content}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className={styles.errorCode} variants={itemVariants}>
            404
          </motion.h1>
          
          <motion.h2 className={styles.title} variants={itemVariants}>
            Page Not Found
          </motion.h2>
          
          <motion.p className={styles.description} variants={itemVariants}>
            The page you're looking for seems to have been moved or doesn't exist.
            Let's get you back to the right place.
          </motion.p>
          
          <motion.div className={styles.actions} variants={itemVariants}>
            <ButtonLink href="/" variant="primary" size="heroPrimary">
              Back to Home
            </ButtonLink>
          </motion.div>
        </motion.div>
      </main>
    </PageTransition>
  );
}
