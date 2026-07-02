import React from 'react';
import styles from './FeatureCard.module.scss';

export function FeatureCard({ title, description, badge }) {
  return (
    <article className={styles.card}>
      <span className={styles.badge}>{badge}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
