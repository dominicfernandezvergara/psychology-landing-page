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
      <div className={styles.containerIconsSection}>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <EmailIcon />
          </div>
          <div className={styles.textIcon}>
            {appDataText.english.home.fifthSectionHome.firstStep}
          </div>
        </div>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <EventAvailableIcon />
          </div>
          <div className={styles.textIcon}>
            {appDataText.english.home.fifthSectionHome.secondStep}
          </div>
        </div>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <SentimentVerySatisfiedIcon />
          </div>
          <div className={styles.textIcon}>
            {appDataText.english.home.fifthSectionHome.thirdStep}
          </div>
        </div>
      </div>
      <ButtonApp text="Contact us" path="/contacto" color="secondary" />
    </div>
  );
}

export default FifthSectionHome;
