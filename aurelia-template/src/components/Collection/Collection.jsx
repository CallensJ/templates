import { useState, useEffect } from 'react';
import styles from './Collection.module.css';
import collectionData from '../../data/collection.json';

const Collection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const collectionItems = collectionData.collectionItems;

  // Open lightbox
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Navigate to previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? collectionItems.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === collectionItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [lightboxOpen]);

  return (
    <section id="collection" className={styles.collection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Collection</h2>
          <p className={styles.sectionSubtitle}>Pièces uniques façonnées avec passion</p>
        </div>

        {/* Masonry Gallery */}
        <div className={styles.masonryGrid}>
          {collectionItems.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.masonryItem} ${styles[item.height]}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => openLightbox(index)}
            >
              <div className={styles.imageContainer}>
                <img 
                  src={item.url} 
                  alt={item.title}
                  className={styles.image}
                />
                <div 
                  className={`${styles.overlay} ${
                    hoveredItem === item.id ? styles.overlayVisible : ''
                  }`}
                >
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA Button */}
        <div className={styles.instagramCta}>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.instagramButton}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={styles.instagramIcon}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>Voir plus sur Instagram</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          {/* Close Button */}
          <button 
            className={styles.closeButton}
            onClick={closeLightbox}
            aria-label="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Previous Button */}
          <button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Image précédente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Lightbox Content */}
          <div 
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={collectionItems[currentIndex].url} 
              alt={collectionItems[currentIndex].title}
              className={styles.lightboxImage}
            />
            <div className={styles.lightboxInfo}>
              <h3 className={styles.lightboxTitle}>
                {collectionItems[currentIndex].title}
              </h3>
              <p className={styles.lightboxDescription}>
                {collectionItems[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Image suivante"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Collection;