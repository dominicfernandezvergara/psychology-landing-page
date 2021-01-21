import React from "react";

import styles from "./slider-content-one.module.css";
import image from "../../../../images/imageSlider/imageSliderOne.jpg";
import { appDataText } from "../../../../appDataText/appDataText";

function SliderContentOne() {
  console.log("appDataText", appDataText);
  return (
    <div className={styles.containerSliderContentOne}>
      <div className={styles.containerText}>
        <h1 className={styles.title}>
          {appDataText.espanol.home.fistSectionHome.slider1.title}
        </h1>
        <div className={styles.containerImageSmall}>
          <img src={image} alt="imageSliderTwo" className={styles.image} />
        </div>
        <p className={styles.text}>
          {appDataText.espanol.home.fistSectionHome.slider1.subtitle}
        </p>
      </div>
      <div className={styles.containerImage}>
        <img src={image} alt="imageSliderOne" className={styles.image} />
      </div>
    </div>
  );
}
export default SliderContentOne;
