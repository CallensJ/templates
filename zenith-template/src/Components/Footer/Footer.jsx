import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* LOGO + DESCRIPTION */}
          <div className={styles.brand}>
            <h3 onClick={scrollToTop} style={{ cursor: 'pointer' }}>Zenith</h3>
            <p>
              Un espace de sérénité dédié à votre bien-être. 
              Créations authentiques et accompagnement personnalisé.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className={styles.links}>
            <h4>Navigation</h4>
            <ul>
              <li><button onClick={() => scrollToSection('presentation')}>Présentation</button></li>
              <li><button onClick={() => scrollToSection('galerie')}>Galerie</button></li>
              <li><button onClick={() => scrollToSection('services')}>Services</button></li>
              <li><button onClick={() => scrollToSection('faq')}>FAQ</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>

          {/* INFORMATIONS */}
          <div className={styles.links}>
            <h4>Informations</h4>
            <ul>
              <li><a href="mailto:contact@zenith.fr">contact@zenith.fr</a></li>
              <li><a href="tel:+33612345678">+33 6 12 34 56 78</a></li>
              <li>12 Rue des Artisans<br />33000 Bordeaux</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className={styles.bottom}>
          <p>&copy; {currentYear} Zenith. Tous droits réservés.</p>
          <div className={styles.legal}>
            <a href="#mentions">Mentions légales</a>
            <span>•</span>
            <a href="#privacy">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;