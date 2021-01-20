import React, { useState } from "react";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import EmailIcon from "@material-ui/icons/Email";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

import styles from "./fifth-section-home.module.css";
import ButtonApp from "../../button";
import { appDataText } from "../../../appDataText/appDataText";

function FifthSectionHome() {
  const [language, setLanguage] = useState("espanol");
  return (
    <div className={styles.containerFifthSection}>
      <h1 className={styles.title}>
        {/*appDataText.espanol.home.fifthSectionHome.title*/}
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
            <h3 className={styles.step}>Step One</h3>
            <p className={styles.descriptionStep}>
              {appDataText.espanol.home.fifthSectionHome.firstStep}
            </p>
          </div>
        </div>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <EventAvailableIcon />
          </div>
          <div className={styles.textIcon}>
            <h3 className={styles.step}>Step Two</h3>
            <p className={styles.descriptionStep}>
              {appDataText.espanol.home.fifthSectionHome.secondStep}
            </p>
          </div>
        </div>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <SentimentVerySatisfiedIcon />
          </div>
          <div className={styles.textIcon}>
            <h3 className={styles.step}>Step Three</h3>
            <p className={styles.descriptionStep}>
              {appDataText.espanol.home.fifthSectionHome.thirdStep}
            </p>
          </div>
        </div>
      </div>
      <ButtonApp
        text={appDataText.espanol.home.fifthSectionHome.buttonText}
        path="/contacto"
        color="primary"
      />
    </div>
  );
}

export default FifthSectionHome;
