import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import styles from "./Services.module.css";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      id: 1,
      icon: "brush-outline",
      title: "Créations sur mesure",
      description:
        "Etiam eget dui quis neque blandit blandit eu id leo. Sed vel pulvinar turpis.",
    },
    {
      id: 2,
      icon: "calendar-outline",
      title: "Accompagnement dédié",
      description:
        "Curabitur feugiat sapien consectetur felis finibus, ac finibus quam egestas.",
    },
    {
      id: 3,
      icon: "leaf-outline",
      title: "Formules découverte",
      description:
        "Curabitur eu lacus tincidunt, ornare nunc at, blandit nisl. ",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
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
            Quisque ut purus congue, laoreet arcu a, rutrum ante. Aliquam
            condimentum, arcu suscipit venenatis congue, urna tellus varius
            ante, sed molestie mi eros quis purus.
          </p>

          <p>
            Cras dignissim feugiat est, id luctus nulla porttitor ac. Curabitur
            eu lacus tincidunt, ornare nunc at, blandit nisl. Proin mattis
            mattis semper. Nullam non nisi leo. Morbi tristique magna vitae eros
            scelerisque, eu pellentesque tortor blandit. Sed ultricies, velit
            quis consectetur commodo, tellus ex viverra velit, non pharetra leo
            dolor ornare odio. Nulla facilisi. Integer feugiat est lectus, ut
            pretium enim tincidunt eu. Praesent gravida, felis quis convallis
            dictum, metus dolor malesuada magna, eu convallis diam justo et sem.
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
