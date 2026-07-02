import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './Container';
import { ButtonLink } from './ButtonLink';
import styles from './PricingPlansSection.module.scss';
import { ScrollReveal } from './ScrollReveal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const monthlyPlans = [
  {
    name: 'Free',
    description: 'Free forever for limited tasks.',
    price: '$0',
    cadence: '',
    credits: ['5 daily credits', 'No credit card required'],
    buttonLabel: 'Start for Free',
    buttonVariant: 'line',
    featuresLabel: 'Free plan features',
    features: [
      'Credits refresh every day',
      'All templates included',
      'Full task execution',
      'No credit card required',
    ],
  },
  {
    name: 'Starter',
    description: 'For analysts and consultants running 2–3 research tasks a week.',
    price: '$49',
    cadence: '/ month',
    credits: ['300 monthly + 5 daily credits', 'Up to 8 reports or 83 tasks per month'],
    tooltip: '8 reports, 83 tasks, or any mix in between.',
    buttonLabel: 'Start Now',
    buttonVariant: 'line',
    featuresLabel: 'Everything in Free, plus',
    features: ['Download finished reports', 'Export in standard formats', 'Email support', 'Shared workspaces', 'Invite up to 5 guests'],
  },
  {
    name: 'Pro',
    description: 'For analysts and consultants running daily research workflows.',
    price: '$159',
    cadence: '/ month',
    credits: ['1,000 monthly + 5 daily credits', 'Up to 25 reports or 333 tasks per month'],
    tooltip: '25 reports, 333 tasks, or any mix in between.',
    buttonLabel: 'Start Now',
    buttonVariant: 'fill',
    featured: true,
    badge: 'Most Popular',
    featuresLabel: 'Everything in Starter, plus',
    features: ['Faster turnaround on all tasks', 'Professional-grade document formatting', 'Invite up to 5 guests'],
  },
  {
    name: 'Max',
    description: 'For teams running daily research workflows across multiple workstreams.',
    price: '$499',
    cadence: '/ month',
    credits: ['3,000 monthly + 5 daily credits', 'Up to 75 reports or 1,000 tasks per month'],
    tooltip: '75 reports, 1000 tasks, or any mix in between.',
    buttonLabel: 'Start Now',
    buttonVariant: 'line',
    featuresLabel: 'Everything in Pro, plus',
    features: ['No output limits', 'Dedicated account support', 'Invite up to 10 guests'],
  },
];

const annualPlans = [
  {
    name: 'Free',
    description: 'Free forever for limited tasks.',
    price: '$0',
    cadence: '',
    credits: ['5 daily credits', 'No credit card required'],
    buttonLabel: 'Start for Free',
    buttonVariant: 'line',
    featuresLabel: 'Free plan features',
    features: [
      'Credits refresh every day',
      'All templates included',
      'Full task execution',
      '100 free sign-up credits',
    ],
  },
  {
    name: 'Starter',
    description: 'For analysts and consultants running 2–3 research tasks a week.',
    price: '$39',
    oldPrice: '$49',
    cadence: '/ month',
    credits: ['300 monthly + 5 daily credits', 'Up to 8 reports or 83 tasks per month'],
    tooltip: '8 reports, 83 tasks, or any mix in between.',
    buttonLabel: 'Start Now',
    buttonVariant: 'line',
    featuresLabel: 'Everything in Free, plus',
    features: ['Download finished reports', 'Export in standard formats', 'Email support', 'Shared workspaces', 'Invite up to 5 guests'],
  },
  {
    name: 'Pro',
    description: 'For analysts and consultants running daily research workflows.',
    price: '$129',
    oldPrice: '$159',
    cadence: '/ month',
    credits: ['1,000 monthly + 5 daily credits', 'Up to 25 reports or 333 tasks per month'],
    tooltip: '25 reports, 333 tasks, or any mix in between.',
    buttonLabel: 'Start Now',
    buttonVariant: 'fill',
    featured: true,
    badge: 'Most Popular',
    featuresLabel: 'Everything in Starter, plus',
    features: ['Faster turnaround on all tasks', 'Professional-grade document formatting', 'Invite up to 5 guests'],
  },
  {
    name: 'Max',
    description: 'For teams running daily research across multiple workstreams.',
    price: '$399',
    oldPrice: '$499',
    cadence: '/ month',
    credits: ['3,000 monthly + 5 daily credits', 'Up to 75 reports or 1,000 tasks per month'],
    tooltip: '75 reports, 1000 tasks, or any mix in between.',
    buttonLabel: 'Start Now',
    buttonVariant: 'line',
    featuresLabel: 'Everything in Pro, plus',
    features: ['No output limits', 'Dedicated account support', 'Invite up to 10 guests'],
  },
];

function CheckIcon() {
  return (
    <span className={styles.checkIcon} aria-hidden="true">
      <svg viewBox="0 0 20 20" fill="none" role="presentation">
        <path d="M4.5 10.4 8.1 14l7.4-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function InfoIcon() {
  return (
    <span className={styles.infoIcon} aria-hidden="true">
      <svg viewBox="0 0 14 14" fill="none" role="presentation">
        <circle cx="7" cy="7" r="5.5" stroke="currentColor" />
        <path d="M7 6.2v3.1" stroke="currentColor" strokeLinecap="round" />
        <circle cx="7" cy="4.25" r=".7" fill="currentColor" />
      </svg>
    </span>
  );
}

export function PricingPlansSection() {
  const [billing, setBilling] = useState('annual');

  const plans = useMemo(() => (billing === 'monthly' ? monthlyPlans : annualPlans), [billing]);

  const tabStyle = (isActive) =>
    isActive
      ? {
        background:
          'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.17) 100%), linear-gradient(97.22deg, #059466 4.0412%, #09523B 103.36%)',
        color: '#ffffff',
        border: '1px solid #0F8560',
        boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.22)',
        fontWeight: 600,
      }
      : {
        background: 'transparent',
        color: '#323741',
        border: '1px solid transparent',
        fontWeight: 500,
      };

  return (
    <ScrollReveal>
      <section className={styles.section} aria-labelledby="pricing-plans-title">
        <Container>
          <div className={styles.inner}>
            <div className={styles.header}>
              <h2 id="pricing-plans-title">Own Your Workflow</h2>
              <p>
                Choose the plan that fits your needs. Tailor your credits based on how you use the
                platform, with flexibility and predictability.
              </p>

              <div className={styles.toggle} role="tablist" aria-label="Billing cadence">
                <button
                  type="button"
                  role="tab"
                  aria-selected={billing === 'monthly'}
                  className={billing === 'monthly' ? styles.activeTab : ''}
                  style={tabStyle(billing === 'monthly')}
                  onClick={() => setBilling('monthly')}
                >
                  Pay Monthly
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={billing === 'annual'}
                  className={billing === 'annual' ? styles.activeTab : ''}
                  style={tabStyle(billing === 'annual')}
                  onClick={() => setBilling('annual')}
                >
                  Pay Annually (20% off)
                </button>
              </div>
            </div>

            <motion.div
              className={styles.banner}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
            >
              <motion.h2 id="pricing-compare-banner-title" variants={cardVariants}>
                Your first 100 credits are free. No card needed.
              </motion.h2>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={billing}
                className={`${styles.cards} ${styles[billing]}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {plans.map((plan) => (
                  <motion.article
                    key={plan.name}
                    className={`${styles.card} ${plan.featured ? styles.featuredCard : ''} ${styles[plan.name.toLowerCase()] || ''}`}
                    variants={cardVariants}
                  >
                    {plan.badge ? <div className={styles.badge}>{plan.badge}</div> : null}

                    <div className={styles.cardTop}>
                      <div className={`${styles.planIntro} ${plan.name === 'Max' ? styles.maxIntro : ''}`}>
                        <h3>{plan.name}</h3>
                        <p>{plan.description}</p>
                      </div>

                      <div className={styles.priceBlock}>
                        <div className={styles.priceLine}>
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={plan.price}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className={styles.price}
                            >
                              {plan.price}
                            </motion.span>
                          </AnimatePresence>
                          {plan.oldPrice ? (
                            <AnimatePresence mode="wait">
                              <motion.span
                                key={plan.oldPrice}
                                initial={{ opacity: 0, x: 5 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -5 }}
                                transition={{ duration: 0.2 }}
                                className={styles.oldPrice}
                              >
                                {plan.oldPrice}
                              </motion.span>
                            </AnimatePresence>
                          ) : null}
                          {plan.cadence ? <span className={styles.cadence}>{plan.cadence}</span> : null}
                        </div>
                      </div>

                      <div className={styles.creditBlock}>
                        {plan.credits.map((line, index) => (
                          <p key={line} className={line === 'No credit card required' ? styles.subtleLine : ''}>
                            {index === 1 && plan.name !== 'Free' ? (
                              <span className={styles.creditLineWithInfo}>
                                <span>{line}</span>
                                <div className={styles.infoWrapper}>
                                  <InfoIcon />
                                  {plan.tooltip && (
                                    <div className={styles.tooltip}>
                                      {plan.tooltip}
                                      <div className={styles.tooltipArrow} />
                                    </div>
                                  )}
                                </div>
                              </span>
                            ) : (
                              line
                            )}
                          </p>
                        ))}
                      </div>

                      <ButtonLink
                        href="https://app.associum.ai/signup"
                        variant={plan.buttonVariant === 'fill' ? 'primary' : 'brandLine'}
                        size="pricing"
                        className={styles.planButton}
                      >
                        {plan.buttonLabel}
                      </ButtonLink>
                    </div>

                    <div className={styles.cardBottom}>
                      <p className={styles.featuresLabel}>{plan.featuresLabel}</p>
                      <div className={styles.featureDivider} aria-hidden="true" />
                      <ul className={styles.featureList}>
                        {plan.features.map((feature) => (
                          <li key={feature}>
                            <CheckIcon />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>

            <div className={styles.bannersWrapper}>
              <motion.div
                className={styles.enterpriseBar}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={containerVariants}
              >
                <motion.p variants={cardVariants}>
                  <strong>Need a team or enterprise plan?</strong> Contact us for a custom quote.
                </motion.p>
                <motion.div variants={cardVariants}>
                  <ButtonLink href="/contact" variant="brandLine" size="pricingSecondary">
                    Contact Sales
                  </ButtonLink>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </ScrollReveal>
  );
}
