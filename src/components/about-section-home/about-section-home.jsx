import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./about-section-home.module.css";
import { appDataText } from "../../appDataText/appDataText";

function AboutSectionHome() {
  const history = useHistory();
  const onClick = () => {
    history.push(appDataText.espanol.header.aboutUs.path);
  };

  return (
    <div className={styles.containerThirdSection}>
      <div className={styles.containerLeft}>
        <h1 className={styles.title}>Sobre nuestra compañia</h1>
        <p className={styles.textLeft}>
          {appDataText.espanol.aboutUs.vision.text2}
        </p>
        <button type="button" className={styles.button} onClick={onClick}>
          Conocer mas
        </button>
      </div>
      <div className={styles.containerRight}>
        <p className={styles.textRight}>
          {appDataText.espanol.aboutUs.especialText}
        </p>
        <p className={styles.textRight}>
          {appDataText.espanol.aboutUs.especialText2}
        </p>
        <p className={styles.textRight}>
          {appDataText.espanol.aboutUs.especialText3}
        </p>
      </div>
      <button type="button" className={styles.buttonSmall} onClick={onClick}>
        Conocer mas
      </button>
    </div>
  );
}

export default AboutSectionHome;
