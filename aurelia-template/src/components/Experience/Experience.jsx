import styles from "./Experience.module.css";

const SavoirFaire = () => {
  const skillsData = [
    {
      id: 1,
      number: "01",
      title: "Matériaux Nobles",
      description: `L'or 18 carats, l'argent massif, les pierres précieuses sélectionnées avec soin : 
      chaque matériau qui entre dans mon atelier possède une histoire et une énergie propre. 
      Je travaille exclusivement avec des fournisseurs éthiques qui partagent ma vision du respect 
      de la matière et de la nature. Les gemmes sont choisies pour leur singularité, leur éclat 
      unique, leur capacité à capturer et réfléchir la lumière d'une manière qui défie toute 
      reproduction industrielle.`,
      image:
        "https://images.unsplash.com/photo-1602025788761-07f57645b0a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
      alt: "Matériaux précieux et pierres pour bijoux",
      reversed: false,
    },
    {
      id: 2,
      number: "02",
      title: "Processus Artisanal",
      description: `Mes mains sont mes premiers outils. Chaque pièce naît d'une esquisse, d'un dessin 
      qui prend vie lentement, geste après geste. Le martelage, le ciselage, la soudure : autant de 
      techniques ancestrales que je maîtrise avec patience et passion. Je refuse les raccourcis de la 
      production de masse. Chaque bijou demande des heures, parfois des jours de travail minutieux. 
      C'est dans ce temps suspendu que l'âme de la pièce se révèle, que les formes organiques émergent, 
      que le métal se plie à la vision originelle.`,
      image:
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1412",
      alt: "Artisan au travail sur un bijou",
      reversed: true,
    },
    {
      id: 3,
      number: "03",
      title: "Finitions d'Exception",
      description: `Le polissage final est un rituel sacré. C'est à ce moment que le bijou révèle 
      son véritable visage : la lumière glisse sur les surfaces travaillées, les textures contrastent 
      avec les parties lisses, les pierres trouvent leur écrin parfait. Je passe des heures à parfaire 
      chaque détail, à vérifier que chaque angle, chaque courbe, chaque sertissage atteint la perfection. 
      Mes créations ne sortent de l'atelier que lorsqu'elles portent en elles cette exigence absolue 
      de qualité qui fait la différence entre un simple bijou et une œuvre d'art portable.`,
      image:
        "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1472",
      alt: "Bijou terminé avec finitions détaillées",
      reversed: false,
    },
  ];

  return (
    <section id="savoir-faire" className={styles.savoirFaire}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Savoir-faire</h2>
          <p className={styles.sectionSubtitle}>
            L'alchimie du geste et de la matière
          </p>
        </div>

        {/* Skills Blocks */}
        <div className={styles.skillsWrapper}>
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className={`${styles.skillBlock} ${
                skill.reversed ? styles.reversed : ""
              }`}
            >
              {/* Image */}
              <div className={styles.imageWrapper}>
                <div className={styles.imageContainer}>
                  <img
                    src={skill.image}
                    alt={skill.alt}
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
              </div>

              {/* Content */}
              <div className={styles.contentWrapper}>
                <div className={styles.content}>
                  <span className={styles.number}>{skill.number}</span>
                  <h3 className={styles.skillTitle}>{skill.title}</h3>
                  <p className={styles.skillDescription}>{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SavoirFaire;
