import React from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Container } from './Container';
import styles from './ProductWorkflowSection.module.scss';

// Workflow Stage PNGs
import workflowIntelligence from '../assets/product/workflow-intelligence.webp?url';
import workflowExecution from '../assets/product/workflow-execution.webp?url';
import workflowGeneration from '../assets/product/workflow-generation.webp?url';
import workflowCollaboration from '../assets/product/workflow-collaboration.webp?url';

const workflowStages = [
  {
    id: 'intelligence',
    tabLabel: 'Document Intelligence',
    title: 'Document Intelligence',
    description: 'Every document understood at scale, no switching between research tools, no manual review. Connected, cross-referenced, and ready to work from.',
    bullets: [
      'Upload large datasets, financial models, spreadsheets, PDFs, 10-Ks, contracts, and research papers. Associum indexes everything at scale.',
      'Access data in tables, clauses, and financial data with high fidelity.',
      'Stores every document in your private knowledge base, indexed, searchable, and queryable.',
      'Delivers direct answers with page-level citations across hundreds of documents — not summaries.',
    ],
    image: workflowIntelligence
  },
  {
    id: 'execution',
    tabLabel: 'Analytical Execution',
    title: 'Analytical Execution',
    description: 'Analysis built from your entire document set, without the manual work. No fragmented outputs, no rebuilding from scratch.',
    bullets: [
      'Run any research or business analysis task, qualitative or quantitative.',
      'Executed structured workflows with outputs in standard business formats using plain language.',
      'Build company profiles, financial models, and business analysis in a single task.',
      'Complete structured documents including DDQs, RFPs, and compliance questionnaires.',
      'Returns structured, sourced analytical output, not just a chatbot reply.',
    ],
    image: workflowExecution
  },
  {
    id: 'generation',
    tabLabel: 'Report Generation',
    title: 'Report Generation & Automation',
    description: 'From analysis to finished document. Select a template or describe what you need — your deliverable at professional standard, ready to review and sign off.',
    bullets: [
      'IC memos, consulting deliverables, research briefs, and compliance reports — completed at professional standard in your templates.',
      'Build your own templates or apply industry standard templates from our library across finance, consulting, accounting, and legal.',
      'Add your professional insights into templates and the final reports directly using powerful, interactive AI - no technical skill required.',
      'Ready to send - export in standard formats, share via link.',
    ],
    image: workflowGeneration
  },
  {
    id: 'collaboration',
    tabLabel: 'Team Collaboration',
    title: 'Collaboration & Shared Knowledge Base',
    description: 'Every document your team processes becomes shared knowledge. Collaborate on research, reports, and analysis in real time, with access controls that ensure the right people see the right information.',
    bullets: [
      'Retrieves prior analysis, precedents, and firm context from past engagements in seconds.',
      'Collaborate on research, reports, and analytical tasks in real time.',
      'Keeps the right information in the right hands. Set access controls so the right people see the right information.',
      'Build on everything your team has done. No starting from zero.',
    ],
    image: workflowCollaboration
  }
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

export function ProductWorkflowSection() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const sectionRef = React.useRef(null);
  const tabsContainerRef = React.useRef(null);
  const tabRefs = React.useRef([]);
  const isInView = useInView(sectionRef, { amount: 0.5 });
  const isFirstRender = React.useRef(true);

  // Auto-play interval
  React.useEffect(() => {
    if (isPaused || !isInView) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % workflowStages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, isInView]);

  // Scroll active tab into view whenever it changes
  React.useEffect(() => {
    // Skip centering logic on initial mount to avoid forced reflows / layout thrashes
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const container = tabsContainerRef.current;
    const activeTabEl = tabRefs.current[activeTab];
    
    if (container && activeTabEl) {
      // Use a small timeout to ensure layout is ready
      const timer = setTimeout(() => {
        const containerWidth = container.clientWidth;
        const tabWidth = activeTabEl.clientWidth;
        const tabOffsetLeft = activeTabEl.offsetLeft;
        
        // Calculate the exact scroll position to center the tab
        const targetScroll = tabOffsetLeft - (containerWidth / 2) + (tabWidth / 2);
        
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);


  const handleTabClick = (index) => {
    setActiveTab(index);
    setIsPaused(true); // Pause auto-play after manual interaction
  };

  return (
    <section className={styles.section} aria-labelledby="workflow-title" ref={sectionRef}>
      <Container>
        <div className={styles.header}>
          <h2 id="workflow-title">One Workflow. Every Stage. From Scope to Send.</h2>
        </div>
      </Container>

      <div className={styles.tabbedContainer}>
        <div className={styles.tabsContainer} ref={tabsContainerRef}>
          <div className={styles.tabsInner}>
            {workflowStages.map((stage, index) => (
              <button
                key={`tab-${stage.id}`}
                ref={(el) => (tabRefs.current[index] = el)}
                className={`${styles.tabButton} ${activeTab === index ? styles.tabButtonActive : ''}`}
                onClick={() => handleTabClick(index)}
                data-text={stage.tabLabel}
              >
                {stage.tabLabel}
                {activeTab === index && (
                  <motion.div
                    layoutId="activeWorkflowTab"
                    className={styles.activeIndicator}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.inner}>
          <Container>
            <div className={styles.cardWrapper}>
              <AnimatePresence mode="wait">
                <motion.article
                  key={workflowStages[activeTab].id}
                  className={styles.card}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={styles.cardCopy}>
                    <h3>{workflowStages[activeTab].title}</h3>
                    <p className={styles.cardIntro}>{workflowStages[activeTab].description}</p>
                    <Checklist items={workflowStages[activeTab].bullets} />
                  </div>

                  <div className={styles.previewContainer}>
                    <motion.img 
                      key={workflowStages[activeTab].image}
                      src={workflowStages[activeTab].image} 
                      alt={workflowStages[activeTab].title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className={styles.workflowImage}
                    />
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
