import React from "react";
import styles from "./first-section-home.module.css";
import image from "../../../images/imagenPsicologia.jpg";
import ButtonApp from "../../button";

function FirstSectionHome() {
  return (
    <div className={styles.containerFirstSection}>
      <div className={styles.containerText}>
        <h1 className={styles.title}>Therapeutic counseling</h1>
        <p className={styles.text}>
          Understand. Heal. Grow. We Can Do This Together.
        </p>
        <ButtonApp
          text="Schedule an apointment"
          path="/contacto"
          color="primary"
        />
      </div>
    </div>
  );
}
export default FirstSectionHome;
