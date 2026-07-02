import React from 'react';
import { Container } from './Container';
import styles from './PricingCreditsSection.module.scss';

const creditItems = [
  {
    title: 'Task Execution',
    rate: '3 credits for your average request',
    description:
      'A single request for research or analysis using our search, quantitative, and documentation agents.',
  },
  {
    title: 'Report Generation',
    rate: '40 credits for your average request',
    description: 'A fully structured and thoroughly researched deliverable.',
  },
  {
    title: 'File Processing',
    rate: '1 credit per 50 pages',
    description:
      'Upload and index documents, fully searchable and queryable across all tasks.',
  },
];

export function PricingCreditsSection() {
  return (
    <section className={styles.section} aria-labelledby="pricing-credits-title">
      <Container>
        <div className={styles.inner}>
          <h2 id="pricing-credits-title" data-reveal>
            What Can You Do With Credits
          </h2>

          <div className={styles.grid}>
            {creditItems.map((item, index) => (
              <article
                key={item.title}
                className={`${styles.card} ${index < creditItems.length - 1 ? styles.withDivider : ''}`}
                data-reveal
                style={{ '--reveal-delay': `${0.1 + index * 0.1}s` }}
              >
                <h3>{item.title}</h3>
                <p className={styles.rate}>{item.rate}</p>
                <p className={styles.description}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
