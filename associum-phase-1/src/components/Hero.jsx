import React from 'react';
import { ButtonLink } from './ButtonLink';
import { Container } from './Container';
import { AnimatedGradientText } from './AnimatedGradientText';
import { CustomVideoPlayer } from './CustomVideoPlayer';
import styles from './Hero.module.scss';

const heroBackground = '/Hero Section.webp';
import heroVideo from '../assets/homepage/video.webm';
const heroPreview = '/hero-preview.webp';
import heroCardMask from '../assets/homepage/hero-card-mask.svg?url';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
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

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.stage}>
        <div className={styles.backdrop} aria-hidden="true">
          <div className={styles.overlay} />
          <img className={styles.backgroundImage} src={heroBackground} alt="" />
        </div>

        <Container>
          <motion.div
            className={styles.content}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className={styles.copy}>
              <motion.div className={styles.chip} variants={itemVariants}>
                <AnimatedGradientText text="BUILT BY FORMER INVESTORS, CONSULTANTS & ENGINEERS" />
              </motion.div>

              <motion.h1 id="hero-title" className={styles.title} variants={itemVariants}>
                <span className={styles.accent}>Associum:</span>{' '}
                <span className={styles.subTitle}>The AI Associate for Professionals</span>
              </motion.h1>

              <motion.p className={styles.description} variants={itemVariants}>
                From data and research to final deliverables
              </motion.p>

              <motion.div className={styles.actions} variants={itemVariants}>
                <ButtonLink
                  href="https://app.associum.ai/signup"
                  variant="primary"
                  size="heroPrimary"
                  className={styles.heroButton}
                >
                  Start for Free
                </ButtonLink>
                <ButtonLink
                  href="/product"
                  variant="outline"
                  size="heroSecondary"
                  className={styles.heroButton}
                >
                  See How It Works
                </ButtonLink>
              </motion.div>
            </div>

            <motion.p className={styles.meta} variants={itemVariants}>
              From zero to done &nbsp;&nbsp;·&nbsp;&nbsp; One step from sign-off <span className={styles.metaCert}>&nbsp;&nbsp;·&nbsp;&nbsp; SOC 2 &amp; ISO 27001 certified</span>
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.preview}
            initial={{ opacity: 0, y: 30, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <CustomVideoPlayer 
              src={heroVideo} 
              poster={heroPreview}
              maskImage={heroCardMask}
              className={styles.heroPlayer}
            />
          </motion.div>
        </Container>
      </div>

      <div className={styles.base} aria-hidden="true" />
    </section>
  );
}
