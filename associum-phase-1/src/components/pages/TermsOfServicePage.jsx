import React from 'react';
import { Container } from '../Container';
import styles from './TermsOfServicePage.module.scss';
import heroTexture from '../../assets/about/about-hero-texture.webp?url';
import heroGlow from '../../assets/about/about-hero-glow.webp?url';

const tableOfContents = [
  { id: '1-acceptance-of-terms', label: '1. Acceptance of Terms' },
  { id: '2-description-of-service', label: '2. Description of Service' },
  { id: '3-eligibility', label: '3. Eligibility' },
  { id: '4-account-registration', label: '4. Account Registration' },
  { id: '5-acceptable-use-policy', label: '5. Acceptable Use Policy' },
  { id: '6-prohibited-uses', label: '6. Prohibited Uses' },
  { id: '7-ai-specific-disclosures-and-limitations', label: '7. AI-Specific Disclosures and Limitations' },
  { id: '8-intellectual-property', label: '8. Intellectual Property' },
  { id: '9-user-content-and-data', label: '9. User Content and Data' },
  { id: '10-privacy-and-data-processing', label: '10. Privacy and Data Processing' },
  { id: '11-third-party-services-and-integrations', label: '11. Third-Party Services and Integrations' },
  { id: '12-fees-subscriptions-and-payment', label: '12. Fees, Subscriptions, and Payment' },
  { id: '13-disclaimer-of-warranties', label: '13. Disclaimer of Warranties' },
  { id: '14-limitation-of-liability', label: '14. Limitation of Liability' },
  { id: '15-indemnification', label: '15. Indemnification' },
  { id: '16-suspension-and-termination', label: '16. Suspension and Termination' },
  { id: '17-changes-to-the-service-and-these-terms', label: '17. Changes to the Service and These Terms' },
  { id: '18-dispute-resolution-and-arbitration', label: '18. Dispute Resolution and Arbitration' },
  { id: '19-governing-law', label: '19. Governing Law' },
  { id: '20-general-provisions', label: '20. General Provisions' },
  { id: '21-contact-us', label: '21. Contact Us' },
];

function BulletList({ items }) {
  return (
    <ul className={styles.bulletList}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ParagraphGroup({ paragraphs }) {
  return (
    <div className={styles.paragraphGroup}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function TocLink({ id, label }) {
  return (
    <a href={`#${id}`} className={styles.tocLink}>
      {label}
    </a>
  );
}

export function TermsOfServicePage() {
  return (
    <>
      <main>
        <section className={styles.hero} aria-labelledby="terms-title">
          <div className={styles.backdrop} aria-hidden="true">
            <div className={styles.baseGradient} />
            <div className={styles.textureWrap}>
              <img src={heroTexture} alt="" />
            </div>
            <img className={styles.glow} src={heroGlow} alt="" />
          </div>

          <Container>
            <div className={styles.heroInner}>
              <h1 id="terms-title" data-reveal>
                Terms of Service
              </h1>
              <div className={styles.heroDates} data-reveal style={{ '--reveal-delay': '0.15s' }}>
                <p>Effective Date: May 11, 2026</p>
                <p>Last Updated: May 11, 2026</p>
              </div>
              <p className={styles.heroSummary} data-reveal style={{ '--reveal-delay': '0.3s' }}>
                Please read these Terms of Service ("Terms") carefully before using the Associum
                application or any related services. By accessing or using Associum, you agree to
                be bound by these Terms. If you do not agree, do not use Associum.
              </p>
            </div>
          </Container>
        </section>

        <section className={styles.termsSection} aria-labelledby="terms-document-title">
          <Container>
            <div className={styles.termsLayout}>
              <aside className={styles.tocCard} data-reveal>
                <h2>Table of Contents</h2>
                <nav className={styles.tocList} aria-label="Terms of contents">
                  {tableOfContents.map((item) => (
                    <TocLink key={item.id} id={item.id} label={item.label} />
                  ))}
                </nav>
              </aside>

              <article className={styles.termsDocument} data-reveal style={{ '--reveal-delay': '0.15s' }}>
                <h2 id="terms-document-title" className={styles.documentTitle}>
                  Terms of Service
                </h2>

                <section className={styles.termsBlock} id="1-acceptance-of-terms">
                  <h3>1. Acceptance of Terms</h3>
                  <ParagraphGroup
                    paragraphs={[
                      'By creating an account, accessing, or otherwise using the Associum application, website, application programming interfaces (APIs), or any related products and services (collectively, the "Service"), you ("User," "you," or "your") acknowledge that you have read, understood, and agree to be legally bound by these Terms, our Privacy Policy, and any additional guidelines, policies, or terms incorporated herein by reference.',
                      'These Terms constitute a binding legal agreement between you and Associum, Inc. ("Associum," "we," "us," or "our"). If you are using the Service on behalf of an organization, business, or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms, and references to "you" shall include both you individually and that entity.',
                      'We reserve the right to update or modify these Terms at any time. Continued use of the Service following notice of any changes constitutes your acceptance of the revised Terms.',
                    ]}
                  />
                </section>

                <section className={styles.termsBlock} id="2-description-of-service">
                  <h3>2. Description of Service</h3>
                  <p>
                    Associum is an AI-powered research and document analysis application that
                    enables users to research, analyse, and extract insights from documents and
                    data using large language model (LLM) technology and related artificial
                    intelligence tools. The Service may include features such as:
                  </p>
                  <BulletList
                    items={[
                      'AI-assisted document reading, summarization, and analysis',
                      'Intelligent search and information retrieval across uploaded project files',
                      'Data analysis, financial modelling, and quantitative computation',
                      'AI-generated responses, reports, recommendations, and other outputs ("Outputs")',
                      'Integration with third-party data sources and web research tools',
                      'Collaboration and workspace management features',
                    ]}
                  />
                  <p>
                    The Service is provided for lawful business, research, and professional
                    purposes. Associum is not a licensed legal, financial, medical, or
                    professional advisory service. Outputs produced by the Service do not
                    constitute professional advice of any kind.
                  </p>
                </section>

                <section className={styles.termsBlock} id="3-eligibility">
                  <h3>3. Eligibility</h3>

                  <div className={styles.subBlock}>
                    <h4>3.1 Age Requirements</h4>
                    <p>
                      You must be at least <strong>18 years of age</strong> to use the Service. By
                      accessing or using Associum, you represent and warrant that you are 18 years
                      of age or older. If you are under 18, you may not use the Service under any
                      circumstances. We do not knowingly collect personal data from individuals
                      under the age of 18.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>3.2 Legal Capacity</h4>
                    <p>
                      You represent and warrant that: (a) you have the legal capacity to enter into
                      and be bound by these Terms in your jurisdiction; (b) your use of the Service
                      does not violate any applicable law, regulation, or rule; and (c) you have
                      not previously been suspended or removed from the Service.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>3.3 Geographic Restrictions</h4>
                    <p>
                      The Service is operated from and governed by the laws of <strong>[Jurisdiction]</strong>.
                      We make no representation that the Service is appropriate or available in all
                      locations. Access to the Service from territories where its content or use is
                      illegal is prohibited. You are responsible for compliance with local laws in
                      your jurisdiction.
                    </p>
                  </div>
                </section>

                <section className={styles.termsBlock} id="4-account-registration">
                  <h3>4. Account Registration</h3>

                  <div className={styles.subBlock}>
                    <h4>4.1 Account Creation</h4>
                    <p>
                      To access most features of the Service, you must register for an account. You
                      agree to provide accurate, current, and complete information during
                      registration and to keep your account information updated. You may not
                      impersonate any person or entity, or create accounts on behalf of others
                      without authorization.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>4.2 Account Security</h4>
                    <p>
                      You are solely responsible for maintaining the confidentiality of your
                      account credentials and for all activities that occur under your account. You
                      agree to:
                    </p>
                    <BulletList
                      items={[
                        'use a strong, unique password;',
                        'not share your login credentials with any third party;',
                        'notify us immediately at [security@associum.ai] if you suspect unauthorized access to or use of your account.',
                      ]}
                    />
                    <p>
                      Associum will not be liable for any loss or damage arising from your failure
                      to comply with this section.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>4.3 Account Ownership</h4>
                    <p>
                      If you create an account on behalf of an organization, that organization may
                      at any time assume control of the account. We may transfer account
                      administration to designated organizational representatives with reasonable
                      prior notice to you.
                    </p>
                  </div>
                </section>

                <section className={styles.termsBlock} id="5-acceptable-use-policy">
                  <h3>5. Acceptable Use Policy</h3>
                  <p>
                    You agree to use the Service only for lawful purposes and in a manner that does
                    not infringe the rights of, or restrict or inhibit the use and enjoyment of,
                    the Service by any third party. Acceptable use includes, but is not limited to:
                  </p>
                  <BulletList
                    items={[
                      'Conducting legitimate business, academic, or professional research',
                      'Analysing documents and datasets you own or are authorized to process',
                      'Generating summaries, reports, and analyses for internal business use',
                      'Using the Service in compliance with all applicable laws and regulations',
                      'Evaluating and verifying Outputs before relying on them for any consequential purpose',
                    ]}
                  />
                  <p>
                    You are responsible for the lawful sourcing, ownership, and processing of any
                    data, documents, or content you upload to or process through the Service.
                  </p>
                </section>

                <section className={styles.termsBlock} id="6-prohibited-uses">
                  <h3>6. Prohibited Uses</h3>

                  <div className={styles.subBlock}>
                    <h4>6.1 Harmful and Illegal Activities</h4>
                    <BulletList
                      items={[
                        'Violate any applicable local, national, or international law or regulation',
                        'Facilitate or promote terrorism, violent extremism, or mass-casualty events',
                        'Generate, distribute, or promote content that constitutes child sexual abuse material (CSAM) or any content that sexually exploits or endangers minors',
                        'Facilitate human trafficking, exploitation, or modern slavery',
                        'Engage in, plan, or promote any form of physical harm against any individual or group',
                        'Develop, acquire, or deploy biological, chemical, nuclear, radiological, or other weapons capable of mass harm',
                      ]}
                    />
                  </div>

                  <div className={styles.subBlock}>
                    <h4>6.2 Privacy and Surveillance Violations</h4>
                    <BulletList
                      items={[
                        'Build or contribute to facial recognition databases without the explicit, informed consent of data subjects',
                        'Conduct real-time remote biometric surveillance in public spaces',
                        'Infer sensitive personal attributes (e.g., political views, religion, health status, sexual orientation) from individuals without authorization',
                        'Track, monitor, or profile individuals without lawful basis and their knowledge',
                        'Reproduce, use, or impersonate the likeness, voice, or image of any person without their explicit consent',
                      ]}
                    />
                  </div>

                  <div className={styles.subBlock}>
                    <h4>6.3 Misinformation and Deception</h4>
                    <BulletList
                      items={[
                        'Create, publish, or distribute deliberate misinformation, disinformation, or fabricated news',
                        'Generate deepfakes or synthetic media of real individuals without consent',
                        'Impersonate any person, organization, or government entity',
                        'Engage in coordinated inauthentic behavior, astroturfing, or manipulation of public opinion',
                        'Create spam, phishing content, or materials designed to defraud or deceive',
                      ]}
                    />
                  </div>

                  <div className={styles.subBlock}>
                    <h4>6.4 Harassment and Harmful Content</h4>
                    <BulletList
                      items={[
                        'Harass, bully, threaten, intimidate, or defame any individual or group',
                        'Promote, glorify, or trivialize self-harm, suicide, or eating disorders',
                        'Generate hateful content targeting individuals or groups based on race, ethnicity, religion, gender, sexual orientation, disability, national origin, or other protected characteristics',
                        'Engage in or promote non-consensual intimate content or sexual violence',
                      ]}
                    />
                  </div>

                  <div className={styles.subBlock}>
                    <h4>6.5 High-Stakes Automated Decisions Without Human Oversight</h4>
                    <p>
                      Use AI-generated Outputs as the <strong>sole basis</strong> without
                      appropriate human review for making or automating consequential decisions
                      affecting individuals in areas including:
                    </p>
                    <BulletList
                      items={[
                        'Credit or financial lending decisions',
                        'Employment hiring, promotion, or termination',
                        'Housing, tenancy, or rental approval',
                        'Insurance underwriting or claims adjudication',
                        'Healthcare diagnosis, treatment, or triage',
                        'Educational enrollment, grading, or evaluation',
                        'Legal determinations, law enforcement profiling, or immigration matters',
                        'National security or intelligence assessments',
                      ]}
                    />
                  </div>

                  <div className={styles.subBlock}>
                    <h4>6.6 System and Security Violations</h4>
                    <BulletList
                      items={[
                        "Attempt to probe, scan, exploit, or test the vulnerability of Associum's systems without explicit written authorization",
                        'Circumvent, disable, or interfere with security features, access controls, rate limits, or content filters',
                        'Reverse-engineer, decompile, disassemble, or otherwise attempt to discover the source code, underlying models, algorithms, or architecture of the Service (except as expressly permitted by applicable law)',
                        'Introduce malware, ransomware, viruses, Trojan horses, or any malicious code into the Service',
                        'Use automated bots, scrapers, crawlers, or other automated tools to access or extract data from the Service without our prior written consent',
                      ]}
                    />
                  </div>

                  <div className={styles.subBlock}>
                    <h4>6.7 Intellectual Property Infringement</h4>
                    <BulletList
                      items={[
                        "Upload or process content that infringes any third party's copyright, trademark, trade secret, patent, or other intellectual property rights",
                        'Use Outputs to train, fine-tune, or otherwise develop competing AI models, products, or services without our express written consent',
                      ]}
                    />
                  </div>

                  <div className={styles.subBlock}>
                    <h4>6.8 Regulated Sectors Without Compliance</h4>
                    <BulletList
                      items={[
                        'Process Protected Health Information (PHI) subject to HIPAA, HITECH, or equivalent legislation without executing a Business Associate Agreement (BAA) or Healthcare Addendum with Associum',
                        'Process personal data subject to GDPR, CCPA, or equivalent data protection legislation without executing a Data Processing Agreement (DPA) with Associum',
                      ]}
                    />
                  </div>
                </section>

                <section className={styles.termsBlock} id="7-ai-specific-disclosures-and-limitations">
                  <h3>7. AI-Specific Disclosures and Limitations</h3>

                  <div className={styles.subBlock}>
                    <h4>7.1 Nature of AI Outputs</h4>
                    <p>
                      Associum uses large language models and other artificial intelligence
                      technologies that are <strong>probabilistic</strong> in nature. By using the
                      Service, you acknowledge and agree that:
                    </p>
                    <BulletList
                      items={[
                        'Outputs may be inaccurate, incomplete, outdated, or misleading. AI-generated content can contain factual errors, commonly known as "hallucinations," whereby the model generates plausible-sounding but incorrect information.',
                        'Outputs are not unique. Due to the probabilistic nature of AI models, other users may receive the same or similar Outputs to yours.',
                        'Outputs do not constitute professional advice. No Output generated by the Service should be construed as legal, financial, medical, tax, investment, regulatory, or other professional advice. Always consult a qualified professional before making decisions in these areas.',
                        'Outputs must be independently verified. You are solely responsible for evaluating the accuracy, appropriateness, and fitness of any Output for your intended use case, and for conducting appropriate human review prior to relying on any Output for any consequential purpose.',
                      ]}
                    />
                  </div>

                  <div className={styles.subBlock}>
                    <h4>7.2 No Reliance for High-Stakes Use</h4>
                    <p>
                      You expressly agree that you will <strong>not</strong> use any Output as the
                      sole or primary basis for any decision that could have a material legal,
                      financial, medical, safety, or other significant impact on any individual,
                      including decisions relating to employment, credit, housing, insurance,
                      healthcare, education, law enforcement, or legal proceedings.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>7.3 Rapid Technological Evolution</h4>
                    <p>
                      The AI and machine learning fields evolve rapidly. Associum continually works
                      to improve the accuracy, safety, and reliability of its Service; however, we
                      make no guarantee that Outputs will meet any particular standard of quality,
                      accuracy, or suitability at any given time.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>7.4 Model Limitations and Bias</h4>
                    <p>
                      AI models may reflect biases present in training data and may perform
                      inconsistently across languages, regions, subject areas, or demographic
                      groups. You agree to evaluate Outputs with this limitation in mind and to not
                      rely on the Service in contexts where such biases could cause material harm.
                    </p>
                  </div>
                </section>

                <section className={styles.termsBlock} id="8-intellectual-property">
                  <h3>8. Intellectual Property</h3>

                  <div className={styles.subBlock}>
                    <h4>8.1 Associum&apos;s Intellectual Property</h4>
                    <p>
                      The Service including its software, models, algorithms, interface design,
                      trademarks, trade names, logos, and documentation is owned by Associum, Inc.
                      and protected by applicable intellectual property laws. Nothing in these
                      Terms transfers any right, title, or interest in our intellectual property to
                      you. You receive only a limited, non-exclusive, non-transferable, revocable
                      license to use the Service as expressly permitted by these Terms.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>8.2 Your Inputs</h4>
                    <p>
                      You retain all ownership rights in the documents, data, prompts, and other
                      content you upload or submit to the Service ("Inputs"). By submitting Inputs,
                      you grant Associum a limited, worldwide, royalty-free license to process your
                      Inputs solely as necessary to operate, deliver, and improve the Service in
                      accordance with these Terms and our Privacy Policy.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>8.3 Your Outputs</h4>
                    <p>
                      Subject to your compliance with these Terms, Associum assigns to you all of
                      its right, title, and interest in Outputs generated specifically from your
                      Inputs. This assignment does not extend to: (a) Outputs or portions thereof
                      generated for other users; (b) pre-existing Associum intellectual property
                      incorporated into Outputs; or (c) third-party content returned as part of an
                      Output (e.g., publicly available information retrieved via web search
                      integrations).
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>8.4 Feedback</h4>
                    <p>
                      If you provide Associum with feedback, suggestions, ideas, or other input
                      about the Service ("Feedback"), you grant Associum an irrevocable,
                      perpetual, worldwide, royalty-free license to use such Feedback for any
                      purpose, including improving the Service, without any obligation of
                      compensation, attribution, or confidentiality to you.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>8.5 Prohibition on Competitive Use of Outputs</h4>
                    <p>
                      You may not use Outputs to train, benchmark, fine-tune, or otherwise develop
                      any AI or machine learning model, product, or service that competes with
                      Associum without our prior written consent.
                    </p>
                  </div>
                </section>

                <section className={styles.termsBlock} id="9-user-content-and-data">
                  <h3>9. User Content and Data</h3>

                  <div className={styles.subBlock}>
                    <h4>9.1 Your Responsibility for Content</h4>
                    <p>
                      You are solely responsible for all Inputs you submit to the Service. You
                      represent and warrant that: (a) you own or have the necessary rights,
                      licenses, and permissions to submit your Inputs; (b) your Inputs do not
                      infringe the intellectual property rights, privacy rights, or other rights of
                      any third party; and (c) your Inputs comply with all applicable laws.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>9.2 Content Standards</h4>
                    <p>
                      You agree not to upload or submit content that is unlawful, defamatory,
                      harassing, obscene, invasive of another&apos;s privacy, or otherwise
                      objectionable, as determined by Associum in its sole discretion.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>9.3 No Obligation to Retain</h4>
                    <p>
                      Associum has no obligation to store, maintain, or back up your Inputs or
                      Outputs. We recommend maintaining independent copies of any material you
                      submit to or receive from the Service.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>9.4 Model Training</h4>
                    <p>
                      <strong>
                        Associum will not use your Inputs or Outputs to train or improve its AI
                        models without your explicit, affirmative opt-in consent.
                      </strong>{' '}
                      This applies regardless of your subscription tier. You may manage your
                      training data preferences at any time through your account settings.
                      Enterprise customers may execute a Data Processing Agreement that provides
                      additional contractual protections.
                    </p>
                  </div>
                </section>

                <section className={styles.termsBlock} id="10-privacy-and-data-processing">
                  <h3>10. Privacy and Data Processing</h3>
                  <p>
                    Your use of the Service is subject to our <strong>Privacy Policy</strong>,
                    which is incorporated into these Terms by reference. Our Privacy Policy
                    describes how we collect, use, store, and share your personal data and how you
                    may exercise your data rights.
                  </p>

                  <div className={styles.subBlock}>
                    <h4>10.1 Data Protection Legislation</h4>
                    <p>
                      If you are located in the European Economic Area (EEA), Switzerland, or the
                      United Kingdom, our processing of your personal data is governed by the
                      General Data Protection Regulation (GDPR) and applicable national
                      implementing legislation. If you are located in California, our processing is
                      subject to the California Consumer Privacy Act (CCPA/CPRA).
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>10.2 Data Processing Agreement</h4>
                    <p>
                      Customers who process personal data of third parties through the Service
                      (e.g., by uploading documents containing personal data of employees, clients,
                      or patients) are required to execute a <strong>Data Processing Agreement
                      (DPA)</strong> with Associum, which designates Associum as a Data Processor
                      and the customer as the Data Controller. Contact <strong>[legal@associum.ai]</strong>{' '}
                      to execute a DPA.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>10.3 HIPAA Compliance</h4>
                    <p>
                      Customers who are covered entities or business associates under HIPAA must
                      not process <strong>Protected Health Information (PHI)</strong> through the
                      Service unless a <strong>Business Associate Agreement (BAA)</strong> or
                      Healthcare Addendum has been signed with Associum. Contact{' '}
                      <strong>[compliance@associum.ai]</strong> to execute a BAA. Processing PHI
                      without an executed BAA is a material breach of these Terms.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>10.4 Data Retention and Deletion</h4>
                    <p>
                      We retain your personal data and account information for as long as your
                      account is active or as necessary to provide the Service, comply with legal
                      obligations, resolve disputes, and enforce our agreements. Upon account
                      deletion or written request, we will delete your personal data in accordance
                      with our Privacy Policy, except where retention is required by applicable
                      law.
                    </p>
                  </div>
                </section>

                <section className={styles.termsBlock} id="11-third-party-services-and-integrations">
                  <h3>11. Third-Party Services and Integrations</h3>

                  <div className={styles.subBlock}>
                    <h4>11.1 Third-Party Integrations</h4>
                    <p>
                      The Service may include integrations with, or links to, third-party
                      applications, data sources, APIs, and websites ("Third-Party Services").
                      Associum does not control and is not responsible for the content, privacy
                      practices, or accuracy of any Third-Party Services. Your use of Third-Party
                      Services is governed solely by the terms and privacy policies of those third
                      parties.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>11.2 No Endorsement</h4>
                    <p>
                      The inclusion of any Third-Party Service in the Associum platform does not
                      constitute Associum&apos;s endorsement or recommendation of that service.
                      Associum expressly disclaims all liability arising from your use of
                      Third-Party Services.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>11.3 Third-Party Outputs</h4>
                    <p>
                      Content retrieved or generated through Third-Party Services ("Third-Party
                      Output") is provided "as is." Associum makes no representations or
                      warranties regarding the accuracy, completeness, or reliability of Third-Party
                      Output.
                    </p>
                  </div>
                </section>

                <section className={styles.termsBlock} id="12-fees-subscriptions-and-payment">
                  <h3>12. Fees, Subscriptions, and Payment</h3>

                  <div className={styles.subBlock}>
                    <h4>12.1 Subscription Plans</h4>
                    <p>
                      Access to certain features of the Service requires a paid subscription.
                      Details of available subscription plans, pricing, and included features are
                      available at <strong>[associum.ai/pricing]</strong>. All fees are stated in
                      US Dollars unless otherwise specified.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>12.2 Billing and Renewal</h4>
                    <p>
                      Subscriptions are billed on a recurring basis (monthly or annually,
                      depending on the plan selected) and will automatically renew at the end of
                      each billing cycle unless you cancel prior to the renewal date. You
                      authorize Associum to charge your payment method for all applicable fees,
                      including upon renewal.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>12.3 Price Changes</h4>
                    <p>
                      Associum may change subscription prices at any time. We will provide you
                      with at least <strong>30 days&apos; prior written notice</strong> of any
                      price increase. Price increases will take effect on your next renewal date,
                      giving you the opportunity to cancel before the increase takes effect.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>12.4 Non-Refundable Fees</h4>
                    <p>
                      All fees paid to Associum are <strong>non-refundable</strong>, except as
                      required by applicable law or expressly stated otherwise in a written
                      agreement. Partial billing periods are not refunded upon cancellation.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>12.5 Taxes</h4>
                    <p>
                      You are responsible for all applicable taxes, levies, and duties associated
                      with your use of the Service, excluding taxes based on Associum&apos;s net
                      income. If Associum is required to collect taxes, they will be added to your
                      invoice.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>12.6 Late Payment</h4>
                    <p>
                      If your payment method fails or your account is past due, Associum reserves
                      the right to suspend or terminate your access to the Service. You remain
                      liable for all outstanding amounts.
                    </p>
                  </div>
                </section>

                <section className={styles.termsBlock} id="13-disclaimer-of-warranties">
                  <h3>13. Disclaimer of Warranties</h3>
                  <div className={styles.callout}>
                    <p>
                      TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE AND ALL
                      OUTPUTS ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY
                      KIND, EXPRESS OR IMPLIED. ASSOCIUM AND ITS AFFILIATES, LICENSORS, AND
                      SERVICE PROVIDERS EXPRESSLY DISCLAIM ALL WARRANTIES, INCLUDING WITHOUT
                      LIMITATION:
                    </p>
                    <BulletList
                      items={[
                        'WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, SATISFACTORY QUALITY, NON-INFRINGEMENT, AND QUIET ENJOYMENT',
                        'ANY WARRANTY THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS',
                        'ANY WARRANTY REGARDING THE ACCURACY, COMPLETENESS, RELIABILITY, TIMELINESS, OR QUALITY OF ANY OUTPUT',
                        'ANY WARRANTY THAT OUTPUTS WILL MEET YOUR SPECIFIC REQUIREMENTS OR EXPECTATIONS',
                        'ANY WARRANTY THAT DEFECTS IN THE SERVICE WILL BE CORRECTED',
                      ]}
                    />
                    <p>
                      No advice or information, whether oral or written, obtained from Associum or
                      through the Service, will create any warranty not expressly stated in these
                      Terms.
                    </p>
                    <p>
                      Some jurisdictions do not allow the exclusion of implied warranties. To the
                      extent such warranties cannot be excluded under applicable law, they are
                      limited to the minimum scope and shortest duration permitted.
                    </p>
                  </div>
                </section>

                <section className={styles.termsBlock} id="14-limitation-of-liability">
                  <h3>14. Limitation of Liability</h3>

                  <div className={styles.subBlock}>
                    <h4>14.1 Exclusion of Consequential Damages</h4>
                    <div className={styles.callout}>
                      <p>
                        TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
                        ASSOCIUM, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS,
                        LICENSORS, OR SERVICE PROVIDERS BE LIABLE TO YOU FOR ANY INDIRECT,
                        INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES,
                        INCLUDING WITHOUT LIMITATION:
                      </p>
                      <BulletList
                        items={[
                          'LOSS OF PROFITS, REVENUE, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL',
                          'COST OF SUBSTITUTE SERVICES OR PROCUREMENT',
                          'LOSS ARISING FROM RELIANCE ON AI-GENERATED OUTPUTS',
                          'DAMAGES ARISING FROM UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA',
                        ]}
                      />
                      <p>
                        EVEN IF ASSOCIUM HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND
                        EVEN IF A REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
                      </p>
                    </div>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>14.2 Liability Cap</h4>
                    <p>
                      <strong>
                        TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ASSOCIUM&apos;S TOTAL
                        CUMULATIVE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO
                        THESE TERMS OR THE SERVICE WHETHER IN CONTRACT, TORT (INCLUDING
                        NEGLIGENCE), STRICT LIABILITY, OR OTHERWISE SHALL NOT EXCEED THE GREATER
                        OF: (A) THE TOTAL FEES PAID BY YOU TO ASSOCIUM IN THE TWELVE (12) MONTHS
                        IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM; OR (B) ONE
                        HUNDRED US DOLLARS (USD $100).
                      </strong>
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>14.3 Exceptions</h4>
                    <p>
                      Nothing in these Terms shall limit or exclude liability for: (a) death or
                      personal injury caused by Associum&apos;s gross negligence or wilful
                      misconduct; (b) fraud or fraudulent misrepresentation; or (c) any liability
                      that cannot be excluded or limited under applicable law.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>14.4 AI Output Reliance</h4>
                    <p>
                      In particular, and without limiting the foregoing, Associum shall not be
                      liable for any loss or damage arising from your reliance on AI-generated
                      Outputs for any legal, financial, medical, employment, or other professional
                      or high-stakes decision.
                    </p>
                  </div>
                </section>

                <section className={styles.termsBlock} id="15-indemnification">
                  <h3>15. Indemnification</h3>
                  <p>
                    You agree to defend, indemnify, and hold harmless Associum and its affiliates,
                    directors, officers, employees, agents, licensors, and service providers
                    (collectively, "Associum Parties") from and against any and all claims,
                    damages, liabilities, losses, costs, and expenses (including reasonable
                    attorneys&apos; fees) arising out of or relating to:
                  </p>
                  <BulletList
                    items={[
                      '(a) your use of or access to the Service;',
                      '(b) your violation of these Terms or any applicable law or regulation;',
                      '(c) your violation of any third-party right, including intellectual property rights, privacy rights, or confidentiality obligations;',
                      '(d) any content or data you submit to the Service, including claims that such content infringes or misappropriates third-party rights;',
                      '(e) your gross negligence or wilful misconduct; or',
                      '(f) any dispute between you and another user of the Service.',
                    ]}
                  />
                  <p>
                    Associum reserves the right, at its own expense, to assume exclusive control
                    of any matter subject to indemnification by you. You agree to cooperate with
                    Associum&apos;s defense of any such claims.
                  </p>
                </section>

                <section className={styles.termsBlock} id="16-suspension-and-termination">
                  <h3>16. Suspension and Termination</h3>

                  <div className={styles.subBlock}>
                    <h4>16.1 Termination by You</h4>
                    <p>
                      You may terminate your account at any time by contacting{' '}
                      <strong>[support@associum.ai]</strong> or through your account settings.
                      Termination does not entitle you to any refund of prepaid fees.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>16.2 Termination or Suspension by Associum</h4>
                    <p>
                      Associum reserves the right to immediately suspend or permanently terminate
                      your access to the Service, with or without prior notice, if we determine in
                      our reasonable discretion that:
                    </p>
                    <BulletList
                      items={[
                        '(a) you have breached these Terms or our Acceptable Use Policy;',
                        '(b) your use of the Service poses a risk of harm to Associum, other users, third parties, or the public;',
                        '(c) suspension or termination is required to comply with applicable law or a valid legal order; or',
                        '(d) your account has been inactive for more than twelve (12) consecutive months and you do not hold a paid subscription.',
                      ]}
                    />
                  </div>

                  <div className={styles.subBlock}>
                    <h4>16.3 Appeal Process</h4>
                    <p>
                      If you believe your account has been suspended or terminated in error, you
                      may submit an appeal by contacting our support team at{' '}
                      <strong>[support@associum.ai]</strong> with a description of why you believe
                      the action was taken in error. We will review your appeal and respond within
                      a reasonable time. Appeal decisions are final.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>16.4 Effect of Termination</h4>
                    <p>
                      Upon termination: (a) your license to use the Service immediately ceases;
                      (b) you must cease all use of the Service; and (c) provisions of these Terms
                      that by their nature should survive termination including intellectual
                      property provisions, disclaimers, limitation of liability, indemnification,
                      dispute resolution, and general provisions shall survive.
                    </p>
                  </div>
                </section>

                <section className={styles.termsBlock} id="17-changes-to-the-service-and-these-terms">
                  <h3>17. Changes to the Service and These Terms</h3>

                  <div className={styles.subBlock}>
                    <h4>17.1 Service Changes</h4>
                    <p>
                      Associum reserves the right to modify, update, suspend, or discontinue the
                      Service (or any feature thereof) at any time, with or without notice. If a
                      modification results in a <strong>material reduction</strong> in the core
                      functionality of your paid subscription, Associum will provide you with at
                      least <strong>30 days&apos; prior written notice</strong>, and you may elect
                      to terminate your subscription and receive a pro-rata refund of prepaid fees
                      for the unused period.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>17.2 Changes to Terms</h4>
                    <p>
                      Associum may update these Terms at any time. If we make material changes, we
                      will notify you by email, in-app notification, or by prominently posting a
                      notice in the Service at least <strong>15 days</strong> before the changes
                      take effect. Your continued use of the Service after changes take effect
                      constitutes your binding acceptance of the revised Terms. If you do not agree
                      to the revised Terms, you must discontinue use of the Service before the
                      effective date.
                    </p>
                  </div>
                </section>

                <section className={styles.termsBlock} id="18-dispute-resolution-and-arbitration">
                  <h3>18. Dispute Resolution and Arbitration</h3>

                  <div className={styles.subBlock}>
                    <h4>18.1 Informal Resolution</h4>
                    <p>
                      Before initiating any formal dispute proceeding, you agree to first contact
                      Associum at <strong>[legal@associum.ai]</strong> and provide a written
                      description of the dispute, the relevant facts, and the relief you seek. We
                      will attempt to resolve the dispute informally within{' '}
                      <strong>30 days</strong> of receipt. Either party may proceed to formal
                      proceedings if the dispute is not resolved within that period.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>18.2 Binding Arbitration</h4>
                    <p>
                      <strong>
                        IF YOU ARE LOCATED IN THE UNITED STATES, ANY DISPUTE, CLAIM, OR
                        CONTROVERSY ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE THAT
                        CANNOT BE RESOLVED INFORMALLY SHALL BE SUBMITTED TO FINAL AND BINDING
                        ARBITRATION
                      </strong>{' '}
                      under the rules of the <strong>American Arbitration Association (AAA)</strong>{' '}
                      Commercial Arbitration Rules, before a single arbitrator. The arbitration
                      will be conducted in the English language. Judgment on the arbitration award
                      may be entered in any court of competent jurisdiction.
                    </p>
                    <p>
                      <strong>EXCEPTIONS:</strong> Either party may seek emergency injunctive or
                      other equitable relief in a court of competent jurisdiction to prevent
                      irreparable harm pending arbitration. Claims for intellectual property
                      infringement may be brought in court.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>18.3 Class Action Waiver</h4>
                    <p>
                      <strong>
                        TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU WAIVE YOUR RIGHT TO
                        BRING OR PARTICIPATE IN ANY CLASS, COLLECTIVE, REPRESENTATIVE, OR PRIVATE
                        ATTORNEY GENERAL ACTION AGAINST ASSOCIUM. ALL DISPUTES MUST BE BROUGHT IN
                        YOUR INDIVIDUAL CAPACITY ONLY.
                      </strong>
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>18.4 Time Limitation on Claims</h4>
                    <p>
                      Any claim arising out of or related to these Terms or the Service must be
                      brought within <strong>one (1) year</strong> of the date the claim arose.
                      Claims not brought within this period are permanently barred.
                    </p>
                  </div>
                </section>

                <section className={styles.termsBlock} id="19-governing-law">
                  <h3>19. Governing Law</h3>
                  <p>
                    These Terms and any disputes arising hereunder shall be governed by and
                    construed in accordance with the laws of <strong>[State/Country]</strong>,
                    without regard to its conflict of laws principles. Subject to the arbitration
                    provisions above, you consent to the exclusive jurisdiction and venue of the
                    courts located in <strong>[City, State/Country]</strong> for any dispute not
                    subject to arbitration.
                  </p>
                  <p>
                    If you are located outside the United States, mandatory consumer protection
                    laws of your country of residence may apply to you notwithstanding this choice
                    of law clause.
                  </p>
                </section>

                <section className={styles.termsBlock} id="20-general-provisions">
                  <h3>20. General Provisions</h3>

                  <div className={styles.subBlock}>
                    <h4>20.1 Entire Agreement</h4>
                    <p>
                      These Terms, together with our Privacy Policy and any additional terms,
                      policies, or agreements incorporated herein, constitute the entire agreement
                      between you and Associum with respect to the Service and supersede all prior
                      or contemporaneous understandings, communications, and agreements.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>20.2 Severability</h4>
                    <p>
                      If any provision of these Terms is found to be unenforceable or invalid under
                      applicable law, that provision will be modified to the minimum extent
                      necessary to make it enforceable, and the remaining provisions will continue
                      in full force and effect.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>20.3 Waiver</h4>
                    <p>
                      Associum&apos;s failure to enforce any provision of these Terms shall not be
                      construed as a waiver of its right to enforce that provision or any other
                      provision in the future.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>20.4 Assignment</h4>
                    <p>
                      You may not assign or transfer your rights or obligations under these Terms
                      without Associum&apos;s prior written consent. Associum may freely assign
                      its rights and obligations under these Terms, including in connection with a
                      merger, acquisition, corporate restructuring, or sale of assets. These Terms
                      are binding upon and inure to the benefit of the parties&apos; respective
                      successors and permitted assigns.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>20.5 Force Majeure</h4>
                    <p>
                      Associum shall not be liable for any failure or delay in performance
                      resulting from causes beyond its reasonable control, including acts of God,
                      natural disasters, pandemic, war, terrorism, cyberattacks, government
                      actions, or failure of third-party infrastructure.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>20.6 No Third-Party Beneficiaries</h4>
                    <p>
                      These Terms do not create any third-party beneficiary rights. They are solely
                      for the benefit of the parties hereto and their permitted successors and
                      assigns.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>20.7 Language</h4>
                    <p>
                      These Terms are written in English. Any translation provided is for
                      convenience only. In the event of any conflict between the English version
                      and a translation, the English version shall prevail.
                    </p>
                  </div>

                  <div className={styles.subBlock}>
                    <h4>20.8 Headings</h4>
                    <p>
                      Section headings are for convenience only and do not affect the
                      interpretation of these Terms.
                    </p>
                  </div>
                </section>

                <section className={styles.termsBlock} id="21-contact-us">
                  <h3>21. Contact Us</h3>
                  <p>
                    For questions, concerns, or notices regarding these Terms, please contact:
                  </p>
                  <div className={styles.contactTableWrap}>
                    <table className={styles.contactTable}>
                      <thead>
                        <tr>
                          <th>Purpose</th>
                          <th>Contact</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>General Support</td>
                          <td>support@associum.ai</td>
                        </tr>
                        <tr>
                          <td>Legal &amp; Compliance</td>
                          <td>legal@associum.ai</td>
                        </tr>
                        <tr>
                          <td>Privacy &amp; Data Requests</td>
                          <td>privacy@associum.ai</td>
                        </tr>
                        <tr>
                          <td>Security Issues</td>
                          <td>security@associum.ai</td>
                        </tr>
                        <tr>
                          <td>HIPAA / Healthcare</td>
                          <td>compliance@associum.ai</td>
                        </tr>
                        <tr>
                          <td>Mailing Address</td>
                          <td>Associum, Inc., [Address], [City, State, ZIP]</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={styles.footerNotes}>
                    <p>&copy; 2026 Associum, Inc. All rights reserved.</p>
                    <p>These Terms of Service were last updated on May 11, 2026.</p>
                  </div>
                </section>
              </article>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
