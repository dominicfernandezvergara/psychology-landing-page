import React from "react";

import styles from "./services.module.css";
import Footer from "../../components/footer/footer";

function Services() {
  return (
    <div className={styles.containerServices}>
      <h1 className={styles.title}>Servicios</h1>
      <div className={styles.containerService}></div>
      <Footer />
    </div>
  );
}
export default Services;
