import React from 'react';
import { Container } from '../Container';
import styles from './PricingPage.module.scss';
import heroTexture from '../../assets/pricing/pricing-hero-texture.webp?url';
import heroGlow from '../../assets/pricing/pricing-hero-glow.webp?url';

// Static Pricing hero. The page's sections are composed in pricing.astro with
// selective hydration, so this ships no JS.
export function PricingPage() {
  return (
    <section className={styles.hero} aria-labelledby="pricing-page-title">
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.baseGradient} />
        <div className={styles.textureWrap}>
          <img src={heroTexture} alt="" />
        </div>
        <img className={styles.glow} src={heroGlow} alt="" />
      </div>

      <Container>
        <div className={styles.heroInner}>
          <div className={styles.copy}>
            <h1 id="pricing-page-title" data-reveal style={{ '--reveal-delay': '0.2s' }}>
              Pay for Output. Get More.
            </h1>
            <p className={styles.description} data-reveal style={{ '--reveal-delay': '0.35s' }}>
              Every credit goes toward real work like research, reports, or document processing. No per-user charges.
            </p>
            <p className={styles.meta} data-reveal style={{ '--reveal-delay': '0.5s' }}>
              SOC 2 Compliant &nbsp;·&nbsp; ISO 27001 &nbsp;·&nbsp; Your data never trains our models
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
