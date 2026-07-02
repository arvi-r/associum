import React from 'react';
import { Container } from '../Container';
import { ButtonLink } from '../ButtonLink';
import styles from './ProductPage.module.scss';
import heroBackground from '../../assets/product/product-hero-background.webp?url';
import heroVisual from '../../assets/product/product-hero-visual.webp?url';

// Static Product hero. The page's sections are composed in product.astro with
// selective hydration, so this ships no JS.
export function ProductPage() {
  return (
    <section className={styles.hero} aria-labelledby="product-hero-title">
      <div className={styles.backdrop} aria-hidden="true">
        <img src={heroBackground} alt="" />
      </div>

      <Container>
        <div className={styles.heroInner}>
          <div className={styles.copy}>
            <h1 id="product-hero-title" data-reveal style={{ '--reveal-delay': '0.2s' }}>
              Most AI gets you to a draft.
              <br />
              Associum gets you to done.
            </h1>

            <p className={styles.description} data-reveal style={{ '--reveal-delay': '0.35s' }}>
              From raw data to finished documents, Associum takes you end-to-end with high quality
              research, analysis, and report generation.
            </p>

            <div className={styles.actions} data-reveal style={{ '--reveal-delay': '0.5s' }}>
              <ButtonLink href="https://app.associum.ai/signup" variant="primary" size="heroPrimary">
                Start for Free
              </ButtonLink>
              <ButtonLink href="/pricing" variant="outline" size="heroSecondary">
                See Pricing
              </ButtonLink>
            </div>
          </div>

          <div
            className={styles.previewShell}
            aria-hidden="true"
            data-reveal="zoom"
            style={{ '--reveal-delay': '0.4s' }}
          >
            <img src={heroVisual} alt="Associum Platform Preview" className={styles.heroImage} />
          </div>
        </div>
      </Container>
    </section>
  );
}
