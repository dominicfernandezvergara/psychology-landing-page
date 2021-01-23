import React from "react";

import styles from "./gift-section-home.module.css";
import ButtonApp from "../../button";
import { appDataText } from "../../../appDataText/appDataText";
import image from "../../../images/imageHome/imageGiftSection.svg";

function GiftSectionHome() {
  return (
    <div className={styles.containerGiftSectionHome}>
      <div className={styles.containerImage}>
        <img className={styles.image} alt="imageGiftSection" src={image} />
      </div>
      <div className={styles.containerText}>
        <p className={styles.text}>
          {appDataText.espanol.home.giftSectionHome.text}
        </p>
        <ButtonApp
          text={appDataText.espanol.home.giftSectionHome.buttonText}
          path="/contacto"
          color="primary"
        />
      </div>
    </div>
  );
}

export default GiftSectionHome;
