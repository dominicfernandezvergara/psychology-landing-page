import React, { Fragment } from "react";
import cn from "classnames";

import styles from "./container-founder-company.module.css";
import { appDataText } from "../../appDataText/appDataText";
import teamImage from "../../images/imageAbout/caro_remove.png";
import ButtonApp from "../button";

function ContainerFounderCompany() {
  console.log("appDataText.espanol.aboutUs", appDataText.espanol.aboutUs);
  return (
    <Fragment>
      <div className={styles.containerTeamPresentationComponent}>
        <h1 className={styles.title}>
          {appDataText.espanol.aboutUs.team.title}
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
            <p className={cn(styles.text, styles.activeMedium)}>
              {appDataText.espanol.aboutUs.founder.experience.text3}
            </p>
            <p className={cn(styles.text, styles.activeMedium)}>
              {appDataText.espanol.aboutUs.founder.experience.text4}
            </p>
          </div>
        </div>

        <p className={cn(styles.text, styles.desactiveMedium)}>
          {appDataText.espanol.aboutUs.founder.experience.text3}
        </p>
        <p className={cn(styles.text, styles.desactiveMedium)}>
          {appDataText.espanol.aboutUs.founder.experience.text4}
        </p>
        <h3 className={styles.subtitle}>
          {appDataText.espanol.aboutUs.founder.training.title}
        </h3>
        <p className={styles.text}>
          {appDataText.espanol.aboutUs.founder.training.text1}
        </p>
        <p className={styles.text}>
          {appDataText.espanol.aboutUs.founder.training.text2}
        </p>
        <h3 className={styles.subtitle}>
          {appDataText.espanol.aboutUs.founder.valueFormation.title}
        </h3>
        <p className={styles.text}>
          {appDataText.espanol.aboutUs.founder.valueFormation.text}
        </p>
        <div className={styles.containerButtonGoToColaboradores}>
          <ButtonApp
            text={appDataText.espanol.aboutUs.text}
            path={appDataText.espanol.header.aboutUs.subcategories.path}
            color="primary"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default ContainerFounderCompany;
