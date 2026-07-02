import React from 'react';
import { Container } from './Container';
import { ButtonLink } from './ButtonLink';
import styles from './PricingCompareBanner.module.scss';
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

export function PricingCompareBanner() {
  return (
    <section className={styles.section} aria-labelledby="pricing-compare-banner-title">
      <Container>
        <div className={styles.bannersWrapper}>
          <motion.div
            className={styles.banner}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.h2 id="pricing-compare-banner-title" variants={itemVariants}>
              Your first 100 credits are free. No card needed.
            </motion.h2>
            <motion.div variants={itemVariants}>
              <ButtonLink href="#compare-plans" variant="outline" size="heroSecondary" className={styles.button}>
                Compare Plans
              </ButtonLink>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.enterpriseBar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              Need a team or enterprise plan? Contact us for a custom quote.
            </motion.p>
            <motion.div variants={itemVariants}>
              <ButtonLink href="/contact" variant="brandLine" size="pricingSecondary">
                Contact Sales
              </ButtonLink>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
