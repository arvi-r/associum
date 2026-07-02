import React from 'react';
import { Container } from './Container';
import styles from './SecuritySection.module.scss';
import noTrainingIcon from '../assets/homepage/security-no-model-training.svg?url';
import encryptedIcon from '../assets/homepage/security-encrypted.svg?url';
import zeroRetentionIcon from '../assets/homepage/security-zero-retention.svg?url';
import accessControlIcon from '../assets/homepage/security-access-control.svg?url';
import isoLogo from '../assets/homepage/iso.webp?url';
import socLogo from '../assets/homepage/soc.webp?url';

const securityCards = [
  {
    chip: 'Privacy Guaranteed',
    title: 'No Model Training',
    description:
      'Nothing you upload is ever used to train any AI model — including ours and our providers. This applies to every plan, including free.',
    icon: noTrainingIcon,
  },
  {
    chip: 'Security by Design',
    title: 'Encrypted at Rest and in Transit',
    description:
      'All data protected end-to-end with AES-256 encryption at rest and TLS 1.2+ in transit. Encryption keys managed independently — no unauthorized access.',
    icon: encryptedIcon,
  },
  {
    chip: 'Zero Retention',
    title: 'Your Data Stays Yours',
    description:
      "Zero data retention policy wherever possible. Your documents, questions, and outputs do not persist on any provider's infrastructure after processing.",
    icon: zeroRetentionIcon,
  },
  {
    chip: 'Access Control',
    title: 'Granular Role-Based Permissions',
    description:
      'Define exactly who can see, edit, or export within your workspace. Enterprise-grade firewall and cloud security across all plans.',
    icon: accessControlIcon,
  },
];

export function SecuritySection() {
  return (
    <section className={styles.section} aria-labelledby="security-title">
      <Container>
        <div>
          <div className={styles.header}>
            <p className={styles.eyebrow} data-reveal>Security &amp; Compliance</p>
            <h2 id="security-title" data-reveal style={{ '--reveal-delay': '0.1s' }}>Security at Enterprise Standards</h2>
            <p className={styles.description} data-reveal style={{ '--reveal-delay': '0.2s' }}>
              We never train our models on your data. Everything is encrypted, permissioned, and
              monitored — across every plan, from day one.
            </p>
          </div>

          <div className={styles.grid}>
            {securityCards.map((card, i) => (
              <article
                key={card.title}
                className={`${styles.card} ${i < securityCards.length - 1 ? styles.cardWithDivider : ''}`}
                data-reveal
                style={{ '--reveal-delay': `${0.1 + i * 0.1}s` }}
              >
                <span className={styles.chip}>{card.chip}</span>
                <div className={styles.cardTitleRow}>
                  <img src={card.icon} alt="" aria-hidden="true" className={styles.cardIcon} />
                  <h3>{card.title}</h3>
                </div>
                <p>{card.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.badgesContainer} data-reveal>
            <div className={styles.badge}>
              <img src={isoLogo} alt="ISO 27001 Certified" className={styles.badgeImage} />
              <p className={styles.badgeText}>ISO 27001</p>
            </div>
            <div className={styles.badge}>
              <img src={socLogo} alt="SOC 2 Type II Certified" className={styles.badgeImage} />
              <p className={styles.badgeText}>SOC2 Type II</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
