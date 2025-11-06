import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import styles from './Processus.module.css';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      id: 1,
      number: '01',
      icon: 'chatbubble-outline',
      title: 'Premier échange',
      description: 'Nous prenons le temps de discuter de votre projet, vos envies et vos besoins lors d\'un premier contact.'
    },
    {
      id: 2,
      number: '02',
      icon: 'create-outline',
      title: 'Conception',
      description: 'Je crée une proposition personnalisée adaptée à votre demande, en respectant votre vision et vos contraintes.'
    },
    {
      id: 3,
      number: '03',
      icon: 'hammer-outline',
      title: 'Réalisation',
      description: 'Place à la création. Je vous tiens informé de l\'avancement et reste à votre écoute tout au long du processus.'
    },
    {
      id: 4,
      number: '04',
      icon: 'checkmark-circle-outline',
      title: 'Livraison',
      description: 'Votre projet prend vie. Je m\'assure de votre entière satisfaction et reste disponible pour tout suivi.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="processus" className={styles.process} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Comment ça marche</h2>
          <p>
            Chaque collaboration suit un processus clair et transparent, pensé pour 
            vous accompagner sereinement de l'idée initiale jusqu'à la concrétisation 
            de votre projet.
          </p>
        </motion.div>

        <motion.div 
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className={styles.line}></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              className={styles.step}
              variants={itemVariants}
            >
              <div className={styles.numberWrapper}>
                <span className={styles.number}>{step.number}</span>
              </div>
              
              <div className={styles.iconWrapper}>
                <ion-icon name={step.icon}></ion-icon>
              </div>
              
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;