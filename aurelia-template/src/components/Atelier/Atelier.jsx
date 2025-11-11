import styles from './Atelier.module.css';

const Atelier = () => {
  const ambientImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1470',
      alt: 'Outils d\'orfèvre sur établi',
      size: 'medium',
      rotation: -3
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1287',
      alt: 'Bijoux en cours de création',
      size: 'small',
      rotation: 2
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1287',
      alt: 'Pierre précieuse et lumière',
      size: 'large',
      rotation: 4
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1412',
      alt: 'Mains d\'artisan au travail',
      size: 'medium',
      rotation: -2
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1611081337543-c6c5198eca61?q=80&w=1471',
      alt: 'Matériaux bruts sur table',
      size: 'small',
      rotation: 5
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1472',
      alt: 'Détail de bijou doré',
      size: 'medium',
      rotation: -4
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070',
      alt: 'Atelier avec lumière naturelle',
      size: 'large',
      rotation: 3
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=1470',
      alt: 'Outils et créations',
      size: 'small',
      rotation: -5
    }
  ];

  return (
    <section id="atelier" className={styles.atelier}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>L'Atelier</h2>
          <p className={styles.sectionSubtitle}>Là où naissent les rêves dorés</p>
        </div>

        {/* Gallery + Central Text */}
        <div className={styles.atelierContent}>
          {/* Ambient Images */}
          <div className={styles.imageGallery}>
            {ambientImages.map((image) => (
              <div
                key={image.id}
                className={`${styles.ambientImage} ${styles[image.size]}`}
                style={{ transform: `rotate(${image.rotation}deg)` }}
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className={styles.image}
                />
              </div>
            ))}
          </div>

          {/* Central Text */}
          <div className={styles.centralText}>
            <div className={styles.textCard}>
              <p className={styles.paragraph}>
                Mon atelier est un sanctuaire de silence et de lumière tamisée. C'est ici, 
                entre les murs chargés d'histoire, que je dialogue avec la matière. L'odeur 
                du métal chauffé, le bruissement délicat des pierres précieuses, le poids 
                d'un outil familier dans ma paume : chaque sensation me relie à une lignée 
                ancestrale d'artisans qui ont consacré leur vie à l'art du précieux.
              </p>
              <p className={styles.paragraph}>
                L'inspiration vient de partout : des forêts elfiques des légendes anciennes, 
                des constellations qui brillent dans le ciel nocturne, des motifs organiques 
                que la nature dessine avec une perfection inégalée. Je puise dans cet univers 
                fantasy et mystique pour créer des pièces qui transcendent le simple ornement 
                et deviennent des talismans, des compagnons de route pour ceux qui osent rêver.
              </p>
              <p className={styles.paragraph}>
                Chaque journée passée ici est une méditation, un acte de foi envers la beauté 
                et l'authenticité. Dans ce lieu hors du temps, je ne crée pas pour produire, 
                mais pour offrir au monde des fragments d'éternité façonnés avec passion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Atelier;