import React from "react";
import cn from "classnames";

import styles from "./container-founder-company.module.css";
import { appDataText } from "../../appDataText/appDataText";
import teamImage from "../../images/imageAbout/caro_remove.png";

function FounderCompany() {
  //   <p className={cn(styles.text, styles.desactiveMedium)}>
  //   {appDataText.espanol.aboutUs.founder.experience.text3}
  // </p>
  // <p className={cn(styles.text, styles.desactiveMedium)}>
  //   {appDataText.espanol.aboutUs.founder.experience.text4}
  // </p>
  return (
    <div className={styles.containerFounderCompany}>
      <h1 className={styles.title}>
        {appDataText.espanol.aboutUs.founder.title}
      </h1>
      <div className={styles.containerImage}>
        <img alt="missionImage" className={styles.image} src={teamImage} />
      </div>
      <h1 className={styles.name}>
        {appDataText.espanol.aboutUs.founder.name}
      </h1>
      <h3 className={styles.profession}>
        {appDataText.espanol.aboutUs.founder.occupation}
      </h3>
      <h3 className={styles.subtitle}>
        {appDataText.espanol.aboutUs.founder.experience.title}
      </h3>
      <p className={styles.text}>
        {appDataText.espanol.aboutUs.founder.experience.text1}
      </p>
      <p className={styles.text}>
        {appDataText.espanol.aboutUs.founder.experience.text2}
      </p>
      <p className={styles.text}>
        {appDataText.espanol.aboutUs.founder.experience.text3}
      </p>
      <p className={styles.text}>
        {appDataText.espanol.aboutUs.founder.experience.text4}
      </p>
      <h3 className={cn(styles.subtitle, styles.subtitleTraining)}>
        {appDataText.espanol.aboutUs.founder.training.title}
      </h3>
      <p className={styles.text}>
        {appDataText.espanol.aboutUs.founder.training.text1}
      </p>
      <h3 className={styles.subtitle}>
        {appDataText.espanol.aboutUs.founder.valueFormation.title}
      </h3>
      <p className={styles.text}>
        {appDataText.espanol.aboutUs.founder.valueFormation.text}
      </p>
    </div>
  );
}

export default FounderCompany;
