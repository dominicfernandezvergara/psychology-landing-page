import React from "react";

import styles from "./first-section-home.module.css";
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
      </div>
    </div>
  );
}
export default FirstSectionHome;
