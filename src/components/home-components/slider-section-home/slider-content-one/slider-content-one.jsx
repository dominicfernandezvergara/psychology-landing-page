import React from "react";

import styles from "./slider-content-one.module.css";
import { appDataText } from "../../../../appDataText/appDataText";

function SliderContentOne() {
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
export default SliderContentOne;
