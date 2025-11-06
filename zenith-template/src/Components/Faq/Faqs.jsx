import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import styles from './Faqs.module.css';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Comment se déroule la première prise de contact ?',
      answer: 'Nous échangeons d\'abord par email ou téléphone pour définir vos besoins et attentes. Cet échange initial est gratuit et sans engagement. Il me permet de comprendre votre projet et de vous proposer une approche personnalisée.'
    },
    {
      id: 2,
      question: 'Quels sont les délais de réalisation ?',
      answer: 'Les délais varient selon la nature et la complexité de votre projet. En général, comptez entre 2 et 6 semaines. Je m\'engage à vous communiquer un planning précis dès notre premier échange et à respecter les échéances convenues ensemble.'
    },
    {
      id: 3,
      question: 'Proposez-vous des formules sur mesure ?',
      answer: 'Absolument. Chaque projet est unique et mérite une attention particulière. Je m\'adapte à vos besoins spécifiques, votre budget et vos contraintes pour créer une prestation qui vous correspond parfaitement.'
    },
    {
      id: 4,
      question: 'Travaillez-vous avec des particuliers et des professionnels ?',
      answer: 'Oui, j\'accompagne aussi bien les particuliers que les professionnels (artisans, thérapeutes, petites entreprises). Mon approche s\'adapte à chaque type de clientèle avec la même exigence de qualité.'
    },
    {
      id: 5,
      question: 'Comment se passe le paiement ?',
      answer: 'Je demande généralement un acompte de 30% à la validation du projet, puis le solde à la livraison. D\'autres modalités peuvent être convenues ensemble selon votre situation. Toutes les conditions sont clairement définies avant le début du projet.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Questions fréquentes</h2>
          <p>
            Retrouvez ici les réponses aux questions les plus courantes. 
            Si vous ne trouvez pas l'information recherchée, n'hésitez pas à me contacter directement.
          </p>
        </motion.div>

        <motion.div 
          className={styles.faqList}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <div key={faq.id} className={styles.faqItem}>
              <button
                className={`${styles.question} ${openIndex === index ? styles.active : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <motion.div
                  className={styles.icon}
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ion-icon name="add-outline"></ion-icon>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className={styles.answer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <div className={styles.answerContent}>
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;