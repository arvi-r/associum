import React from 'react';
import { Container } from './Container';
import styles from './AboutMetricsSection.module.scss';
import metricsTexture from '../assets/about/about-metrics-texture.webp?url';

const metrics = [
  {
    title: '8h → 10m',
    description: 'Hours of production become minutes of review.',
  },
  {
    title: 'Ready on day one',
    description: 'Open it. Use it. Review what comes back.',
  },
  {
    title: 'Accuracy-first',
    description: 'Every output sourced, cited, and defensible.',
  },
];

export function AboutMetricsSection() {
  return (
    <section className={styles.section} aria-label="About metrics">
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.textureWrap}>
          <img src={metricsTexture} alt="" />
        </div>
        <div className={styles.gradient} />
      </div>

      <Container>
        <div className={styles.tiles}>
          {metrics.map((metric, i) => (
            <article
              key={metric.title}
              className={styles.tile}
              data-reveal
              style={{ '--reveal-delay': `${0.2 + i * 0.15}s` }}
            >
              <h2>{metric.title}</h2>
              <p>{metric.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
