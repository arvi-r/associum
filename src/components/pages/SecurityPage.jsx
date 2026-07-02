import React from 'react';
import { Container } from '../Container';
import styles from './SecurityPage.module.scss';
import heroBackground from '../../assets/security/security-hero-background.webp?url';
import heroOverlay from '../../assets/security/security-hero-overlay.webp?url';
import isoBadge from '../../assets/security/security-iso-badge.webp?url';
import socBadge from '../../assets/security/security-soc-badge.webp?url';
import trustCenterImage from '../../assets/security/security-trust-center.webp?url';
import metricsBackground from '../../assets/security/security-metrics-background.webp?url';
import { CtaBanner } from '../CtaBanner';

import noTrainingIcon from '../../assets/security/icons/security-no-training.svg?url';
import encryptionIcon from '../../assets/security/icons/security-encryption.svg?url';
import zeroRetentionIcon from '../../assets/security/icons/security-zero-retention.svg?url';
import complianceIcon from '../../assets/security/icons/security-compliance.svg?url';

import monitoringIcon from '../../assets/security/icons/checklist-monitoring.svg?url';
import gdprIcon from '../../assets/security/icons/checklist-gdpr.svg?url';
import ssoIcon from '../../assets/security/icons/checklist-sso.svg?url';
import pentestIcon from '../../assets/security/icons/checklist-pentest.svg?url';
import firewallIcon from '../../assets/security/icons/checklist-firewall.svg?url';
import rbacIcon from '../../assets/security/icons/checklist-rbac.svg?url';
import auditIcon from '../../assets/security/icons/checklist-audit.svg?url';
import incidentIcon from '../../assets/security/icons/checklist-incident.svg?url';

const securityHighlights = [
  [
    {
      badge: 'NO TRAINING',
      title: 'No Training on Your Data',
      description:
        'No file you upload, task you run, or report you generate is used to train any AI model, even on the Free plan.',
      icon: noTrainingIcon,
    },
    {
      badge: 'Encryption',
      title: 'End-to-End Encryption',
      description: 'All data encrypted in transit with TLS 1.2+ and at rest with AES-256.',
      icon: encryptionIcon,
    },
  ],
  [
    {
      badge: 'ZERO RETENTION',
      title: 'Zero Data Retention with LLM Providers',
      description: 'Zero-data retention agreements in place with all model providers.',
      icon: zeroRetentionIcon,
    },
    {
      badge: 'Enterprise-grade compliance',
      title: 'SOC 2 & ISO 27001 Compliant',
      description:
        'Independently audited security controls and information management protocols, with 24/7 automated compliance monitoring.',
      icon: complianceIcon,
    },
  ],
];

const complianceChecklist = [
  [
    {
      title: 'Real-Time Risk Monitoring',
      description: 'Automated 24/7 monitoring. Anomalies flagged the moment they occur.',
      icon: monitoringIcon,
    },
    {
      title: 'GDPR Compliant',
      description: 'Full GDPR compliance including data subject rights.',
      icon: gdprIcon,
    },
    {
      title: 'Single Sign-On (SSO)',
      description: 'SAML 2.0 and OAuth 2.0 — works with Okta, Azure AD, Google.',
      icon: ssoIcon,
    },
    {
      title: 'Penetration Testing',
      description: 'Regular third-party pen testing with disclosed findings.',
      icon: pentestIcon,
    },
  ],
  [
    {
      title: 'Enterprise-Grade Firewall',
      description: 'Multi-layer network security with DDoS protection.',
      icon: firewallIcon,
    },
    {
      title: 'Role-Based Access Controls',
      description:
        'Granular permissions on Team and Enterprise plans - define exactly who can view, edit, or export.',
      icon: rbacIcon,
    },
    {
      title: 'Audit Logs',
      description: 'Full audit trail of all actions on Enterprise plans.',
      icon: auditIcon,
    },
    {
      title: 'Incident Response',
      description:
        'Documented response plan with a 72-hour customer notification SLA for qualifying security incidents.',
      icon: incidentIcon,
    },
  ],
];

const securityMetrics = [
  {
    value: '100%',
    label: 'Encrypted at rest and in transit, every plan',
  },
  {
    value: 'Zero',
    label: 'LLM providers with data retention rights',
  },
  {
    value: '24/7',
    label: <>Automated threat<br />monitoring</>,
  },
  {
    value: '72hr',
    label: 'Maximum incident notification SLA',
  },
];

function ShieldIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M8 1.5 3 3.35v3.7c0 3.18 2.04 5.96 5 7.04 2.96-1.08 5-3.86 5-7.04v-3.7L8 1.5Z" />
      <path d="m5.75 7.85 1.45 1.42 3.35-3.4" />
    </svg>
  );
}

export function SecurityPage() {
  return (
    <>
      <main>
        <section className={styles.hero} aria-labelledby="security-hero-title">
          <div className={styles.backdrop} aria-hidden="true">
            <img src={heroBackground} alt="" className={styles.backgroundImage} />
            <img src={heroOverlay} alt="" className={styles.overlayImage} />
          </div>

          <Container>
            <div className={styles.heroInner}>
              <div className={styles.copy}>
                <h1 id="security-hero-title" data-reveal style={{ '--reveal-delay': '0.1s' }}>
                  Your Work Stays Yours. Always
                </h1>
                <p className={styles.description} data-reveal style={{ '--reveal-delay': '0.2s' }}>
                  Data privacy and security are foundational principles for Associum. Your data is
                  never used to train our models, and our system exceeds global enterprise-grade
                  compliance standards.
                </p>
                <p className={styles.meta} data-reveal style={{ '--reveal-delay': '0.3s' }}>
                  SOC 2 Compliant <span aria-hidden="true">·</span> ISO 27001{' '}
                  <span aria-hidden="true">·</span> No Model Training
                </p>
              </div>

              <div className={styles.badgePanel} data-reveal style={{ '--reveal-delay': '0.4s' }} aria-label="Compliance badges">
                <img src={isoBadge} alt="ISO 27001 certified" className={styles.isoBadge} />
                <img src={socBadge} alt="AICPA SOC certified" className={styles.socBadge} />
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.protection} aria-labelledby="security-compliance-title">
          <Container>
            <div className={styles.protectionInner}>
              <div className={styles.sectionHeader} data-reveal style={{ '--reveal-delay': '0.1s' }}>
                <p className={styles.sectionEyebrow}>Security &amp; Compliance</p>
                <h2 id="security-compliance-title">
                  Enterprise-grade protection for your most sensitive work
                </h2>
                <p>
                  Your data is never used to train our models. Everything is encrypted,
                  permissioned, and monitored — on every plan, from day one.
                </p>
              </div>

              <div className={styles.highlightGrid} data-reveal style={{ '--reveal-delay': '0.2s' }}>
                {securityHighlights.flat().map((item) => (
                  <article className={styles.highlightCard} key={item.title}>
                    <div className={styles.chip}>
                      <span className={styles.chipIcon}>
                        <img src={item.icon} alt="" />
                      </span>
                      {item.badge}
                    </div>
                    <div className={styles.highlightCopy}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className={styles.divider} data-reveal style={{ '--reveal-delay': '0.3s' }}>
                <span aria-hidden="true" />
                <p>Compliance Checklist</p>
                <span aria-hidden="true" />
              </div>

              <div className={styles.checklistGrid} data-reveal style={{ '--reveal-delay': '0.4s' }}>
                {complianceChecklist.flat().map((item) => (
                  <article className={styles.checklistItem} key={item.title}>
                    <span className={styles.checkIcon}>
                      <img src={item.icon} alt="" />
                    </span>
                    <div className={styles.checklistCopy}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.trustCenter} aria-labelledby="trust-center-title">
          <Container>
            <div className={styles.trustCenterInner}>
              <div className={styles.trustCenterCopy} data-reveal style={{ '--reveal-delay': '0.1s' }}>
                <div className={styles.trustCenterHeader}>
                  <p className={styles.sectionEyebrow}>Trust Center</p>
                  <h2 id="trust-center-title">
                    Every compliance document your team needs, in one place
                  </h2>
                </div>
                <p>
                  Full certification details, subprocessor list, data retention policies, and
                  incident response documentation — written in plain language. Enterprise customers
                  can request documents under NDA.
                </p>
                <div className={styles.trustCenterActions} aria-label="Trust center actions">
                  <a
                    className={styles.primaryButton}
                    href="https://brightriverai.trust.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Trust Center
                  </a>
                  <a
                    className={styles.secondaryButton}
                    href="mailto:support@associum.ai"
                  >
                    Request Documentation Under NDA
                  </a>
                </div>
              </div>

              <div className={styles.trustCenterVisual} data-reveal style={{ '--reveal-delay': '0.2s' }}>
                <img src={trustCenterImage} alt="Associum trust center dashboard" />
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.metrics} aria-label="Security metrics">
          <div className={styles.metricsBackdrop} aria-hidden="true">
            <img src={metricsBackground} alt="" />
          </div>
          <Container>
            <div className={styles.metricsGrid}>
              {securityMetrics.map((metric, i) => (
                <article
                  className={styles.metricTile}
                  data-reveal
                  style={{ '--reveal-delay': `${0.1 + i * 0.1}s` }}
                  key={metric.value}
                >
                  <strong>{metric.value}</strong>
                  <p>{metric.label}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <CtaBanner
          title={<>Built for professionals who demand <br className={styles.desktopOnly} /> data privacy and security</>}
          primaryLabel="Start for Free"
          primaryHref="https://app.associum.ai/signup"
          secondaryLabel="See Pricing"
          secondaryHref="/pricing"
          footnote="No credit card required"
        />
      </main>
    </>
  );
}
