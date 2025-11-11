import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import styles from "./Processus.module.css";

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      id: 1,
      number: "01",
      icon: "chatbubble-outline",
      title: "Lorem ipsum",
      description:
        "Praesent scelerisque suscipit nulla quis euismod. Mauris id nisl euismod, fringilla mi quis, bibendum est."
    },
    {
      id: 2,
      number: "02",
      icon: "create-outline",
      title: "Lorem ipsum ",
      description:
        "Morbi tristique magna vitae eros scelerisque, eu pellentesque tortor blandit. ",
    },
    {
      id: 3,
      number: "03",
      icon: "hammer-outline",
      title: "Lorem ipsum ",
      description:
        "Curabitur feugiat sapien consectetur felis finibus, ac finibus quam egestas. Sed eu tellus nulla. Aenean ac mauris porta, placerat ante ac, viverra lorem.",
    },
    {
      id: 4,
      number: "04",
      icon: "checkmark-circle-outline",
      title: "Lorem ipsum ",
      description:
        "Praesent scelerisque suscipit nulla quis euismod. Mauris id nisl euismod, fringilla mi quis, bibendum est. Praesent lectus neque, dignissim vitae maximus nec, feugiat in eros. Donec ut sem in dolor porttitor blandit.",
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="processus" className={styles.process} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Comment ça marche</h2>
          <p>
            Cras dignissim feugiat est, id luctus nulla porttitor ac. Curabitur
            eu lacus tincidunt, ornare nunc at, blandit nisl. Proin mattis
            mattis semper.
          </p>
        </motion.div>

        <motion.div
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className={styles.line}></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={styles.step}
              variants={itemVariants}
            >
              <div className={styles.numberWrapper}>
                <span className={styles.number}>{step.number}</span>
              </div>

              <div className={styles.iconWrapper}>
                <ion-icon name={step.icon}></ion-icon>
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
