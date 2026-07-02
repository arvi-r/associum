import React from 'react';
import styles from './SectionHeading.module.scss';

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className={styles.heading}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}
