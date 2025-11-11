import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import styles from "../About/About.module.css";

const Presentation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="presentation" className={styles.presentation} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800"
            alt="Portrait professionnel"
            className={styles.image}
          />
        </motion.div>

        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Une approche authentique</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sed lacus nisi. Etiam eget dui quis neque blandit blandit eu id leo.
            Sed vel pulvinar turpis. Curabitur vestibulum luctus ultrices. Nam
            placerat facilisis lacus, eget rhoncus urna molestie volutpat.
            Aenean commodo id ex eu lobortis. Morbi gravida urna ut ipsum
            pulvinar convallis.
          </p>

          <p>
            Curabitur nulla lorem, gravida nec efficitur vel, volutpat
            pellentesque libero. Aliquam consequat eros quis pulvinar
            scelerisque. Phasellus pretium massa ac nisi mattis pretium. In
            risus lacus, mattis quis quam sed, condimentum sollicitudin nisi.
            Suspendisse justo augue, ullamcorper in nisi faucibus, sagittis
            interdum elit. Praesent maximus hendrerit mauris, eget ullamcorper
            neque.
          </p>

          <p>
            Aliquam tincidunt erat sem, vitae eleifend nisi ultrices in. Etiam
            hendrerit maximus vestibulum. Proin et justo dolor. Curabitur luctus
            mauris sed magna volutpat tristique. Pellentesque sit amet nibh
            rutrum, iaculis purus quis, dignissim urna. Aliquam accumsan, est at
            vehicula tempor, turpis mi rhoncus tortor, at rhoncus diam leo sit
            amet tellus.Quisque ut purus congue, laoreet arcu a, rutrum ante. Aliquam condimentum, arcu suscipit venenatis congue, urna tellus varius ante, sed molestie mi eros quis purus.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Presentation;
