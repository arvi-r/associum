import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Container } from './Container';
import styles from './MeetAssociateSection.module.scss';
import previewVideo from '../assets/homepage/video.webm';

const tabData = [
  {
    id: 'research',
    title: 'Research',
    capabilities: 'Deep research and analysis in minutes.',
    description: 'Dive into deep research and analysis with data from your proprietary files, the web, and 3rd party data sources with extensive citations. Organize your research by project and use in later spreadsheet or report generation.'
  },
  {
    id: 'spreadsheets',
    title: 'Spreadsheets',
    capabilities: 'Automated modeling and data structuring.',
    description: 'Turn unstructured documents into fully structured financial models and spreadsheets in seconds, fully traced back to original sources.'
  },
  {
    id: 'reports',
    title: 'Reports',
    capabilities: 'Draft reports and memos instantly.',
    description: 'Automatically synthesize your research and spreadsheet data into comprehensive, sign-off ready reports, investment committee memos, and briefs.'
  }
];

export function MeetAssociateSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const DURATION = 5000;
  const INTERVAL = 16;
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (INTERVAL / DURATION) * 100;
        return next > 100 ? 100 : next;
      });
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [isInView]);

  useEffect(() => {
    if (progress >= 100) {
      const nextIndex = (activeIndex + 1) % tabData.length;
      setActiveIndex(nextIndex);
      setProgress(0);
    }
  }, [progress, activeIndex]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <section ref={sectionRef} className={styles.section}>
      <Container>
        <div className={styles.header} data-reveal="true" style={{ '--reveal-delay': '0.1s' }}>
          <h2>Meet Your New AI Associate.</h2>
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
                      style={{ width: isActive ? `${progress}%` : '0%' }}
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
                          <span className={styles.capabilities}>CAPABILITIES</span>
                          <h4>{tab.capabilities}</h4>
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
            <video 
              src={previewVideo} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className={styles.dashboardImage}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
