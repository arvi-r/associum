import React from 'react';
import styles from './ButtonLink.module.scss';

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ');
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  onClick,
}) {
  const isExternal = href && (href.startsWith('http') || href.startsWith('mailto:'));
  const to = !isExternal && href && href.startsWith('#') ? `/${href}` : href;

  return (
    <a
      href={to}
      onClick={onClick}
      className={cx(styles.buttonLink, styles[variant], styles[size], className)}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
