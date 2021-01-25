import React from "react";

import styles from "./slider-content-three.module.css";
import image from "../../../../images/imageSlider/imageSliderThree.svg";
import { appDataText } from "../../../../appDataText/appDataText";

function SliderContentThree() {
  console.log("appDataText", appDataText);
  return (
    <div className={styles.containerSliderContentThree}>
      <div className={styles.containerText}>
        <h1 className={styles.title}>
          {appDataText.espanol.home.fistSectionHome.slider3.title}
        </h1>
        <div className={styles.containerImageSmall}>
          <img src={image} alt="imageSliderTwo" className={styles.image} />
        </div>
        <p className={styles.text}>
          {appDataText.espanol.home.fistSectionHome.slider3.text}
        </p>
        <p className={styles.text2}>
          {appDataText.espanol.home.fistSectionHome.slider3.text2}
        </p>
      </div>
      <div className={styles.containerImage}>
        <img src={image} alt="imageSliderOne" className={styles.image} />
      </div>
    </div>
  );
}
export default SliderContentThree;
