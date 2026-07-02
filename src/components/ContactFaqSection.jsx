import React from 'react';
import { Container } from './Container';
import styles from './ContactFaqSection.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const faqItems = [
  {
    question: 'What does Associum do, and how is it different from a general AI tool?',
    answer:
      'Associum is a purpose-built AI platform for finance, consulting, accounting, and legal and compliance professionals. General AI tools assist your thinking at individual stages — drafting, summarising, brainstorming. Associum connects the full production workflow: data and research, analysis, document generation, and in-platform editing. You receive a near-final deliverable structured to professional standard, which you can then refine and improve by interacting directly with our AI and the draft deliverable in a the same app.',
  },
  {
    question: 'Who is Associum built for?',
    answer:
      'Associum is built for professionals whose work product is a finished document: investment memos, client decks, board packs, management commentary, audit work, compliance reports, board minutes, and regulatory submissions. Our four primary verticals are finance (buyside, sellside, advisory), consulting, accounting (internal finance and professional services), and legal and compliance (in-house, corporate, and fund administration).',
  },
  {
    question: 'What kinds of documents can Associum produce?',
    answer:
      'Associum generates the deliverables that define each vertical — investment memos and pitch books, client decks and engagement deliverables, board packs and management accounts commentary, audit workpapers, compliance reports, regulatory submissions, fund documentation, and policy documents. Each output is calibrated to the structure, format, and tone the professional audience expects, and is ready for review rather than re-formatting. Output formats include PDF, Powerpoint, Excel, Word, HTML, and Markdown.',
  },
  {
    question: 'Does Associum replace my professional judgement?',
    answer:
      'No. Associum handles the production work — sourcing, synthesis, structure, and formatting — and brings the document to a near-final state. Your judgement is applied at the review stage, where in-platform creative controls let you edit, refine, and personalise every element before the document leaves your hands. The last word is always yours.',
  },
  {
    question: 'How is my data handled and stored?',
    answer:
      'Your data is treated as confidential professional information. We do not use customer content to train foundation models, data is encrypted in transit and at rest, and access is restricted to the systems required to deliver the service. Our published data policy sets out, in plain language, what we collect, how it is processed, and how long it is retained.',
  },
  {
    question: 'Is Associum suitable for regulated environments?',
    answer:
      'Associum is designed with regulated work in mind. Associum is SOC2 Type II and ISO 27001certified. Privacy and accuracy are a baseline requirement rather than a feature: data governance, audit trails, and human review at the editing stage are core to how the platform operates. We continue to invest in the security and compliance credentials our finance, legal, and compliance customers require, and surface those credentials during enterprise evaluation.',
  },
  {
    question: 'Can my firm sign a Data Processing Agreement (DPA)?',
    answer:
      'Yes. A standard DPA is available for enterprise customers, and our team can review firm-specific terms where required. Contact us through the form above and request “DPA” in your message, and we will route you to the right person.',
  },
  {
    question: 'How do I get started? Is there a free version?',
    answer:
      'Yes. Associum offers a free tier so you can produce real deliverables in your own workflow before any decision to upgrade. Sign up with a work email at associum.ai. Users can produce finished output in just their first session.',
  },
  {
    question: 'What support is available, and how quickly will I hear back?',
    answer:
      'All users have access to in-product help and our knowledge base. Paid and enterprise customers have access to email support during business hours, with a one-business-day response target. Enterprise customers also receive a named point of contact for onboarding, rollout, and ongoing questions.',
  },
  {
    question: 'Can my team or firm roll out Associum together?',
    answer:
      'Yes. Teams and firms can be set up with shared workspaces, role-based access, and a single point of billing. We work with engagement leads and operations teams on rollout sequencing, from initial pilot through firm-wide deployment. Get in touch using the form above and select “Team or firm rollout” as the topic.',
  },
];

export function ContactFaqSection() {
  const [openIndex, setOpenIndex] = React.useState(-1);

  return (
    <section className={styles.section} aria-labelledby="contact-faq-title">
      <Container>
        <motion.div
          className={styles.inner}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 id="contact-faq-title">In case you missed anything</h2>

          </motion.div>

          <div className={styles.list}>
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div key={item.question} className={styles.item} variants={itemVariants}>
                  <button
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className={styles.question}>{item.question}</span>
                    <motion.span
                      className={styles.icon}
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      aria-hidden="true"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className={styles.answerWrap}
                      >
                        <div className={styles.answer}>{item.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        <motion.p className={styles.footer} variants={itemVariants}>
          Still have a question? Use the contact form above and we’ll be in touch within one business day.
        </motion.p>
      </Container>
    </section>
  );
}
