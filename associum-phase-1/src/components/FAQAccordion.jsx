import React, { useState } from 'react';
import styles from './FAQAccordion.module.scss';

export function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <button
            key={item.question}
            type="button"
            className={styles.item}
            onClick={() => setOpenIndex(isOpen ? -1 : index)}
            aria-expanded={isOpen}
          >
            <span className={styles.question}>{item.question}</span>
            <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
            {isOpen ? <span className={styles.answer}>{item.answer}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
