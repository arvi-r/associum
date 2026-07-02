import React from 'react';
import { Container } from './Container';
import { ButtonLink } from './ButtonLink';
import styles from './PricingIntroSection.module.scss';
import { motion } from 'framer-motion';

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

export function PricingIntroSection() {
  return (
    <section className={styles.section} aria-labelledby="pricing-intro-title">
      <Container>
        <motion.div
          className={styles.inner}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.p className={styles.eyebrow} variants={itemVariants}>
            Simple, Credit-Based Pricing
          </motion.p>
          <motion.h2 id="pricing-intro-title" variants={itemVariants}>
            Priced for output. Not for access.
          </motion.h2>
          <motion.p className={styles.subheading} variants={itemVariants}>
            Credit-Based · Free to Start
          </motion.p>
          <motion.p className={styles.description} variants={itemVariants}>
            Plans from $0 to $499/month. Credits flex across any deliverable: memos, reports,
            research, models, in any combination. Share one seat or buy multiple for your team.
          </motion.p>
          <motion.div variants={itemVariants}>
            <ButtonLink href="/pricing" variant="primary" size="heroPrimary" className={styles.button}>
              See Pricing
              <span aria-hidden="true">{'->'}</span>
            </ButtonLink>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
