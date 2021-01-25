import React, { Fragment } from "react";
import cn from "classnames";

import styles from "./team-presentation-component.module.css";
import { appDataText } from "../../appDataText/appDataText";
import teamImage from "../../images/imageAbout/caro_remove.png";

function TeamPresentationComponent() {
  console.log("appDataText.espanol.aboutUs", appDataText.espanol.aboutUs);
  return (
    <Fragment>
      <div className={styles.containerTeamPresentationComponent}>
        <h1 className={styles.title}>
          {appDataText.espanol.aboutUs.team.person1.title}
        </h1>
        <div className={styles.wrappData}>
          <div className={styles.containerTeamImage}>
            <img
              alt="missionImage"
              className={styles.teamImage}
              src={teamImage}
            />
          </div>
          <div className={styles.wrappDataExperience}>
            <h1 className={styles.name}>
              {appDataText.espanol.aboutUs.team.person1.name}
            </h1>
            <h3 className={styles.profession}>
              {appDataText.espanol.aboutUs.team.person1.occupation}
            </h3>

            <h3 className={styles.subtitle}>
              {appDataText.espanol.aboutUs.team.person1.experience.title}
            </h3>
            <p className={styles.text}>
              {appDataText.espanol.aboutUs.team.person1.experience.text1}
            </p>
            <p className={styles.text}>
              {appDataText.espanol.aboutUs.team.person1.experience.text2}
            </p>
            <p className={cn(styles.text, styles.activeMedium)}>
              {appDataText.espanol.aboutUs.team.person1.experience.text3}
            </p>
            <p className={cn(styles.text, styles.activeMedium)}>
              {appDataText.espanol.aboutUs.team.person1.experience.text4}
            </p>
          </div>
        </div>

        <p className={cn(styles.text, styles.desactiveMedium)}>
          {appDataText.espanol.aboutUs.team.person1.experience.text3}
        </p>
        <p className={cn(styles.text, styles.desactiveMedium)}>
          {appDataText.espanol.aboutUs.team.person1.experience.text4}
        </p>
        <h3 className={styles.subtitle}>
          {appDataText.espanol.aboutUs.team.person1.training.title}
        </h3>
        <p className={styles.text}>
          {appDataText.espanol.aboutUs.team.person1.training.text1}
        </p>
        <p className={styles.text}>
          {appDataText.espanol.aboutUs.team.person1.training.text2}
        </p>
        <h3 className={styles.subtitle}>
          {appDataText.espanol.aboutUs.team.person1.valueFormation.title}
        </h3>
        <p className={styles.text}>
          {appDataText.espanol.aboutUs.team.person1.valueFormation.text}
        </p>
      </div>
    </Fragment>
  );
}

export default TeamPresentationComponent;
