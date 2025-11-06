import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import styles from './Services.module.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      id: 1,
      icon: 'brush-outline',
      title: 'Créations sur mesure',
      description: 'Conception de pièces uniques adaptées à vos besoins et à votre univers personnel.'
    },
    {
      id: 2,
      icon: 'calendar-outline',
      title: 'Accompagnement dédié',
      description: 'Suivi personnalisé et conseils pour vous guider dans votre démarche avec bienveillance.'
    },
    {
      id: 3,
      icon: 'leaf-outline',
      title: 'Formules découverte',
      description: 'Offres d\'initiation pensées pour vous permettre de découvrir mon approche en douceur.'
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className={styles.services} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Services & Prestations</h2>
          
          <p>
            Chaque prestation est pensée pour répondre à vos besoins spécifiques, 
            dans le respect de votre rythme et de vos attentes. Que vous recherchiez 
            une création artisanale unique, un accompagnement personnalisé ou simplement 
            une première approche de mon travail, je m'adapte à votre projet avec 
            attention et disponibilité.
          </p>
          
          <p>
            Mon approche privilégie l'écoute, la transparence et la qualité. 
            Chaque collaboration débute par un échange approfondi pour cerner vos 
            envies et définir ensemble la prestation qui vous correspondra le mieux. 
            L'objectif est de créer une expérience sur mesure, à votre image.
          </p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className={styles.card}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.iconWrapper}>
                <ion-icon name={service.icon}></ion-icon>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;