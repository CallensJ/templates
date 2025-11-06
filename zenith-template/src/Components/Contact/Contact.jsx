import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    // Configuration EmailJS
    // Remplacer par vos vraies clés EmailJS
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      formRef.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setStatus({ loading: false, success: true, error: false });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false });
      }, 5000);
    })
    .catch(() => {
      setStatus({ loading: false, success: false, error: true });
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false });
      }, 5000);
    });
  };

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Restons en contact</h2>
          <p>
            Une question, un projet, une envie ? N'hésitez pas à me contacter. 
            Je vous réponds généralement sous 48 heures.
          </p>
        </motion.div>

        <div className={styles.contentWrapper}>
          {/* INFORMATIONS */}
          <motion.div 
            className={styles.info}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div>
                <h3>Adresse</h3>
                <p>12 Rue des Artisans<br />33000 Bordeaux, France</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div>
                <h3>Email</h3>
                <p><a href="mailto:contact@zenith.fr">contact@zenith.fr</a></p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <ion-icon name="call-outline"></ion-icon>
              </div>
              <div>
                <h3>Téléphone</h3>
                <p><a href="tel:+33612345678">+33 6 12 34 56 78</a></p>
              </div>
            </div>

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
          </motion.div>

          {/* FORMULAIRE */}
          <motion.div 
            className={styles.formWrapper}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Parlez-moi de votre projet..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={status.loading}
              >
                {status.loading ? 'Envoi en cours...' : 'Envoyer'}
              </button>

              {status.success && (
                <p className={styles.successMessage}>
                  Merci ! Votre message a bien été envoyé.
                </p>
              )}

              {status.error && (
                <p className={styles.errorMessage}>
                  Une erreur s'est produite. Veuillez réessayer.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;