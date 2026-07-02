import React from 'react';
import { Container } from './Container';
import styles from './IntegrationsSection.module.scss';

// Icon imports (User will upload these)
import googleIcon from '../assets/integrations/google.svg?url';
import gmailIcon from '../assets/integrations/gmail.svg?url';
import calendarIcon from '../assets/integrations/calendar.svg?url';
import slackIcon from '../assets/integrations/slack.svg?url';
import notionIcon from '../assets/integrations/notion.svg?url';
import linearIcon from '../assets/integrations/linear.svg?url';

const integrationIcons = [
  { src: googleIcon, alt: 'Google' },
  { src: gmailIcon, alt: 'Gmail' },
  { src: calendarIcon, alt: 'Google Calendar' },
  { src: slackIcon, alt: 'Slack' },
  { src: notionIcon, alt: 'Notion' },
  { src: linearIcon, alt: 'Linear' },
];

export function IntegrationsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <div className={styles.textSide}>
            <h2 className={styles.title} data-reveal>
              Integrations
            </h2>
            <p className={styles.subheading} data-reveal style={{ '--reveal-delay': '0.1s' }}>
              Associum integrates with your preferred data sources and applications via their Model Context Protocol ("MCP") servers. Choose from our existing integrations or easily add your own.
            </p>
          </div>

          <div className={styles.iconSide}>
            <div className={styles.iconGrid}>
              {integrationIcons.map((icon, index) => (
                <div
                  key={index}
                  className={styles.iconWrapper}
                  data-reveal
                  style={{ '--reveal-delay': `${0.1 + index * 0.06}s` }}
                >
                  <img src={icon.src} alt={icon.alt} />
                </div>
              ))}
            </div>
            <p className={styles.andMore} data-reveal style={{ '--reveal-delay': '0.5s' }}>
              and more
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
