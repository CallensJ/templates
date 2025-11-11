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
      question: 'Morbi gravida urna ut ipsum pulvinar convallis.?',
      answer: 'Nulla sollicitudin nunc ut hendrerit laoreet. Integer tempus ante a gravida aliquet. Aliquam erat volutpat. Pellentesque aliquam scelerisque cursus.'
    },
    {
      id: 2,
      question: 'Cras dignissim feugiat est, id luctus nulla porttitor ac   ?',
      answer: 'Aliquam tincidunt erat sem, vitae eleifend nisi ultrices in. Etiam hendrerit maximus vestibulum. Proin et justo dolor. Curabitur luctus mauris sed magna volutpat tristique. Pellentesque sit amet nibh rutrum, iaculis purus quis, dignissim urna. Aliquam accumsan, est at vehicula tempor, turpis mi rhoncus tortor'
    },
    {
      id: 3,
      question: 'Praesent maximus hendrerit mauris, eget ullamcorper neque?',
      answer: 'rcu a, rutrum ante. Aliquam condimentum, arcu suscipit venenatis congue, urna tellus varius ante, sed molestie mi eros quis purus.'
    },
    {
      id: 4,
      question: ' Vivamus efficitur neque sit amet congue mollis ?',
      answer: 'Curabitur feugiat sapien consectetur felis finibus, ac finibus quam egestas. Sed eu tellus nulla. Aenean ac mauris porta, placerat ante ac, viverra lorem. Integer porttitor porta urna, a ornare est ullamcorper ac.'
    },
    {
      id: 5,
      question: 'Duis pharetra mauris quis ligula porta sollicitudin.?',
      answer: ' Donec ut sem in dolor porttitor blandit. Proin at erat interdum, hendrerit nisi eget, dapibus quam. In eu elit tincidunt, consequat elit et, vehicula quam. Ut ut consequat nisl.'
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