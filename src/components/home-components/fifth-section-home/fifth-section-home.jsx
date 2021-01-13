import React from "react";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import EmailIcon from "@material-ui/icons/Email";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

import styles from "./fifth-section-home.module.css";
import ButtonApp from "../../button";
import { appDataText } from "../../../appDataText/appDataText";

function FifthSectionHome() {
  return (
    <div className={styles.containerFifthSection}>
      <h1 className={styles.title}>
        {appDataText.english.home.fifthSectionHome.title}
      </h1>
      <h4 className={styles.subtitle}>
        {appDataText.english.home.fifthSectionHome.subtitle}
      </h4>
      <div className={styles.containerIconsSection}>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <EmailIcon />
          </div>
          <div className={styles.textIcon}>
            <h3 className={styles.step}>Step One</h3>
            <p className={styles.descriptionStep}>
              {appDataText.english.home.fifthSectionHome.firstStep}
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
              {appDataText.english.home.fifthSectionHome.secondStep}
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
              {appDataText.english.home.fifthSectionHome.thirdStep}
            </p>
          </div>
        </div>
      </div>
      <ButtonApp text="Contact us" path="/contacto" color="primary" />
    </div>
  );
}

export default FifthSectionHome;
