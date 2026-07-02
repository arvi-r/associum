import React from 'react';
import { Container } from './Container';
import styles from './PricingTopUpSection.module.scss';

const topUpPacks = [
  {
    credits: '250',
    price: '$100',
    unitPrice: '$0.40 per credit',
  },
  {
    credits: '600',
    price: '$200',
    unitPrice: '$0.33 per credit',
    savings: 'Save 17%',
  },
  {
    credits: '1,200',
    price: '$300',
    unitPrice: '$0.25 per credit',
    savings: 'Save 37%',
  },
];

export function PricingTopUpSection({ variant = 'dark' }) {
  return (
    <section className={`${styles.section} ${variant === 'light' ? styles.light : ''}`} aria-labelledby="pricing-top-up-title">
      <Container>
        <div className={styles.inner}>
          <div className={styles.header} data-reveal style={{ '--reveal-delay': '0.2s' }}>
            <h2 id="pricing-top-up-title">Need More Credits?</h2>
            <p>Top up at any time. Add-on packs never expire and are available on all paid plans.</p>
          </div>

          <div className={styles.grid}>
            {topUpPacks.map((pack, i) => (
              <article
                key={pack.credits}
                className={styles.card}
                data-reveal
                style={{ '--reveal-delay': `${0.1 + i * 0.1}s` }}
              >
                {pack.savings ? <div className={styles.savingsTag}>{pack.savings}</div> : null}

                <div className={styles.cardContent}>
                  <p className={styles.creditsLine}>
                    <span className={styles.creditNumber}>
                      {pack.credits}
                    </span>
                    <span className={styles.creditLabel}>credits</span>
                  </p>
                  <p className={styles.price}>{pack.price}</p>
                  <p className={styles.unitPrice}>{pack.unitPrice}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
