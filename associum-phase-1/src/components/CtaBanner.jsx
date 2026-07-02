import React from 'react';
import { Container } from './Container';
import { ButtonLink } from './ButtonLink';
import styles from './CtaBanner.module.scss';

export function CtaBanner({
  title,
  description,
  primaryLabel,
  primaryHref = '#',
  primaryVariant = 'primary',
  secondaryLabel,
  secondaryHref = '#',
  footnote,
  meta,
  className = '',
}) {
  return (
    <section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <div className={styles.panel}>
          <div className={styles.header} data-reveal style={{ '--reveal-delay': '0.2s' }}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <div className={styles.actions} data-reveal style={{ '--reveal-delay': '0.3s' }}>
            <div className={styles.primaryActionGroup}>
              <ButtonLink href={primaryHref} variant={primaryVariant} size="heroPrimary">
                {primaryLabel}
              </ButtonLink>
              {footnote ? <span className={styles.footnote}>{footnote}</span> : null}
            </div>

            {secondaryLabel ? (
              <ButtonLink href={secondaryHref} variant="outline" size="heroSecondary">
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>

          {meta ? (
            <span className={styles.meta} data-reveal style={{ '--reveal-delay': '0.4s' }}>
              {meta}
            </span>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
