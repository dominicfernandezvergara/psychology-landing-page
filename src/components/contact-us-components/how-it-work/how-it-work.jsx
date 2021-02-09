import React, { useState } from "react";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import EmailIcon from "@material-ui/icons/Email";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

import styles from "./how-it-work.module.css";
import { appDataText } from "../../../appDataText/appDataText";

function HowItWork() {
  const [language, setLanguage] = useState("espanol");
  return (
    <div className={styles.containerHowItWork}>
      <h1 className={styles.title}>
        {appDataText[language].home.fifthSectionHome.title}
      </h1>
      <h4 className={styles.subtitle}>
        {appDataText.espanol.home.fifthSectionHome.subtitle}
      </h4>
      <div className={styles.containerIconsSection}>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <EmailIcon />
          </div>
          <div className={styles.textIcon}>
            <h3 className={styles.step}>
              {appDataText.espanol.home.fifthSectionHome.firstStep.title}
            </h3>
            <p className={styles.descriptionStep}>
              {appDataText.espanol.home.fifthSectionHome.firstStep.description}
            </p>
          </div>
        </div>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <EventAvailableIcon />
          </div>
          <div className={styles.textIcon}>
            <h3 className={styles.step}>
              {appDataText.espanol.home.fifthSectionHome.secondStep.title}
            </h3>
            <p className={styles.descriptionStep}>
              {appDataText.espanol.home.fifthSectionHome.secondStep.description}
            </p>
          </div>
        </div>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <SentimentVerySatisfiedIcon />
          </div>
          <div className={styles.textIcon}>
            <h3 className={styles.step}>
              {appDataText.espanol.home.fifthSectionHome.thirdStep.title}
            </h3>
            <p className={styles.descriptionStep}>
              {appDataText.espanol.home.fifthSectionHome.thirdStep.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWork;
