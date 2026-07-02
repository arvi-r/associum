import React from 'react';
import { Container } from './Container';
import styles from './WhatAssociumDoesSection.module.scss';

import reportAutomationImage from '../assets/homepage/what-associum-does-report-automation.webp?url';
import quantitativeAnalysisImage from '../assets/homepage/what-associum-does-quantitative-analysis.webp?url';
import deepResearchImage from '../assets/homepage/what-associum-does-deep-research.webp?url';
import knowledgeBaseImage from '../assets/homepage/what-associum-does-knowledge-base.webp?url';

const cards = [
  {
    title: 'Quantitative Analysis',
    description:
      'Analyse data, build models, and produce structured outputs from raw inputs. One environment, no need to switch apps.',
    image: quantitativeAnalysisImage,
    background: '#ffffff',
    imageClassName: styles.quantitativeAnalysisImage,
  },
  {
    title: 'Deep Research',
    description:
      'Commission research across any topic. Get structured, accurate, cross-referenced theses — ready to sign off, not rebuild.',
    image: deepResearchImage,
    background: '#f8faf9',
    imageClassName: styles.deepResearchImage,
  },
  {
    title: 'Knowledge Base',
    description:
      'Every document you process becomes part of your private, searchable knowledge base. Surface prior analysis, precedents, and firm context from past engagements in seconds.',
    image: knowledgeBaseImage,
    background: '#fbfafa',
    imageClassName: styles.knowledgeBaseImage,
  },
  {
    title: 'Report Automation',
    description:
      "Generate IC memos, board packs, compliance reports, and client briefs using our templates or plain language prompt. Output to your firm's exact standard.",
    image: reportAutomationImage,
    background: '#fbfbfb',
    imageClassName: styles.reportAutomationImage,
  },
];

function Card({ title, description, image, background, imageClassName }) {
  return (
    <article className={styles.card} style={{ background }}>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className={`${styles.cardVisual} ${imageClassName}`}>
        <img src={image} alt="" />
      </div>
    </article>
  );
}

export function WhatAssociumDoesSection() {
  return (
    <section className={styles.section} aria-labelledby="what-associum-does-title">
      <Container>
        <div className={styles.header}>
          <div className={styles.eyebrowRow} data-reveal style={{ '--reveal-delay': '0.1s' }}>
            <p className={styles.eyebrow}>What Associum Does BETTER</p>
          </div>
          <div className={styles.titleBlock} data-reveal style={{ '--reveal-delay': '0.2s' }}>
            <h2 id="what-associum-does-title">The Quality Your Clients Expect. In Minutes, Not Hours.</h2>
          </div>
          <p className={styles.description} data-reveal style={{ '--reveal-delay': '0.3s' }}>
            From data to finished document - sourced, structured, and accurate. Delivered for your final review by Associum.
          </p>
        </div>

        <div className={styles.grid}>
          {cards.map((card, i) => (
            <div key={card.title} data-reveal style={{ '--reveal-delay': `${0.1 + i * 0.1}s` }}>
              <Card {...card} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
