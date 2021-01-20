import React from "react";

import styles from "./about-section-home.module.css";
import { appDataText } from "../../../../appDataText/appDataText";

function AboutSectionHome() {
  return (
    <div className={styles.containerList}>
      <div className={styles.title}></div>
      <div className={styles.containerImage}></div>
      <div className={styles.text}></div>
    </div>
  );
}

export default AboutSectionHome;
