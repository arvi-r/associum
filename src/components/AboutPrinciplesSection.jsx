import React from 'react';
import { Container } from './Container';
import styles from './AboutPrinciplesSection.module.scss';

const principleCards = [
  {
    title: 'Analytical output quality need not be limited by time or team size.',
    description: "The best work shouldn't require the biggest team.",
  },
  {
    title: 'Professionals should spend their hours on judgment, not logistics.',
    description:
      'Basic research, synthesis, and formatting are not the key value drivers of important decisions.',
  },
  {
    title: 'AI infrastructure should be purpose-built for the work it supports.',
    description:
      'Generic tools produce generic output. We build for specific, high-stakes, judgment-intensive.',
  },
  {
    title: 'Pay for what you use, not fixed seat fees.',
    description: 'You pay for what you use. Nothing more.',
  },
];

export function AboutPrinciplesSection() {
  return (
    <section className={styles.section} aria-labelledby="about-principles-title">
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <span className={styles.eyebrow} data-reveal style={{ '--reveal-delay': '0.1s' }}>
              Our Principles
            </span>
            <h2 id="about-principles-title" data-reveal style={{ '--reveal-delay': '0.2s' }}>
              How We Think About AI for Professionals
            </h2>
            <p data-reveal style={{ '--reveal-delay': '0.3s' }}>
              We believe the best analytical work shouldn't be gated by time, team size, or tools.
            </p>
          </div>

          <div className={styles.grid}>
            {principleCards.map((card, i) => (
              <article
                key={card.title}
                className={styles.card}
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
