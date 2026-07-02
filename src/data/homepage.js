export const homePageSections = {
  hero: {
    kicker: 'Built for analysts, consultants, and operators',
    title: 'Associum turns research and execution into a faster workflow.',
    body:
      'We will translate the Figma pages into reusable React components section by section, starting with the homepage and keeping the layout responsive from 360px upward.',
    primaryCta: 'Start Free',
    secondaryCta: 'View Pricing',
  },
  features: {
    title: 'What can you do with credits',
    description:
      'The homepage will be built around the same structure as the Figma file, but organized with reusable components so the later pages stay consistent.',
    items: [
      {
        title: 'Task execution',
        description:
          'A single request for research output, diligence checklists, and analytical work.',
        badge: '3 credits',
      },
      {
        title: 'Report generation',
        description:
          'Structured documents for briefs, market sizing, and compliance reports.',
        badge: '40 credits',
      },
      {
        title: 'File processing',
        description:
          'Upload and index documents so they are searchable across tasks.',
        badge: '1 credit / 50 pages',
      },
    ],
  },
  pricing: {
    title: 'Compare plans',
    description:
      'We will refine this section once we convert the remaining Figma frames into a working pricing layout.',
    plans: [
      {
        name: 'Free',
        price: '$0',
        summary: 'Good for exploring the product.',
        features: ['Starter access', 'Limited credits', 'Basic workspace'],
      },
      {
        name: 'Starter',
        price: '$49',
        summary: 'Best for individuals and small teams.',
        features: ['Seat based', 'Shared workspace', 'Priority support'],
        featured: true,
      },
      {
        name: 'Pro',
        price: '$199',
        summary: 'For teams that need more throughput.',
        features: ['Higher limits', 'Advanced access', 'Team controls'],
      },
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    description: 'This is a reusable accordion component we can extend later.',
    items: [
      {
        question: 'Which plan is right for me?',
        answer:
          'We will map the Figma answers into the final page once we reach the FAQ section.',
      },
      {
        question: 'Can I switch plans mid-month?',
        answer:
          'Yes, the component is already set up to support expand/collapse behavior.',
      },
      {
        question: 'Is my data private and secure?',
        answer: 'Security messaging will be added once we pull the exact copy from Figma.',
      },
    ],
  },
};
