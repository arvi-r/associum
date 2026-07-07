import React from 'react';
import { Container } from './Container';
import styles from './SampleOutputsSection.module.scss';
import financeAsset from '../assets/homepage/sample-outputs/finance.png?url';
import consultingAsset from '../assets/homepage/sample-outputs/consulting.png?url';
import accountingAsset from '../assets/homepage/sample-outputs/accounting.png?url';
import complianceAsset from '../assets/homepage/sample-outputs/compliance.png?url';

const sampleCards = [
  {
    sector: 'FINANCE',
    title: 'Equity Initiation Report',
    image: financeAsset,
    artAlt: 'Finance sample output preview',
    href: 'https://app.associum.ai/s/report/6f36de45-43b7-4a58-8648-eabcaaf779f9',
  },
  {
    sector: 'CONSULTING',
    title: 'Strategy Transformation\nDeck',
    image: consultingAsset,
    artAlt: 'Consulting sample output preview',
    href: 'https://app.associum.ai/s/report/70ac7613-37b7-4f9b-b089-166777227852',
  },
  {
    sector: 'ACCOUNTING',
    title: 'Standards conversion',
    image: accountingAsset,
    artAlt: 'Accounting sample output preview',
    href: 'https://app.associum.ai/s/report/d28c7850-8dfa-4e58-b0b0-e91159bcfb30',
  },
  {
    sector: 'COMPLIANCE',
    title: 'Regulatory change brief',
    image: complianceAsset,
    artAlt: 'Compliance sample output preview',
    href: 'https://app.associum.ai/s/report/9fea20a4-d97c-4bba-868a-9cfa9d4c3c28',
  },
];

export function SampleOutputsSection() {
  const scrollerRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScroll = () => {
    if (!scrollerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  React.useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller) {
      scroller.addEventListener('scroll', checkScroll);
      checkScroll();
      // Also check on window resize
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (scroller) scroller.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    if (!scrollerRef.current) return;
    const scrollAmount = direction === 'left' ? -400 : 400;
    scrollerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className={styles.section} aria-labelledby="sample-outputs-title">
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Sample Outputs</p>
          <h2 id="sample-outputs-title">See What Associum Can Build</h2>
          <p className={styles.description}>
            Turn your work into finished deliverables. Documents, presentations, and spreadsheets —
            generated directly on the platform, in one click.
          </p>
        </div>
      </Container>

      <div className={styles.scrollerWrap}>
        <div className={styles.scroller} ref={scrollerRef}>
          <div className={styles.scrollerSpacer} aria-hidden="true" />
          {sampleCards.map((card) => (
            <a 
              key={card.title} 
              href={card.href} 
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.cardCopy}>
                <p className={styles.cardEyebrow}>{card.sector}</p>
                <h3>
                  {card.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i !== card.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
              </div>

              <div className={styles.imageContainer}>
                <img className={styles.image} src={card.image} alt={card.artAlt} />
              </div>
              <div className={styles.hoverIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
            </a>
          ))}
          <div className={styles.scrollerSpacer} aria-hidden="true" />
        </div>
      </div>

      <Container>
        <div className={styles.controls}>
          <button
            className={`${styles.navButton} ${!canScrollLeft ? styles.disabled : ''}`}
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" className={styles.bgCircle} />
              <path d="M22 14L16 20L22 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className={`${styles.navButton} ${!canScrollRight ? styles.disabled : ''}`}
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" className={styles.bgCircle} />
              <path d="M18 14L24 20L18 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
}
