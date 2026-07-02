import React from 'react';
import { Container } from './Container';
import styles from './ProductComparisonSection.module.scss';
import associumIcon from '../assets/product/comparison-associum-logo.webp?url';
import negativeIcon from '../assets/product/cross.svg?url';
import positiveIcon from '../assets/product/tick.svg?url';
import vsLeftRibbon from '../assets/product/comparison-vs-left.svg?url';
import vsRightRibbon from '../assets/product/comparison-vs-right.svg?url';

const comparisonRows = [
  {
    associum: 'A specialised solution built for granular business and financial analysis. Purpose-built for finance, consulting, accounting, and legal.',
    other: 'General tools but for high-level research and drafting lack important context for industry-specific tasks.',
  },
  {
    associum: 'Completes the full production cycle — data, research, analysis, finished document.',
    other: 'Must manually upload a limited number of docs to process during each task, for a chatbot-style output that trapped in the browser.',
  },
  {
    associum: 'Complete your work on a single app and share directly with clients or teammates.',
    other: 'Require context and app switching to go from idea to finished report.',
  },
  {
    associum: 'Teams can collaborate around analysis and reports.',
    other: 'No shared workspace — collaboration happens outside the tool.',
  },
  {
    associum: 'Build a long-term knowledge base that scales with your team.',
    other: 'No long-term, scalable management of your data.',
  },
];

export function ProductComparisonSection() {
  return (
    <section className={styles.section} aria-labelledby="comparison-title">
      <Container>
        <div className={styles.inner}>
          <div className={styles.header} data-reveal style={{ '--reveal-delay': '0.1s' }}>
            <h2 id="comparison-title">Built Different. On Purpose.</h2>
            <p>Most AI gives you more work to do. Associum gives you work that&apos;s done.</p>
          </div>

          <div data-reveal style={{ '--reveal-delay': '0.15s' }}>
            <div className={`${styles.comparison} ${styles.desktopComparison}`} aria-label="Product comparison">
              <div className={`${styles.cardHeader} ${styles.associumHeader}`}>
                <div className={styles.associumBrand}>
                  <img src={associumIcon} alt="" aria-hidden="true" />
                  <span>Associum</span>
                </div>
              </div>

              <div className={`${styles.cardHeader} ${styles.otherHeader}`}>
                <h3>OTHER PLATFORMS</h3>
              </div>

              {comparisonRows.map((row, index) => {
                const isFirstRow = index === 0;
                const isLastRow = index === comparisonRows.length - 1;

                return (
                  <React.Fragment key={index}>
                    <div
                      className={[
                        styles.cell,
                        styles.associumCell,
                        isFirstRow ? styles.firstRow : '',
                        isLastRow ? styles.lastRow : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <img src={positiveIcon} alt="" aria-hidden="true" className={styles.icon} />
                      <p>{row.associum}</p>
                    </div>
                    <div
                      className={[
                        styles.cell,
                        styles.otherCell,
                        isFirstRow ? styles.firstRow : '',
                        isLastRow ? styles.lastRow : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <img src={negativeIcon} alt="" aria-hidden="true" className={styles.icon} />
                      <p>{row.other}</p>
                    </div>
                  </React.Fragment>
                );
              })}

              <div className={styles.vsBadge} aria-hidden="true">
                vs
              </div>
              <img src={vsRightRibbon} alt="" aria-hidden="true" className={styles.vsLeftRibbon} />
              <img src={vsLeftRibbon} alt="" aria-hidden="true" className={styles.vsRightRibbon} />
            </div>

            <div className={styles.stackedComparison} aria-label="Product comparison">
              <article className={`${styles.stackCard} ${styles.associumStackCard}`}>
                <div className={styles.stackHeader}>
                  <div className={styles.associumBrand}>
                    <img src={associumIcon} alt="" aria-hidden="true" />
                    <span>Associum</span>
                  </div>
                </div>

                <div className={styles.stackList}>
                  {comparisonRows.map((row, index) => (
                    <div
                      key={index}
                      className={[
                        styles.stackCell,
                        index === 0 ? styles.firstRow : '',
                        index === comparisonRows.length - 1 ? styles.stackLastRow : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <img src={positiveIcon} alt="" aria-hidden="true" className={styles.icon} />
                      <p>{row.associum}</p>
                    </div>
                  ))}
                </div>
              </article>

              <div className={styles.stackVsBadge} aria-hidden="true">
                vs
              </div>

              <article className={`${styles.stackCard} ${styles.otherStackCard}`}>
                <div className={styles.stackHeader}>
                  <h3>OTHER PLATFORMS</h3>
                </div>

                <div className={styles.stackList}>
                  {comparisonRows.map((row, index) => (
                    <div
                      key={index}
                      className={[
                        styles.stackCell,
                        index === 0 ? styles.firstRow : '',
                        index === comparisonRows.length - 1 ? styles.stackLastRow : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <img src={negativeIcon} alt="" aria-hidden="true" className={styles.icon} />
                      <p>{row.other}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
