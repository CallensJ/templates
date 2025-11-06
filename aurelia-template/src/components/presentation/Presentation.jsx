import { useState } from 'react';
import styles from './Presentation.module.css';

const Presentation = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1470',
      caption: 'Bijoux Arwen - Angel',
      alt: 'Collier doré avec pendentif mystique'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1287',
      caption: 'Ma plus belle création',
      alt: 'Bague en or avec pierre précieuse'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=1470',
      caption: "L'or et l'ombre",
      alt: 'Bracelet artisanal en or'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1470',
      caption: 'Éclat éternel',
      alt: 'Boucles d\'oreilles dorées élégantes'
    }
  ];

  return (
    <section id="presentation" className={styles.presentation}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>L'Essence d'AURELIA</h2>
          <p className={styles.sectionSubtitle}>Là où la matière rencontre l'âme</p>
        </div>

        {/* Content Grid */}
        <div className={styles.contentGrid}>
          {/* Biography Text */}
          <div className={styles.bioContent}>
            <p className={styles.bioParagraph}>
              Depuis plus de dix ans, je façonne des bijoux qui racontent une histoire. 
              Chaque pièce naît d'une vision, d'un rêve, d'une matière qui m'appelle. 
              L'or, l'argent, les pierres précieuses ne sont pas de simples matériaux : 
              ce sont des messagers d'émotions, des gardiens de mémoires.
            </p>

            <p className={styles.bioParagraph}>
              Mon atelier est un sanctuaire où le temps suspend son vol. C'est dans 
              le silence de la création que naissent les formes, guidées par mes mains 
              et inspirées par l'univers fantasy qui m'habite depuis l'enfance. Chaque 
              courbe, chaque détail est pensé pour capturer la lumière et révéler 
              l'invisible.
            </p>

            <p className={styles.bioParagraph}>
              Je ne crée pas pour la tendance, mais pour l'éternité. Mes bijoux sont 
              destinés à ceux qui cherchent l'unique, le rare, le précieux au sens noble 
              du terme. Ils sont le fruit d'un savoir-faire ancestral mêlé à une sensibilité 
              contemporaine, toujours en quête de ce point d'équilibre entre tradition et 
              audace.
            </p>

            <p className={styles.bioParagraph}>
              Chaque commande personnalisée est une rencontre. J'écoute, je ressens, 
              puis je traduis en matière ce que les mots ne peuvent dire. C'est cette 
              alchimie entre le désir du client et ma vision artistique qui donne naissance 
              aux pièces les plus extraordinaires de mon catalogue.
            </p>

            <p className={styles.bioParagraph}>
              AURELIA n'est pas qu'une marque : c'est une promesse. Celle de porter 
              sur soi un fragment d'art, une parcelle de mystère, un bijou qui vous 
              ressemble et qui traverse le temps avec grâce.
            </p>
          </div>

          {/* Image Gallery */}
          <div className={styles.imageGallery}>
            {images.map((image) => (
              <div
                key={image.id}
                className={`${styles.imageWrapper} ${styles[`image${image.id}`]}`}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className={styles.imageContainer}>
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
                <p 
                  className={`${styles.imageCaption} ${
                    hoveredImage === image.id ? styles.captionVisible : ''
                  }`}
                >
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;