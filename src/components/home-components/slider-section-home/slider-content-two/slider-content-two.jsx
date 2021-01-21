import React from "react";

import styles from "./slider-content-two.module.css";
import image from "../../../../images/imageSlider/imageSliderTwo2.svg";
import { appDataText } from "../../../../appDataText/appDataText";
import ButtonApp from "../../../button";

function SliderContentTwo() {
  console.log("appDataText", appDataText);
  return (
    <div className={styles.containerSliderContentTwo}>
      <div className={styles.containerImage}>
        <img src={image} alt="imageSliderTwo" className={styles.image} />
      </div>
      <div className={styles.containerText}>
        <p className={styles.title}>
          {appDataText.espanol.home.fistSectionHome.slider2.title}
        </p>
        <div className={styles.containerImageSmall}>
          <img src={image} alt="imageSliderTwo" className={styles.image} />
        </div>
        <p className={styles.text}>
          {appDataText.espanol.home.fistSectionHome.slider2.text}
        </p>
      </div>
    </div>
  );
}
export default SliderContentTwo;
