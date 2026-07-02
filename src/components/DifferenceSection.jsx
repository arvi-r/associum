import React from 'react';
import { Container } from './Container';
import styles from './DifferenceSection.module.scss';
import metricsBackground from '../assets/homepage/difference-metrics-background.webp?url';

const metricCards = [
  {
    id: 'hours-production',
    title: <>8 hours →<br />10 minutes</>,
    description: 'Hours of production become minutes of review.',
  },
  {
    id: 'accuracy',
    title: 'Accuracy first',
    description: 'Every output sourced, cited, and defensible.',
  },
  {
    id: 'ready',
    title: 'Ready on day one',
    description: 'Open it. Use it. No complicated set-up required.',
  },
  {
    id: 'scalable',
    title: <>Scalable<br />data</>,
    description: 'Upload and access all of your docs.',
  },
];

export function DifferenceSection() {
  return (
    <section className={styles.section} aria-labelledby="difference-title">
      <div className={styles.background} aria-hidden="true">
        <img src={metricsBackground} alt="" className={styles.bgImage} />
        <div className={styles.gradientLayer} />
      </div>

      <Container>
        <div className={styles.content}>
          <div className={styles.header} data-reveal>
            <p className={styles.eyebrow}>The Associum Difference</p>
            <h2 id="difference-title">
              <span>Associate creates the deliverable.</span>
              <span>You make it your own.</span>
            </h2>
          </div>

          <div className={styles.metricsGrid}>
            {metricCards.map((card, i) => (
              <article
                key={card.id}
                className={styles.metricCard}
                data-reveal
                style={{ '--reveal-delay': `${0.1 + i * 0.1}s` }}
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
