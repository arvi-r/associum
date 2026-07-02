import React from 'react';
import { ButtonLink } from './ButtonLink';
import { Container } from './Container';
import { AnimatedGradientText } from './AnimatedGradientText';
import styles from './Hero.module.scss';

const heroBackground = '/Hero Section.webp';


export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.stage}>
        <div className={styles.backdrop} aria-hidden="true">
          <div className={styles.overlay} />
          <img className={styles.backgroundImage} src={heroBackground} alt="" />
        </div>

        <Container>
          <div
            className={styles.content}
            data-reveal="true"
            style={{ '--reveal-delay': '0.1s' }}
          >
            <div className={styles.copy}>
              <div className={styles.chip} data-reveal="true" style={{ '--reveal-delay': '0.2s' }}>
                <AnimatedGradientText text="BUILT BY FORMER INVESTORS, CONSULTANTS & ENGINEERS" />
              </div>

              <h1 id="hero-title" className={styles.title} data-reveal="true" style={{ '--reveal-delay': '0.3s' }}>
                <span className={styles.accent}>Associum:</span>{' '}
                <span className={styles.subTitle}>The AI Associate for Professionals</span>
              </h1>

              <p className={styles.description} data-reveal="true" style={{ '--reveal-delay': '0.4s' }}>
                From data and research to final deliverables
              </p>

              <div className={styles.actions} data-reveal="true" style={{ '--reveal-delay': '0.5s' }}>
                <ButtonLink
                  href="https://app.associum.ai/signup"
                  variant="primary"
                  size="heroPrimary"
                  className={styles.heroButton}
                >
                  Start for Free
                </ButtonLink>
                <ButtonLink
                  href="/product"
                  variant="outline"
                  size="heroSecondary"
                  className={styles.heroButton}
                >
                  See How It Works
                </ButtonLink>
              </div>
            </div>

            <p className={styles.meta} data-reveal="true" style={{ '--reveal-delay': '0.6s' }}>
              From zero to done &nbsp;&nbsp;·&nbsp;&nbsp; One step from sign-off <span className={styles.metaCert}>&nbsp;&nbsp;·&nbsp;&nbsp; SOC 2 &amp; ISO 27001 certified</span>
            </p>
          </div>


        </Container>
      </div>


    </section>
  );
}
