import React from "react";
import ButtonApp from "../../button";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import styles from "./first-section-home.module.css";
import { appDataText } from "../../../appDataText/appDataText";

function FirstSectionHome() {
  return (
    <div className={styles.containerThirdSection}>
      <h1 className={styles.title}>
        {appDataText.espanol.home.thirdSectionHome.title}
      </h1>
      <p className={styles.text}>
        {appDataText.espanol.home.thirdSectionHome.text}
      </p>
      <div className={styles.containerButtonIcons}>
        <div className={styles.containerIconsSection}>
          <div className={styles.wrapIconsSection}>
            <div className={styles.icon}>
              <InsertEmoticonIcon />
            </div>
            <div className={styles.textIcon}>
              {appDataText.espanol.home.thirdSectionHome.textIcon1}
            </div>
          </div>
          <div className={styles.wrapIconsSection}>
            <div className={styles.icon}>
              <LoyaltyIcon />
            </div>
            <div className={styles.textIcon}>
              {appDataText.espanol.home.thirdSectionHome.textIcon2}
            </div>
          </div>
          <div className={styles.wrapIconsSection}>
            <div className={styles.icon}>
              <FavoriteIcon />
            </div>
            <div className={styles.textIcon}>
              {appDataText.espanol.home.thirdSectionHome.textIcon3}
            </div>
          </div>
        </div>
        <div className={styles.containerButton}>
          <ButtonApp
            text={appDataText.espanol.home.thirdSectionHome.buttonText}
            path="/contacto"
            color="primary"
          />
        </div>
      </div>
    </div>
  );
}

export default FirstSectionHome;
