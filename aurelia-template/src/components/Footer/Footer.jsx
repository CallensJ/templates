import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { id: 'accueil', label: 'Accueil', href: '#hero' },
    { id: 'presentation', label: 'Présentation', href: '#presentation' },
    { id: 'collection', label: 'Collection', href: '#collection' },
    { id: 'savoir-faire', label: 'Savoir-faire', href: '#savoir-faire' },
    { id: 'atelier', label: 'Atelier', href: '#atelier' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    {
      name: 'Pinterest',
      url: 'https://pinterest.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8.5 16.5c1-2 2-4 2-6a4 4 0 0 1 8 0c0 3-2 4-2 4s1 1 0 3c-1 1.5-3 1-3 1"></path>
        </svg>
      )
    }
  ];

  const legalLinks = [
    { label: 'Mentions légales', href: '#mentions-legales' },
    { label: 'Politique de confidentialité', href: '#confidentialite' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <h3 className={styles.brandName}>AURELIA</h3>
            <p className={styles.brandTagline}>
              Bijoux d'exception<br />façonnés à la main
            </p>
          </div>

          {/* Navigation Column */}
          <div className={styles.navColumn}>
            <h4 className={styles.columnTitle}>Navigation</h4>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className={styles.navLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div className={styles.socialColumn}>
            <h4 className={styles.columnTitle}>Suivez-moi</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.name}
                >
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Footer */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} AURELIA - Tous droits réservés
          </p>
          <div className={styles.legalLinks}>
            {legalLinks.map((link, index) => (
              <span key={link.label}>
                <a href={link.href} className={styles.legalLink}>
                  {link.label}
                </a>
                {index < legalLinks.length - 1 && (
                  <span className={styles.separator}>•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;