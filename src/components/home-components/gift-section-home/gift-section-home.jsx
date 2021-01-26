import React from "react";
import DownloadLink from "react-download-link";

import styles from "./gift-section-home.module.css";
import ButtonApp from "../../button";
import { appDataText } from "../../../appDataText/appDataText";
import image from "../../../images/imageHome/imageGiftSection.svg";
import doc from "../../../docs/cuentoGift.pdf";
import Button from "@material-ui/core/Button";

function GiftSectionHome() {
  console.log("doc", doc);
  //   <ButtonApp
  //   text={appDataText.espanol.home.giftSectionHome.buttonText}
  //   path="/contacto"
  //   color="primary"
  // />
  return (
    <div className={styles.containerGiftSectionHome}>
      <div className={styles.containerImage}>
        <img className={styles.image} alt="imageGiftSection" src={image} />
      </div>
      <div className={styles.containerText}>
        <p className={styles.text}>
          {appDataText.espanol.home.giftSectionHome.text}
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
