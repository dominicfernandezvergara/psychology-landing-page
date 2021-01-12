import React from "react";

import styles from "./first-section-home.module.css";
import image from "../../../images/imagenPsicologia.jpg";
import ButtonApp from "../../button";
import { appDataText } from "../../../appDataText/appDataText";

function FirstSectionHome() {
  console.log("appDataText", appDataText);
  return (
    <div className={styles.containerFirstSection}>
      <div className={styles.containerText}>
        <h1 className={styles.title}>
          {appDataText.english.home.fistSectionHome.title}
        </h1>
        <p className={styles.text}>
          {appDataText.english.home.fistSectionHome.subtitle}
        </p>
        <ButtonApp
          text={appDataText.english.home.fistSectionHome.buttonText}
          path="/contacto"
          color="primary"
        />
      </div>
    </div>
  );
}
export default FirstSectionHome;
