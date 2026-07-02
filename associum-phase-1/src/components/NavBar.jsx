import React, { useEffect, useState } from 'react';
import { ButtonLink } from './ButtonLink';
import styles from './NavBar.module.scss';
import logoAsset from '../assets/shared/header-logo.webp?url';
import caretAsset from '../assets/shared/header-caret.svg?url';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Product', href: '/product' },
  { label: 'Security', href: '/security' },
  { label: 'Company', href: '#company' },
  { label: 'Pricing', href: '/pricing' },
];
const companyMenuItems = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];


function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

export function NavBar({ pathname = '/' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [companyMenuOpen, setCompanyMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    Company: false,
  });

  const closeMenu = () => {
    setMenuOpen(false);
    setCompanyMenuOpen(false);
    setMobileDropdowns({
      Company: false,
    });
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      // Always show at the top
      if (currentScrollY <= 50) {
        setHeaderVisible(true);
      } 
      // Only hide if we've scrolled down more than a small threshold
      else if (scrollDelta > 5) {
        setHeaderVisible(false);
      } 
      // Show if we've scrolled up more than a small threshold
      else if (scrollDelta < -5) {
        setHeaderVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      setMobileDropdowns({
        Company: false,
      });
    }
  }, [menuOpen]);

  const currentPath = normalizePath(pathname);
  const companyActive = currentPath === '/about' || currentPath === '/contact';

  return (
    <header className={`${styles.header} ${headerVisible ? styles.headerVisible : styles.headerHidden} ${menuOpen ? styles.headerOpen : ''}`}>
      <div 
        className={`${styles.overlay} ${menuOpen ? styles.overlayVisible : ''}`} 
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div className={styles.bannerWrapper}>
        <div className={styles.banner}>
          <p>
            Unlock <strong>100 credits</strong> upon signup.{' '}
            <a className={styles.bannerLink} href="https://app.associum.ai/signup">
              Click
            </a>{' '}
            to learn more.
          </p>
        </div>
      </div>

      <div className={styles.navBar}>
        <div className={styles.navRow}>
          <a className={styles.brand} href="/">
            <img className={styles.brandIcon} src={logoAsset} alt="" />
            <span>Associum</span>
          </a>

          <nav className={styles.nav} aria-label="Primary">
            {navItems.map((item) => (
              item.label === 'Company' ? (
                <div
                  key={item.label}
                  className={styles.companyNav}
                  onMouseEnter={() => setCompanyMenuOpen(true)}
                  onMouseLeave={() => setCompanyMenuOpen(false)}
                >
                  <button
                    type="button"
                    className={`${styles.navItem} ${companyActive ? styles.navItemActive : ''}`}
                    aria-haspopup="menu"
                    aria-expanded={companyMenuOpen}
                    onClick={() => setCompanyMenuOpen((current) => !current)}
                  >
                    <span>{item.label}</span>
                    <img className={styles.caret} src={caretAsset} alt="" />
                    {companyActive && <span className={styles.activeUnderline} aria-hidden="true" />}
                  </button>

                  <div
                    className={`${styles.companyMenu} ${companyMenuOpen ? styles.companyMenuOpen : ''}`}
                    role="menu"
                    aria-label="Company submenu"
                  >
                    {companyMenuItems.map((menuItem) => (
                      <a
                        key={menuItem.label}
                        href={menuItem.href.startsWith('#') ? `/${menuItem.href}` : menuItem.href}
                        className={styles.companyMenuItem}
                        role="menuitem"
                        onClick={closeMenu}
                      >
                        {menuItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  className={`${styles.navItem} ${currentPath === normalizePath(item.href) ? styles.navItemActive : ''}`}
                  href={item.href.startsWith('#') ? `/${item.href}` : item.href}
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>

                  {currentPath === normalizePath(item.href) && (
                    <span className={styles.activeUnderline} aria-hidden="true" />
                  )}
                </a>
              )
            ))}
          </nav>

          <div className={styles.actions}>
            <ButtonLink href="https://app.associum.ai/" variant="outline" size="header" onClick={closeMenu}>
              Log In
            </ButtonLink>
            <ButtonLink href="https://app.associum.ai/signup" variant="primary" size="header" onClick={closeMenu}>
              Start for Free
            </ButtonLink>
          </div>

          <button
            type="button"
            className={styles.mobileToggle}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className={styles.mobileToggleBar} />
            <span className={styles.mobileToggleBar} />
            <span className={styles.mobileToggleBar} />
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`${styles.mobilePanel} ${menuOpen ? styles.mobilePanelOpen : ''}`}
        >
          <nav className={styles.mobileNav} aria-label="Mobile primary">
            {navItems.map((item) => (
              item.label === 'Company' ? (
                <div key={item.label} className={styles.mobileGroup}>
                  <button
                    type="button"
                    className={styles.mobileNavButton}
                    aria-expanded={mobileDropdowns[item.label]}
                    onClick={() =>
                      setMobileDropdowns((current) => ({
                        ...current,
                        [item.label]: !current[item.label],
                      }))
                    }
                  >
                    <span>{item.label}</span>
                    <img className={styles.mobileCaret} src={caretAsset} alt="" />
                  </button>

                  <div
                    className={`${styles.mobileDropdown} ${
                      mobileDropdowns[item.label] ? styles.mobileDropdownOpen : ''
                    }`}
                  >
                    {companyMenuItems.map((menuItem) => (
                      <a
                        key={typeof menuItem === 'string' ? menuItem : menuItem.label}
                        href={
                          typeof menuItem === 'string'
                            ? `/#${menuItem.toLowerCase().replace(/\s+/g, '-')}`
                            : (menuItem.href.startsWith('#') ? `/${menuItem.href}` : menuItem.href)
                        }
                        className={styles.mobileDropdownItem}
                        onClick={() => setMenuOpen(false)}
                      >
                        {typeof menuItem === 'string' ? menuItem : menuItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href.startsWith('#') ? `/${item.href}` : item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          <div className={styles.mobileActions}>
            <ButtonLink href="https://app.associum.ai/" variant="outline" size="mobile" onClick={closeMenu}>
              Log In
            </ButtonLink>
            <ButtonLink href="https://app.associum.ai/signup" variant="primary" size="mobile" onClick={closeMenu}>
              Start for Free
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
