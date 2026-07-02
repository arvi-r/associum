import React, { useEffect, useRef, useState } from 'react';
import { Container } from './Container';
import styles from './HowItWorksSection.module.scss';
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const steps = [
  {
    step: 'STEP 01',
    title: 'Connect Your Data',
    description:
      'Link your data room, upload documents (PDFs, 10-Ks, contracts, research decks), or paste a URL. Associum ingests and indexes your inputs immediately.',
    active: true,
  },
  {
    step: 'STEP 02',
    title: 'Define the Scope',
    description:
      'Describe the analysis, research, or models you need in plain language. Associum runs the work across your entire document set and returns structured, sourced outputs.',
    active: false,
  },
  {
    step: 'STEP 03',
    title: 'Review and Sign Off',
    description:
      'Select a template or describe what you need. Associum generates your memo, board pack, compliance report, or client brief, in a near-final draft for you to edit on the app and send to clients.',
    active: false,
  },
];

const railPositions = [0, 192, 384];
const mobileRailPositions = [0, 76, 152];

export function HowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotPositions, setDotPositions] = useState([0, 200, 400]); // Smarter fallback
  const stepRefs = useRef([]);
  const stepListRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger line set to 75% down the screen (starts interaction much earlier)
      const triggerLine = window.innerHeight * 0.75;
      let closestIndex = 0;
      let minDistance = Infinity;

      stepRefs.current.forEach((node, index) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        
        // Calculate how close the top of the step is to our trigger line
        const distance = Math.abs(triggerLine - rect.top);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Defer the initial check to the next animation frame to completely avoid mount-time forced reflow
    requestAnimationFrame(() => {
      handleScroll();
    });

    const updateLayout = () => {
      // Recalculate dot positions based on text block heights
      if (stepListRef.current) {
        const positions = stepRefs.current.map((node) => {
          if (!node) return 0;
          return node.offsetTop + 8; // adds 8px padding from the top of the section
        });
        setDotPositions(positions);
      }
    };

    window.addEventListener('resize', updateLayout);
    // Slight delay to ensure fonts/layout are rendered
    setTimeout(updateLayout, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateLayout);
    };
  }, []);

  const activeRailHeight = dotPositions[activeIndex] !== undefined ? dotPositions[activeIndex] + 48 : 0; // 40px dot + 8px bottom pad
      
  const maskStyle = activeIndex === 2
    ? 'none'
    : 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)';

  return (
    <section className={styles.section} aria-labelledby="how-it-works-title">
      <div className={styles.cardContainer}>
        <motion.div
          className={styles.layout}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div className={styles.copy} variants={itemVariants}>
            <div className={styles.copyHeading}>
              <p className={styles.eyebrow}>HOW IT WORKS</p>
              <h2 id="how-it-works-title">From Scope to Send</h2>
            </div>

            <p className={styles.description}>
              No switching between applications. No rebuilding deliverables from text. Associum makes the final draft,
              you provide your insights.
            </p>
          </motion.div>

          <div className={styles.steps}>
            <div 
              className={styles.rail} 
              aria-hidden="true"
              style={{ height: dotPositions[2] !== undefined ? `${dotPositions[2] + 50}px` : '100%' }}
            >
              <div
                className={`${styles.railActiveTrack}`}
                style={{ 
                  height: `${activeRailHeight}px`,
                  WebkitMaskImage: maskStyle,
                  maskImage: maskStyle 
                }}
              />
              {steps.map((step, index) => (
                <div
                  key={step.step}
                  className={`${styles.railDot} ${index <= activeIndex ? styles.railDotActive : styles.railDotMuted}`}
                  style={{ top: `${dotPositions[index]}px` }}
                >
                  <span>{step.step === 'STEP 01' ? '1' : step.step === 'STEP 02' ? '2' : '3'}</span>
                </div>
              ))}
            </div>

            <div className={styles.stepList} ref={stepListRef}>
              {steps.map((step, index) => (
                <article
                  key={step.step}
                  data-step-index={index}
                  ref={(node) => {
                    stepRefs.current[index] = node;
                  }}
                  className={`${styles.stepItem} ${index <= activeIndex ? styles.active : ''}`}
                >
                  <p className={styles.stepLabel}>{step.step}</p>
                  <h3>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
