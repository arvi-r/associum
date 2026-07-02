import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './Container';
import styles from './ProductAutomationSection.module.scss';
import dotsAsset from '../assets/product/automation-stage-dots.svg?url';
import memoIcon from '../assets/product/automation-memo.svg?url';
import deliverableIcon from '../assets/product/automation-deliverable.svg?url';
import ringOuter from '../assets/product/automation-ring-outer.svg?url';
import ringMiddle from '../assets/product/automation-ring-middle.svg?url';
import ringInner from '../assets/product/automation-ring-inner.svg?url';
import logoAsset from '../assets/product/automation-logo-core.svg?url';

const automationBullets = [
  'IC memos, consulting deliverables, research briefs, and compliance reports completed at professional standard in your templates.',
  'Build your own templates or apply industry standard templates from our library across finance, consulting, accounting, and legal.',
  'Add your professional insights into templates and the final reports directly using powerful, interactive AI with no technical skill required.',
  'Ready to send, export in standard formats and share via link.',
];

const collaborationBullets = [
  'Retrieves prior analysis, precedents, and firm context from past engagements in seconds.',
  'Collaborate on research, reports, and analytical tasks in real time.',
  'Keeps the right information in the right hands. Set granular access controls so the right people see the right information.',
  'Build on everything your team has done. No starting from zero.',
];

const deliverables = [
  { title: 'IC Memo', subtitle: 'Investment committee ready', icon: memoIcon, top: '72px', width: '410px', faded: true },
  { title: 'IC Memo', subtitle: 'Investment committee ready', icon: memoIcon, top: '-12px', width: '370px', ghost: true },
  { title: 'Consulting deliverable', subtitle: 'Client-formatted', icon: deliverableIcon, top: '163px', width: '457px', active: true },
  { title: 'Research brief', subtitle: 'With citations', icon: memoIcon, top: '261px', width: '410px', faded: true },
  { title: 'IC Memo', subtitle: 'Investment committee ready', icon: memoIcon, top: '352px', width: '370px', ghost: true },
];

const people = [
  { top: '113px', left: '21px', size: '60px', color: '#b96a45' },
  { top: '319px', left: '88px', size: '43px', color: '#8ea7b8' },
  { top: '40px', left: '349px', size: '57px', color: '#d09061' },
  { top: '312px', left: '341px', size: '37px', color: '#e4b146' },
  { top: '40px', left: '81px', size: '30px', color: '#e9d7d0' },
  { top: '105px', left: '443px', size: '33px', color: '#e4d3d7' },
  { top: '204px', left: '116px', size: '47px', color: '#516d7f' },
  { top: '58px', left: '184px', size: '47px', color: '#8aa48a' },
  { top: '194px', left: '361px', size: '48px', color: '#e6c1b8' },
];

function Checklist({ items }) {
  return (
    <ul className={styles.checklist}>
      {items.map((item) => (
        <li key={item}>
          <span className={styles.check}>✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DeliverablePreview() {
  return (
    <div className={styles.previewStage}>
      <div className={styles.stageDots}>
        <img src={dotsAsset} alt="" />
      </div>

      {deliverables.map((card, idx) => (
        <div
          key={`${card.title}-${idx}`}
          className={`${styles.deliverableCard} ${card.active ? styles.deliverableCardActive : ''} ${
            card.ghost ? styles.deliverableCardGhost : ''
          } ${card.faded ? styles.deliverableCardFaded : ''}`}
          style={{ top: card.top, width: card.width }}
        >
          <div className={styles.deliverableLeft}>
            <div className={styles.deliverableIconWrap}>
              <img src={card.icon} alt="" />
            </div>
            <strong>{card.title}</strong>
          </div>
          <span>{card.subtitle}</span>
        </div>
      ))}
    </div>
  );
}

function KnowledgePreview() {
  return (
    <div className={styles.knowledgeStage}>
      <div className={styles.stageDots}>
        <img src={dotsAsset} alt="" />
      </div>

      <div className={styles.ringWrap}>
        <img src={ringOuter} alt="" className={styles.ringOuter} />
        <img src={ringMiddle} alt="" className={styles.ringMiddle} />
        <img src={ringInner} alt="" className={styles.ringInner} />
      </div>

      <div className={styles.logoCore}>
        <img src={logoAsset} alt="" />
      </div>

      <div className={styles.peopleCloud}>
        {people.map((person, index) => (
          <span
            key={`${index}`}
            className={styles.person}
            style={{ top: person.top, left: person.left, width: person.size, height: person.size, background: person.color }}
          />
        ))}
      </div>
    </div>
  );
}

export function ProductAutomationSection({ activeTab }) {
  if (activeTab < 2) return null;

  return (
    <section className={styles.section} aria-label="Automation and collaboration">
      <Container>
        <div className={styles.cards}>
          <AnimatePresence mode="wait">
            {activeTab === 2 && (
              <motion.article
                key="generation"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={styles.card}
              >
                <div className={styles.cardCopy}>
                  <h3>Report Generation & Automation</h3>
                  <p className={styles.cardIntro}>
                    From analysis to finished document. Select a template or describe what you need,
                    your deliverable at professional standard, ready to review and sign off.
                  </p>
                  <Checklist items={automationBullets} />
                </div>
                <DeliverablePreview />
              </motion.article>
            )}

            {activeTab === 3 && (
              <motion.article
                key="collaboration"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={styles.card}
              >
                <KnowledgePreview />
                <div className={styles.cardCopy}>
                  <h3>Collaboration & Shared Knowledge Base</h3>
                  <p className={styles.cardIntro}>
                    Every document your team processes becomes shared knowledge. Collaborate on
                    research, reports, and analysis in real time, with access controls that ensure the
                    right people see the right information.
                  </p>
                  <Checklist items={collaborationBullets} />
                </div>
              </motion.article>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
