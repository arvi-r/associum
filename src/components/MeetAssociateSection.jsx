import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Container } from './Container';
import styles from './MeetAssociateSection.module.scss';
import researchVideo from '../assets/homepage/research.webm';
import spreadsheetsVideo from '../assets/homepage/spreadsheets.webm';
import reportVideo from '../assets/homepage/report.webm';
import { CustomVideoPlayer } from './CustomVideoPlayer';

import previewVideo from '../assets/homepage/video.webm';

const tabData = [
  {
    id: 'research',
    title: 'Deep research and analysis in minutes.',
    description: 'Dive into deep research and analysis with data from your proprietary files, the web, and 3rd party data sources with extensive citations. Organize your research by project and use in later spreadsheet or report generation.',
    videoSrc: researchVideo
  },
  {
    id: 'spreadsheets',
    title: 'Complex, audited financial modelling on demand.',
    description: 'Generate clear, audited Excel-based spreadsheets for any type of financial or business analysis.  Edit and update the models directly to ensure analytical rigor.',
    videoSrc: spreadsheetsVideo
  },
  {
    id: 'reports',
    title: 'Sophisticated deliverables ready for your review.',
    description: 'Generate a near final deliverable in report or slide deck formats from a single prompt.  Use templates to capture your know-how, quality standards, and formatting reliably across any project.',
    videoSrc: reportVideo
  }
];

export function MeetAssociateSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const sectionRef = useRef(null);

  const handleVideoEnded = () => {
    if (!hasInteracted) return;
    const nextIndex = (activeIndex + 1) % tabData.length;
    setActiveIndex(nextIndex);
    setProgress(0);
  };

  const handleTabClick = (index) => {
    setHasInteracted(true);
    setActiveIndex(index);
    setProgress(0);
  };

  const currentVideoSrc = hasInteracted ? tabData[activeIndex].videoSrc : previewVideo;

  return (
    <section ref={sectionRef} className={styles.section}>
      <Container>
        <div className={styles.header} data-reveal="true" style={{ '--reveal-delay': '0.1s' }}>
          <h2>One AI Associate. Every deliverable.</h2>
        </div>

        <div className={styles.layout} data-reveal="true" style={{ '--reveal-delay': '0.2s' }}>
          <div className={styles.tabsContainer}>
            {tabData.map((tab, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={tab.id}
                  className={`${styles.tab} ${isActive ? styles.active : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  {/* Progress Indicator */}
                  <div className={styles.progressContainer}>
                    <div
                      className={styles.progressBar}
                      style={{ width: isActive && hasInteracted ? `${progress}%` : '0%' }}
                    />
                  </div>

                  <h3 className={styles.tabTitle}>{tab.title}</h3>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className={styles.tabContentWrapper}
                      >
                        <div className={styles.tabContent}>
                          <p>{tab.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className={styles.imageContainer}>
            <CustomVideoPlayer
              key={currentVideoSrc}
              src={currentVideoSrc}
              className={styles.dashboardImage}
              playbackRate={hasInteracted ? 0.65 : 1}
              onProgressChange={setProgress}
              onEnded={handleVideoEnded}
              loop={!hasInteracted}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
