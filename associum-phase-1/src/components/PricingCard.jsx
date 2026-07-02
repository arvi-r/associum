import React from 'react';
import styles from './PricingCard.module.scss';

export function PricingCard({ plan }) {
  return (
    <article className={`${styles.card} ${plan.featured ? styles.featured : ''}`}>
      <div className={styles.header}>
        <h3>{plan.name}</h3>
        <strong>{plan.price}</strong>
      </div>
      <p className={styles.summary}>{plan.summary}</p>
      <ul className={styles.list}>
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <a className={styles.cta} href="#start-free">
        Choose {plan.name}
      </a>
    </article>
  );
}
