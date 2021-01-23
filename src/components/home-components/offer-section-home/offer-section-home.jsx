import React from "react";

import styles from "./offer-section-home.module.css";
import ButtonApp from "../../button";
import { appDataText } from "../../../appDataText/appDataText";
import image from "../../../images/imageHome/imageOfferSection2.svg";
import AddIcon from "@material-ui/icons/Add";

function OfferSectionHome() {
  return (
    <div className={styles.containerOfferSectionHome}>
      <div className={styles.subContainerOfferSection}>
        <div className={styles.containerData}>
          <h3 className={styles.title}>
            {appDataText.espanol.services.offer.title}
          </h3>
          <p className={styles.subtitle}>
            {appDataText.espanol.services.offer.subtitle}
          </p>
          <div className={styles.containerOffer}>
            <p className={styles.text}>
              {appDataText.espanol.services.offer.text2}
            </p>

            <AddIcon />
            <p className={styles.text}>
              {appDataText.espanol.services.offer.text1}
            </p>
            <AddIcon />
            <p className={styles.text}>
              {appDataText.espanol.services.offer.text}
            </p>
          </div>

          <ButtonApp
            text={appDataText.espanol.services.offer.buttonText}
            path="/contacto"
            color="primary"
          />
        </div>
        <div className={styles.containerImage}>
          <img className={styles.image} alt="imageOfferSection" src={image} />
        </div>
      </div>
    </div>
  );
}

export default OfferSectionHome;
