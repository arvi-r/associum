import React from 'react';
import { Container } from './Container';
import styles from './SampleOutputsSection.module.scss';
import pdfViewerIcon from '../assets/homepage/pdf_viewer.svg?url';
import equityHoverAsset from '../assets/homepage/equity-hover.svg?url';
import equityNormalAsset from '../assets/homepage/equity-normal.svg?url';
import strategyHoverAsset from '../assets/homepage/strategy-hover.svg?url';
import strategyNormalAsset from '../assets/homepage/strategy-normal.svg?url';
import standardHoverAsset from '../assets/homepage/standard-hover.svg?url';
import standardNormalAsset from '../assets/homepage/standard-normal.svg?url';
import complianceHoverAsset from '../assets/homepage/compliance-hover.svg?url';
import complianceNormalAsset from '../assets/homepage/compliance-normal.svg?url';

const sampleCards = [
  {
    sector: 'Finance',
    title: 'Equity Initiation Report',
    label: 'Finance',
    previewType: 'swap',
    normalArt: equityNormalAsset,
    hoverArt: equityHoverAsset,
    artAlt: 'Finance sample output folder preview',
    href: 'https://app.associum.ai/s/report/6f36de45-43b7-4a58-8648-eabcaaf779f9',
  },
  {
    sector: 'Consulting',
    title: 'Strategy Transformation Deck',
    previewType: 'swap',
    normalArt: strategyNormalAsset,
    hoverArt: strategyHoverAsset,
    artAlt: 'Consulting sample output folder preview',
    href: 'https://app.associum.ai/s/report/70ac7613-37b7-4f9b-b089-166777227852',
  },
  {
    sector: 'Accounting',
    title: 'Standards Conversion',
    previewType: 'swap',
    normalArt: standardNormalAsset,
    hoverArt: standardHoverAsset,
    artAlt: 'Accounting sample output folder preview',
    href: 'https://app.associum.ai/s/report/d28c7850-8dfa-4e58-b0b0-e91159bcfb30',
  },
  {
    sector: 'Compliance',
    title: 'Regulatory Change Brief',
    previewType: 'swap',
    normalArt: complianceNormalAsset,
    hoverArt: complianceHoverAsset,
    artAlt: 'Compliance sample output folder preview',
    href: 'https://app.associum.ai/s/report/9fea20a4-d97c-4bba-868a-9cfa9d4c3c28',
  },
];

function ArtworkSwapPreview({ normalArt, hoverArt, artAlt }) {
  return (
    <div className={`${styles.folderPreview} ${styles.swapPreview}`}>
      <img className={`${styles.swapArt} ${styles.swapArtNormal}`} src={normalArt} alt={artAlt} />
      <img className={`${styles.swapArt} ${styles.swapArtHover}`} src={hoverArt} alt="" aria-hidden="true" />
    </div>
  );
}

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
                <h3>{card.title}</h3>
              </div>

              <ArtworkSwapPreview
                normalArt={card.normalArt}
                hoverArt={card.hoverArt}
                artAlt={card.artAlt}
              />

              <div className={styles.downloadButton} aria-hidden="true">
                <img src={pdfViewerIcon} alt="" />
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
