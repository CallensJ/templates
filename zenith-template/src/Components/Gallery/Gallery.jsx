import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import styles from '../Gallery/Gallery.module.css';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [selectedFilter, setSelectedFilter] = useState('tous');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = ['tous', 'céramique', 'textile', 'bois'];

  const galleryItems = [
    {
      id: 1,
      category: 'céramique',
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800',
      alt: 'Céramique artisanale'
    },
    {
      id: 2,
      category: 'textile',
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800',
      alt: 'Textile naturel'
    },
    {
      id: 3,
      category: 'bois',
      image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800',
      alt: 'Travail du bois'
    },
    {
      id: 4,
      category: 'céramique',
      image: 'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?q=80&w=800',
      alt: 'Poterie moderne'
    },
    {
      id: 5,
      category: 'textile',
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800',
      alt: 'Tissage artisanal'
    },
    {
      id: 6,
      category: 'bois',
      image: 'https://images.unsplash.com/photo-1565191999001-551c187427bb?q=80&w=800',
      alt: 'Sculpture bois'
    }
  ];

  const filteredItems = selectedFilter === 'tous' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  return (
    <section id="galerie" className={styles.gallery} ref={ref}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Réalisations
        </motion.h2>

        {/* Filtres */}
        <motion.div 
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterBtn} ${selectedFilter === filter ? styles.active : ''}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Grille */}
        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={styles.gridItem}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedImage(item)}
              >
                <img src={item.image} alt={item.alt} />
                <div className={styles.overlay}>
                  <span className={styles.category}>{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bouton Instagram */}
        <motion.div 
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="https://instagram.com/votre_compte" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.instagramBtn}
          >
            Voir plus sur Instagram
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className={styles.closeBtn}
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <img src={selectedImage.image} alt={selectedImage.alt} />
              <p className={styles.lightboxCaption}>{selectedImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;