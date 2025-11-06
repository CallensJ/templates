import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from '../About/About.module.css';

const Presentation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="presentation" className={styles.presentation} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" 
            alt="Portrait professionnel"
            className={styles.image}
          />
        </motion.div>

        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Une approche authentique</h2>
          
          <p>
            Chaque création est le fruit d'une démarche sincère, où le temps et l'attention 
            portée aux détails priment sur la production de masse. Mon travail reflète une 
            philosophie simple : créer avec intention, dans le respect des matériaux et des 
            savoir-faire traditionnels.
          </p>
          
          <p>
            Formé auprès d'artisans passionnés, j'ai développé une pratique qui allie 
            technique ancestrale et sensibilité contemporaine. Chaque pièce raconte une 
            histoire, celle d'un processus où la main et l'esprit collaborent pour donner 
            vie à des objets uniques.
          </p>
          
          <p>
            Mon atelier est un espace de création paisible, où je prends le temps nécessaire 
            pour concevoir des réalisations sur mesure, adaptées aux besoins et à la 
            personnalité de chacun.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Presentation;