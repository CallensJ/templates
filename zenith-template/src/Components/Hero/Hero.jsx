import {  useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../Hero/Hero.module.css';

const Hero = () => {
  const heroRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Trouvez votre équilibre
        </motion.h1>
        
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Un espace de sérénité dédié à votre bien-être
        </motion.p>
        
        <motion.button
          className={styles.cta}
          onClick={() => scrollToSection('presentation')}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Découvrir
        </motion.button>
      </div>

      <div className={styles.scrollIndicator}>
        <motion.div
          className={styles.scrollLine}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;