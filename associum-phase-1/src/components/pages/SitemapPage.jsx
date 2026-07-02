import React from 'react';
import { Container } from '../Container';
import styles from './SitemapPage.module.scss';

const sitemapColumns = [
  {
    title: 'Core Platform',
    links: [
      { label: 'Home Page', href: '/' },
      { label: 'Product', href: '/product' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Security', href: '/security' },
    ],
  },
  {
    title: 'Company & Connect',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal & Policies',
    links: [
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
];

export function SitemapPage() {
  return (
    <main className={styles.sitemapWrapper}>
      <Container>
        <div className={styles.sitemapInner}>
          <header className={styles.header} data-reveal>
            <h1>Sitemap</h1>
            <p>Directory of pages, resources, and legal guidelines across the Associum platform.</p>
          </header>

          <div className={styles.grid} data-reveal style={{ '--reveal-delay': '0.1s' }}>
            {sitemapColumns.map((col, idx) => (
              <div key={idx} className={styles.column}>
                <h2>{col.title}</h2>
                <ul className={styles.linkList}>
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      {link.external ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                          <span>{link.label}</span>
                          <span className={styles.externalIndicator} aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <a href={link.href} className={styles.linkItem}>
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
