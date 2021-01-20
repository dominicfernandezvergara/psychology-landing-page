import React from "react";

import styles from "./first-section-home.module.css";
import { appDataText } from "../../../appDataText/appDataText";

function FirstSectionHome() {
  console.log("appDataText", appDataText);
  return (
    <div className={styles.containerFirstSection}>
      <div className={styles.containerText}>
        <h1 className={styles.title}>
          {appDataText.espanol.home.fistSectionHome.slider1.title}
        </h1>
        <p className={styles.text}>
          {appDataText.espanol.home.fistSectionHome.slider1.subtitle}
        </p>
      </div>
    </div>
  );
}
export default FirstSectionHome;
