import React from "react";

import styles from "./gift-section-home.module.css";
import { appDataText } from "../../../appDataText/appDataText";
import image from "../../../images/imageHome/imageGiftSection.svg";
import doc from "../../../docs/cuentoGift.pdf";
import Button from "@material-ui/core/Button";

function GiftSectionHome() {
  return (
    <div className={styles.containerGiftSectionHome}>
      <div className={styles.containerImageLarge}>
        <img className={styles.image} alt="imageGiftSection" src={image} />
      </div>
      <div className={styles.containerText}>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}>
            {appDataText.espanol.home.giftSectionHome.text}
          </h1>
          <h1 className={styles.textUppercase}>
            {appDataText.espanol.home.giftSectionHome.text2}
          </h1>
        </div>
        <div className={styles.containerImage}>
          <img className={styles.image} alt="imageGiftSection" src={image} />
        </div>
        <p className={styles.text}>
          {appDataText.espanol.home.giftSectionHome.text3}
        </p>
        <Button variant="contained">
          <a
            href={doc}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.dowloadButton}
          >
            {appDataText.espanol.home.giftSectionHome.buttonText}
          </a>
        </Button>
      </div>
    </div>
  );
}

export default GiftSectionHome;
