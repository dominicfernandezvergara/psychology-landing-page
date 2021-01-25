import React from "react";

import styles from "./offer-section-home.module.css";
import ButtonApp from "../../button";
import { appDataText } from "../../../appDataText/appDataText";
import image from "../../../images/imageHome/imageOfferSection2.svg";
import AddIcon from "@material-ui/icons/Add";

function OfferSectionHome() {
  return (
    <div className={styles.containerOfferSectionHome}>
      <h3 className={styles.title}>
        {appDataText.espanol.services.offer.title}
      </h3>
      <div className={styles.subContainerOfferSection}>
        <div className={styles.containerData}>
          <p className={styles.subtitle}>
            {appDataText.espanol.services.offer.subtitle}
          </p>
          <div className={styles.containerOffer}>
            <p className={styles.text}>
              {appDataText.espanol.services.offer.text}
            </p>
            <AddIcon />
            <p className={styles.text}>
              {appDataText.espanol.services.offer.text1}
            </p>
            <AddIcon />
            <p className={styles.text}>
              {appDataText.espanol.services.offer.text2}
            </p>
          </div>
          <p className={styles.discount}>
            {appDataText.espanol.services.offer.text3}
          </p>
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
