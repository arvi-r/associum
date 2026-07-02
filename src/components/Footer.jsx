import React from 'react';
import { Container } from './Container';
import styles from './Footer.module.scss';

import logoIcon from '../assets/footer/footer-logo.webp?url';
import isoBadge from '../assets/footer/footer-iso-badge.svg?url';
import aicpaLogo from '../assets/footer/aicpa.webp?url';
import linkedinIcon from '../assets/footer/footer-linkedin.svg?url';
import xIcon from '../assets/footer/footer-x.svg?url';
import watermarkIcon from '../assets/footer/footer-watermark.svg?url';

const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'Product', href: '/product' },
      { label: 'Security', href: '/security' },
      { label: 'Templates', href: '/templates' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Blogs', href: '/blogs' },
    ],
  },
  {
    heading: 'Use Case',
    links: [
      { label: 'Finance', href: '/finance' },
      { label: 'Consulting', href: '/consulting' },
      { label: 'Accounting', href: '/accounting' },
      { label: 'Compliance', href: '/compliance' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Enterprise', href: '/enterprise' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

const legalLinks = [
  { label: 'Sitemap', href: '/sitemap' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.top}>
            <div className={styles.brandBlock}>
              <a href="/" className={styles.brand}>
                <img src={logoIcon} alt="" aria-hidden="true" className={styles.brandIcon} />
                <span>Associum</span>
              </a>

              <p className={styles.brandCopy}>
                The AI Associate for Professionals. Built by former investors, consultants, and
                engineers.
              </p>

              <div className={styles.certifications}>
                <div className={styles.certItem}>
                  <img src={isoBadge} alt="ISO Certified" className={styles.isoBadge} />
                  <span className={styles.certLabel}>ISO 27001</span>
                </div>
                <div className={styles.certItem}>
                  <img src={aicpaLogo} alt="AICPA SOC 2 Certified" className={styles.socBadge} />
                  <span className={styles.certLabel}>SOC2 Type II</span>
                </div>
              </div>
            </div>

            <div className={styles.linkColumns}>
              {footerColumns.map((column) => (
                <div key={column.heading} className={styles.column}>
                  <h2>{column.heading}</h2>
                  <ul>
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href.startsWith('#') ? `/${link.href}` : link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className={styles.column}>
                <h2>Follow Us</h2>
                <div className={styles.socials}>
                  <a href="https://www.linkedin.com/company/associumai/about/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <img src={linkedinIcon} alt="" aria-hidden="true" />
                  </a>
                  <a href="https://x.com/AssociumAI" target="_blank" rel="noopener noreferrer" aria-label="X">
                    <img src={xIcon} alt="" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.bottomBrand}>
              <p>© 2026 Associum AI · Made for professionals</p>
            </div>
            <div className={styles.legalLinks}>
              {legalLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </Container>
      <div className={styles.watermark} aria-hidden="true">
        <img src={watermarkIcon} alt="" className={styles.watermarkIcon} />
        <span>Associum</span>
      </div>
    </footer>
  );
}
