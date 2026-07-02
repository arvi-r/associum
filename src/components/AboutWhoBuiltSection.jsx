import React from 'react';
import { Container } from './Container';
import styles from './AboutWhoBuiltSection.module.scss';
import logoPanelBackground from '../assets/about/about-who-built-panel.webp?url';
import associumIcon from '../assets/about/about-associum-icon.webp?url';

export function AboutWhoBuiltSection() {
  return (
    <section className={styles.section} aria-labelledby="about-who-built-title">
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <div className={styles.headingGroup} data-reveal style={{ '--reveal-delay': '0.2s' }}>
              <p className={styles.eyebrow}>WHO BUILT THIS</p>
              <h2 id="about-who-built-title">Built by Practitioners, Not Observers.</h2>
            </div>

            <div className={styles.body} data-reveal style={{ '--reveal-delay': '0.35s' }}>
              <p>
                We were the associates and consultants. We did all the manual data gathering,
                analysis, and crafting of final deliverables. The late nights, complicated
                questions, and last minute changes. And we did it across the spectrum - as analysts
                and managing directors. We built Associum to be better than we could do, while still
                allowing for our clients' final judgment to be reflected in institutional-quality
                outputs.
              </p>
            </div>

            <p className={styles.closing} data-reveal style={{ '--reveal-delay': '0.5s' }}>
              Associum is what we wished we'd had.
            </p>
          </div>

          <div
            className={styles.brandPanel}
            aria-hidden="true"
            data-reveal="zoom"
            style={{ '--reveal-delay': '0.3s' }}
          >
            <div className={styles.brandPanelBackground}>
              <img src={logoPanelBackground} alt="" />
              <div className={styles.brandPanelOverlay} />
            </div>

            <div className={styles.brandLockup}>
              <img className={styles.brandIcon} src={associumIcon} alt="" />
              <span>Associum</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
