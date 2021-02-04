import React from "react";
import AddIcon from "@material-ui/icons/Add";

import styles from "./second-section-home.module.css";
import ButtonApp from "../../button";
import { appDataText } from "../../../appDataText/appDataText";

function SecondSectionHome() {
  return (
    <div className={styles.containerSecondSection}>
      <div className={styles.title}>
        {appDataText.espanol.home.secondSectionHome.title}
      </div>
      <div className={styles.containerOffer}>
        <h4 className={styles.subtitle}>
          {appDataText.espanol.home.offer.title}
        </h4>
        <p className={styles.textOffer}>
          {appDataText.espanol.home.offer.text}
        </p>
        <AddIcon />
        <p className={styles.textOffer}>
          {appDataText.espanol.home.offer.text1}
        </p>
        <AddIcon />
        <p className={styles.textOffer}>
          {appDataText.espanol.home.offer.text2}
        </p>
      </div>
      <p className={styles.text}>
        {appDataText.espanol.home.secondSectionHome.text}
      </p>
      <ButtonApp
        text={appDataText.espanol.home.secondSectionHome.buttonText}
        path="./contacto"
        color="primary"
      />
    </div>
  );
}

export default SecondSectionHome;
