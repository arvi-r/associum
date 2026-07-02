import React from 'react';
import { AboutFeatureRequestSection } from '../AboutFeatureRequestSection';
import { Container } from '../Container';
import { AboutMetricsSection } from '../AboutMetricsSection';
import { AboutPrinciplesSection } from '../AboutPrinciplesSection';
import { AboutTeamSection } from '../AboutTeamSection';
import { AboutWhoBuiltSection } from '../AboutWhoBuiltSection';
import styles from './AboutPage.module.scss';
import heroTexture from '../../assets/about/about-hero-texture.webp?url';
import heroGlow from '../../assets/about/about-hero-glow.webp?url';

export function AboutPage() {
  return (
    <main>
      <section className={styles.hero} aria-labelledby="about-page-title">
        <div className={styles.backdrop} aria-hidden="true">
          <div className={styles.baseGradient} />
          <div className={styles.textureWrap}>
            <img src={heroTexture} alt="" />
          </div>
          <img className={styles.glow} src={heroGlow} alt="" />
        </div>

        <Container>
          <div className={styles.heroInner}>
            <h1 id="about-page-title" data-reveal style={{ '--reveal-delay': '0.2s' }}>
              We built the tool we wished we'd had.
            </h1>
            <p data-reveal style={{ '--reveal-delay': '0.35s' }}>
              Years spent in data rooms, client decks, and late-night memos taught us one thing:
              the bottleneck was never intelligence. It was the infrastructure to pull data from
              multiple sources and integrate into analysis and deliverables.
            </p>
          </div>
        </Container>
      </section>
      <AboutWhoBuiltSection />
      <AboutPrinciplesSection />
      <AboutMetricsSection />
      <AboutTeamSection />
      <AboutFeatureRequestSection />
    </main>
  );
}
