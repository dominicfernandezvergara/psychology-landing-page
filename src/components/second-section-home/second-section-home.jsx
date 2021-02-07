import React from "react";
import AddIcon from "@material-ui/icons/Add";

import styles from "./second-section-home.module.css";
import ButtonApp from "../button";
import { appDataText } from "../../appDataText/appDataText";

function SecondSectionHome() {
  //   <p className={styles.text}>
  //   {appDataText.espanol.home.secondSectionHome.text}
  // </p>
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
        <ul className={styles.containerDescription}>
          <li className={styles.description}>
            {appDataText.espanol.home.secondSectionHome.description}
          </li>
          <li className={styles.description}>
            {appDataText.espanol.home.secondSectionHome.description2}
          </li>
          <li className={styles.description}>
            {appDataText.espanol.home.secondSectionHome.description3}
          </li>
        </ul>

        <ButtonApp
          text={appDataText.espanol.home.secondSectionHome.buttonText}
          path="./contacto"
          color="primary"
        />
      </div>
    </div>
  );
}

export default SecondSectionHome;
