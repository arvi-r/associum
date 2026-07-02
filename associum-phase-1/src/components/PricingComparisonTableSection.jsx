import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Container } from './Container';
import { ButtonLink } from './ButtonLink';
import styles from './PricingComparisonTableSection.module.scss';
import tickIcon from '../assets/pricing/tick.svg?url';

const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const plans = [
  {
    name: 'Free',
    priceLine: '$0',
    cadence: '',
    cta: 'Start for Free',
    variant: 'brandLine',
  },
  {
    name: 'Starter',
    priceLine: 'Starts at $49',
    cadence: '/ month',
    cta: 'Start Now',
    variant: 'brandLine',
  },
  {
    name: 'Pro',
    priceLine: 'Starts at $159',
    cadence: '/ month',
    cta: 'Start Now',
    variant: 'primary',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Max',
    priceLine: 'Starts at $499',
    cadence: '/ month',
    cta: 'Start Now',
    variant: 'brandLine',
  },
];

const rows = [
  {
    group: 'Credits',
    label: 'Daily credits',
    values: ['5', '5', '5', '5'],
  },
  {
    label: 'Monthly credits',
    values: ['-', '300', '1,000', '3,000'],
  },
  {
    label: 'Outputs/month',
    info: true,
    values: ['-', <>Up to 8 reports or <br /> 83 tasks</>, 'Up to 25 reports or 333 tasks per month', 'Up to 75 reports or 1,000 tasks per month'],
    valuesInfo: [false, true, true, true],
  },
  {
    group: 'Features',
    label: 'SOC 2 Type II compliance and ISO 27001',
    values: [true, true, true, true],
  },
  {
    label: 'Access to all templates',
    values: [true, true, true, true],
  },
  {
    label: 'Full task execution',
    values: [true, true, true, true],
  },
  {
    label: 'Report download',
    values: [false, true, true, true],
  },
  {
    label: 'Standard export formats',
    values: [false, true, true, true],
  },
  {
    label: 'Shared workspaces',
    values: ['-', 'Invite up to 5 guests', 'Invite up to 5 guests', 'Invite up to 10 guests'],
  },
  {
    label: 'Priority processing',
    values: [false, false, true, true],
  },
  {
    label: 'Advanced formatting',
    values: [false, false, true, true],
  },
  {
    label: 'Dedicated support',
    values: [false, false, false, true],
  },
];

function CheckIcon() {
  return (
    <img src={tickIcon} alt="" className={styles.tickIcon} />
  );
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" role="presentation" aria-hidden="true">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" />
      <path d="M7 6.2v3.1" stroke="currentColor" strokeLinecap="round" />
      <circle cx="7" cy="4.25" r=".7" fill="currentColor" />
    </svg>
  );
}

function CellContent({ value, showInfo = false }) {
  if (typeof value === 'boolean') {
    return value ? (
      <span className={styles.checkWrap}>
        <CheckIcon />
      </span>
    ) : (
      <span className={styles.dash}>-</span>
    );
  }

  return (
    <span className={styles.textValue}>
      {value}
      {showInfo && (
        <div className={styles.infoWrapper}>
          <span className={styles.inlineInfo}>
            <InfoIcon />
          </span>
          <div className={styles.tooltip}>
            Use your credits however you work: tasks, reports, or file uploads, in any combination.
            <div className={styles.tooltipArrow} />
          </div>
        </div>
      )}
    </span>
  );
}

export function PricingComparisonTableSection() {
  let currentGroup = null;
  const containerRef = useRef(null);
  const tableWrapRef = useRef(null);
  const cloneHeaderRef = useRef(null);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !tableWrapRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const tableWrapRect = tableWrapRef.current.getBoundingClientRect();

      // Determine sticky threshold based on device
      const width = window.innerWidth;
      if (width < 1000) {
        setShowFixed(false);
        return;
      }

      const isMobile = width < 1280;
      const stickyTop = isMobile ? 108 : 120;

      // Show fixed header when the main header row hits the sticky threshold
      // and hide it when the section ends
      const shouldShow = tableWrapRect.top <= stickyTop && tableWrapRect.bottom > (stickyTop + 200);
      setShowFixed(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    // Defer the initial check to the next animation frame to completely avoid mount-time forced reflow
    requestAnimationFrame(() => {
      handleScroll();
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleTableScroll = (e) => {
    if (cloneHeaderRef.current) {
      cloneHeaderRef.current.scrollLeft = e.target.scrollLeft;
    }
  };

  const renderHeaderRow = (isFixed = false) => (
    <div className={isFixed ? styles.fixedHeaderRow : styles.headerRow}>
      <div className={styles.stubCell}>
        <span className={styles.stubLabel}>Plans & Features</span>
      </div>
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`${styles.planHeader} ${plan.featured ? styles.featuredColumn : ''}`}
        >
          {plan.badge ? <div className={styles.badge}>{plan.badge}</div> : null}
          <div className={styles.planHeaderInner}>
            <h3>{plan.name}</h3>
            <p className={styles.planPrice}>
              {plan.priceLine}
              {plan.cadence && <span className={styles.planCadence}> {plan.cadence}</span>}
            </p>
            <ButtonLink href="https://app.associum.ai/signup" variant={plan.variant} size="pricing" className={styles.headerButton}>
              {plan.cta}
            </ButtonLink>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <motion.section
      ref={containerRef}
      className={styles.section}
      id="compare-plans"
      aria-labelledby="compare-plans-title"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      {/* Fixed Cloned Header for Sticky Behavior */}
      <AnimatePresence>
        {showFixed && (
          <motion.div
            className={styles.fixedHeaderContainer}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <div
              className={styles.fixedHeaderScroll}
              ref={cloneHeaderRef}
            >
              {renderHeaderRow(true)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Container>
        <div className={styles.inner}>
          <h2 id="compare-plans-title">Compare Plans</h2>

          <div
            className={styles.horizontalScrollContainer}
            ref={tableWrapRef}
            onScroll={handleTableScroll}
          >
            <div className={styles.tableWrap}>
              {renderHeaderRow(false)}

              {rows.map((row, rowIndex) => {
                const showGroup = Boolean(row.group && row.group !== currentGroup);
                if (row.group) currentGroup = row.group;

                return (
                  <React.Fragment key={`${row.label}-${rowIndex}`}>
                    {showGroup ? (
                      <motion.div className={styles.groupRow} variants={rowVariants}>
                        <div className={styles.groupCell}>{row.group.toUpperCase()}</div>
                        {plans.map((plan) => (
                          <div
                            key={`${row.group}-${plan.name}`}
                            className={`${styles.emptyGroupCell} ${plan.featured ? styles.featuredColumn : ''}`}
                          />
                        ))}
                      </motion.div>
                    ) : null}

                    <motion.div className={styles.dataRow} variants={rowVariants}>
                      <div className={styles.labelCell}>
                        <span>{row.label}</span>
                        {row.info ? (
                          <div className={styles.infoWrapper}>
                            <span className={styles.inlineInfo}>
                              <InfoIcon />
                            </span>
                            <div className={styles.tooltip}>
                              Use your credits however you work: tasks, reports, or file uploads, in any combination.
                              <div className={styles.tooltipArrow} />
                            </div>
                          </div>
                        ) : null}
                      </div>
                      {row.values.map((value, index) => (
                        <div
                          key={`${row.label}-${plans[index].name}`}
                          className={`${styles.valueCell} ${plans[index].featured ? styles.featuredColumn : ''}`}
                        >
                          <CellContent value={value} showInfo={Boolean(row.valuesInfo?.[index])} />
                        </div>
                      ))}
                    </motion.div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
