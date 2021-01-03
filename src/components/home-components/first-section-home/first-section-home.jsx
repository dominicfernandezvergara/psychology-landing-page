import React from "react";
import styles from "./first-section-home.module.css";
import image from "../../../images/imagenPsicologia.jpg";
import ButtonApp from "../../button";

function FirstSectionHome() {
  return (
    <div className={styles.containerFirstSection}>
      <div className={styles.containerText}>
        <h1 className={styles.title}>Consulta Carolina Urbina</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <ButtonApp text="comienza ya" path="/contacto" color="secondary" />
      </div>
    </div>
  );
}
export default FirstSectionHome;
