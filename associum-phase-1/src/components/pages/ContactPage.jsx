import React from 'react';
import { Container } from '../Container';
import styles from './ContactPage.module.scss';
import heroTexture from '../../assets/about/about-hero-texture.webp?url';
import heroGlow from '../../assets/about/about-hero-glow.webp?url';

// Static Contact hero. The page's sections (support form, FAQ, CTA) are composed
// in contact.astro with selective hydration, so this ships no JS.
export function ContactPage() {
  return (
    <section className={styles.hero} aria-labelledby="contact-page-title">
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.baseGradient} />
        <div className={styles.textureWrap}>
          <img src={heroTexture} alt="" />
        </div>
        <img className={styles.glow} src={heroGlow} alt="" />
      </div>

      <Container>
        <div className={styles.heroInner}>
          <h1 id="contact-page-title" data-reveal style={{ '--reveal-delay': '0.2s' }}>
            Connect with Associum
          </h1>
          <p data-reveal style={{ '--reveal-delay': '0.35s' }}>
            Contact us for more information on Associum, our enterprise plans, partnership opportunities,
            press inquiries, and security documentation.
          </p>
        </div>
      </Container>
    </section>
  );
}
