import React from "react";

import styles from "./second-section-home.module.css";
import ButtonApp from "../../button";
import { appDataText } from "../../../appDataText/appDataText";

function SecondSectionHome() {
  return (
    <div className={styles.containerSecondSection}>
      <div className={styles.title}>
        {appDataText.espanol.home.secondSectionHome.title}
      </div>
      <p className={styles.text}>
        {appDataText.espanol.home.secondSectionHome.text}
      </p>
      <p className={styles.text2}>
        {appDataText.espanol.home.secondSectionHome.text2}
      </p>
      <ButtonApp
        text={appDataText.espanol.home.secondSectionHome.buttonText}
        path="./contacto"
        color="primary"
      />
    </div>
  );
}

export default SecondSectionHome;
