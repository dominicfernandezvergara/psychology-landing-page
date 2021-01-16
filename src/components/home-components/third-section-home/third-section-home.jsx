import React from "react";
import ButtonApp from "../../button";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import styles from "./third-section-home.module.css";
import { appDataText } from "../../../appDataText/appDataText";

function ThirdSectionHome() {
  return (
    <div className={styles.containerThirdSection}>
      <h1 className={styles.title}>
        {appDataText.english.home.thirdSectionHome.title}
      </h1>
      <p className={styles.text}>
        {appDataText.english.home.thirdSectionHome.subtitle}
      </p>
      <div className={styles.containerButtonIcons}>
        <div className={styles.containerButton}>
          <ButtonApp
            text={appDataText.english.home.thirdSectionHome.buttonText}
            path="/contacto"
            color="primary"
          />
        </div>
        <div className={styles.containerIconsSection}>
          <div className={styles.wrapIconsSection}>
            <div className={styles.icon}>
              <InsertEmoticonIcon />
            </div>
            <div className={styles.textIcon}>
              {appDataText.english.home.thirdSectionHome.text1}
            </div>
          </div>
          <div className={styles.wrapIconsSection}>
            <div className={styles.icon}>
              <LoyaltyIcon />
            </div>
            <div className={styles.textIcon}>
              {appDataText.english.home.thirdSectionHome.text2}
            </div>
          </div>
          <div className={styles.wrapIconsSection}>
            <div className={styles.icon}>
              <FavoriteIcon />
            </div>
            <div className={styles.textIcon}>
              {appDataText.english.home.thirdSectionHome.text3}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSectionHome;
