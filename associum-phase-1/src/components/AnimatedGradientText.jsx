import React from 'react';
import styles from './AnimatedGradientText.module.scss';

export function AnimatedGradientText({ text, className = '' }) {
  return (
    <span className={`${styles.wrapper} ${className}`} data-text={text}>
      {text}
    </span>
  );
}
