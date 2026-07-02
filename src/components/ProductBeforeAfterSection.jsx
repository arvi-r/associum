import React from 'react';
import { Container } from './Container';
import styles from './ProductBeforeAfterSection.module.scss';

const rows = [
  {
    before: '3 hours studying a 60-page report',
    after: 'Key insights extracted, sourced, and structured in minutes',
  },
  {
    before: 'A rough draft you spend an hour rebuilding',
    after: 'A formatted memo, sign-off ready',
  },
  {
    before: '4 tabs open, copy-pasting between documents',
    after: 'One workspace. One finished output.',
  },
  {
    before: '"Let me get back to you on that"',
    after: 'The deliverable ready before the meeting starts.',
  },
];

export function ProductBeforeAfterSection() {
  return (
    <section className={styles.section} aria-labelledby="before-after-title">
      <Container>
        <div className={styles.inner}>
          <div className={styles.header} data-reveal style={{ '--reveal-delay': '0.1s' }}>
            <p className={styles.eyebrow}>The Last Mile</p>
            <h2 id="before-after-title">Before Associum. After Associum.</h2>
          </div>

          <div className={styles.tableWrap}>
            <div className={styles.tableHeader}>
              <div className={styles.beforeHeader}>Before</div>
              <div className={styles.afterHeader}>After</div>
            </div>

            <div className={styles.tableBody}>
              {rows.map((row, i) => (
                <div
                  key={row.before}
                  className={styles.row}
                  data-reveal
                  style={{ '--reveal-delay': `${0.1 + i * 0.1}s` }}
                >
                  <div className={styles.beforeCell}>
                    <span className={styles.cellLabel}>Before</span>
                    {row.before}
                  </div>
                  <div className={styles.afterCell}>
                    <span className={styles.cellLabel}>After</span>
                    <div>{row.after}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className={styles.footerText} data-reveal style={{ '--reveal-delay': '0.5s' }}>
            <span>Associum doesn&apos;t change the knowledge and skills you bring to the work.</span>
            <span>It enables you to embed them easily in a unified, AI-driven workflow.</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
