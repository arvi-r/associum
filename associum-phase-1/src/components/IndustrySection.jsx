import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Container } from './Container';
import styles from './IndustrySection.module.scss';

import industryVideo from '../assets/homepage/industry-preview.webm';
import industrySampleForeground from '../assets/homepage/industry-sample-foreground.webp?url';
import buttonIcon from '../assets/homepage/industry-button-icon.webp?url';

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

const accordionItems = [
  {
    title: 'Finance',
    subtitle: 'Faster analysis, greater conviction.',
    bullets: [
      'Screen a new investment in 4 minutes, from first document to sourced investment thesis.',
      'Build an IC memo, research report, or pitch book to IC-ready standard in under an hour.',
      'Run DCF and LBO scenario models directly from raw financials, no manual build.',
      'Analyse hundreds of deal documents to surface risk, gaps, and investment signals.',
    ],
  },
  {
    title: 'Consulting',
    subtitle: 'Client-ready. Partner-approved.',
    bullets: [
      'Draft a client-ready market sizing analysis in one task.',
      'Turn raw interview transcripts and research inputs into client-ready frameworks.',
      'Build strategy decks and market sizing reports with benchmarking data sourced and structured.',
      'Create due diligence reports from fragmented source documents, assembled, analyzed, and formatted.',
    ],
  },
  {
    title: 'Accounting',
    subtitle: 'From numbers to narrative, on cycle.',
    bullets: [
      'Generate board packs and management accounts commentary from financial data, ready for FD review.',
      'Produce variance analysis narratives from raw numbers, structured to board standard.',
      'Draft month-end and year-end reports from financial inputs, on cycle and on deadline.',
      "Produce audit workpapers and advisory reports to your firm's exact standard.",
    ],
  },
  {
    title: 'Legal & Compliance',
    subtitle: 'Improved risk and compliance management.',
    bullets: [
      'Summarize hundreds of pages of contract clauses into a structured brief, ready for counsel review.',
      'Identify diligence red flags and compliance gaps from a document set, with page-level citations.',
      'Extract and compare key terms across multiple agreements.',
      'Review compliance and ESG standards from public and private data sources.',
    ],
  },
];

const outputButtons = ['Sell-side stock research', 'Buyside IC memo'];

export function IndustrySection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const DURATION = 5000; // 5 seconds per item
  const INTERVAL = 16; // ~60fps for smooth animation

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  React.useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);

  React.useEffect(() => {
    if (isInView) {
      setHasBeenInView(true);
    }
  }, [isInView]);

  React.useEffect(() => {
    if (!isInView) return; // Pause animation when off-screen

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (INTERVAL / DURATION) * 100;
        return next > 100 ? 100 : next;
      });
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [isInView]);

  React.useEffect(() => {
    if (progress >= 100) {
      const nextIndex = (openIndex + 1) % accordionItems.length;
      setOpenIndex(nextIndex);
      setProgress(0);
    }
  }, [progress, openIndex]);

  const handleTriggerClick = (index) => {
    setOpenIndex(index);
    setProgress(0);
  };

  const renderPreviewCard = (className = '') => (
    <div className={`${styles.previewCard} ${className}`.trim()}>
      <div className={styles.previewMedia} aria-hidden="true">
        {hasBeenInView && isDesktop ? (
          <video
            className={styles.previewVideo}
            src={industryVideo}
            autoPlay
            muted
            loop
            playsInline
            controls
            controlsList="nodownload noplaybackrate nopictureinpicture"
            disablePictureInPicture
          />
        ) : hasBeenInView ? (
          <img 
            src={industrySampleForeground} 
            className={styles.previewVideo} 
            alt="Industry Preview" 
            style={{ objectFit: 'contain', borderRadius: '8px' }} 
          />
        ) : (
          <div className={styles.previewVideo} style={{ background: 'rgba(0, 0, 0, 0.04)', borderRadius: '8px' }} />
        )}
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="industry-title">
      <Container>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.h2 id="industry-title" variants={itemVariants}>
            Built for Your Industry
          </motion.h2>
          <motion.p variants={itemVariants}>Calibrated to your work. Built to your standards</motion.p>
        </motion.div>

        <motion.div
          className={styles.layout}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div className={styles.accordionColumn} variants={itemVariants}>
            {accordionItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.title} className={styles.accordionItem}>
                  <div className={styles.progressContainer}>
                    <div
                      className={styles.progressBar}
                      style={{ width: isOpen ? `${progress}%` : '0%' }}
                    />
                  </div>
                  <button
                    type="button"
                    className={`${styles.accordionTrigger} ${isOpen ? styles.accordionTriggerOpen : ''}`}
                    onClick={() => handleTriggerClick(index)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.triggerLabel}>{item.title}</span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className={styles.accordionPanelWrapper}
                      >
                        <div className={styles.accordionPanel}>
                          <p className={styles.panelSubtitle}>{item.subtitle}</p>
                          <ul className={styles.panelList}>
                            {item.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          <motion.div variants={itemVariants} className={styles.desktopPreviewWrapper}>
            {renderPreviewCard()}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
