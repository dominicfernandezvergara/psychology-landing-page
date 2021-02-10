import React from "react";

import styles from "./container-founder-company.module.css";
import { appDataText } from "../../appDataText/appDataText";
import teamImage from "../../images/imageAbout/imageTeam/imageTeamCarolina 2.png";

function FounderCompany() {
  return (
    <div className={styles.containerFounderCompany}>
      <h1 className={styles.title}>
        {appDataText.espanol.aboutUs.founder.title}
      </h1>
      <div className={styles.containerImage}>
        <img alt="missionImage" className={styles.image} src={teamImage} />
      </div>
      <div className={styles.wrapperText}>
        <h1 className={styles.titleLarge}>
          {appDataText.espanol.aboutUs.founder.title}
        </h1>
        <h1 className={styles.name}>
          {appDataText.espanol.aboutUs.founder.name}
        </h1>
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
      </div>
    </div>
  );
}

export default FounderCompany;
