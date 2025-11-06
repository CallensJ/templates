import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import styles from './Intersection.module.css';

const BreakSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className={styles.breakSection} ref={ref}>
      <div className={styles.overlay}></div>
      
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <blockquote className={styles.quote}>
          "La simplicité est la sophistication suprême"
        </blockquote>
        <p className={styles.author}>— Léonard de Vinci</p>
      </motion.div>
    </section>
  );
};

export default BreakSection;