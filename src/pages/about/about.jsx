import React from "react";

import styles from "./about.module.css";
import { appDataText } from "../../appDataText/appDataText";
// import missionImage from "../../images/imageAbout/imageBrandBluePink.png";
import TeamPresentationComponent from "../../components/about-components/team-presentation-component";
import Footer from "../../components/footer";

function About() {
  console.log("appDataText.espanol.aboutUs", appDataText.espanol.aboutUs);
  //   <div className={styles.containerMissionImage}>
  //   <img
  //     alt="missionImage"
  //     className={styles.missionImage}
  //     src={missionImage}
  //   />
  // </div>
  return (
    <div className={styles.containerAbout}>
      <h1 className={styles.title}>{appDataText.espanol.aboutUs.title}</h1>

      <div className={styles.containerText}>
        <h3 className={styles.subtitle}>
          {appDataText.espanol.aboutUs.mission.title}
        </h3>
        <p className={styles.text}>
          {appDataText.espanol.aboutUs.mission.text}
        </p>
        <p className={styles.text}>
          {appDataText.espanol.aboutUs.mission.text2}
        </p>
      </div>

      <div className={styles.containerText}>
        <h3 className={styles.subtitle}>
          {appDataText.espanol.aboutUs.vision.title}
        </h3>
        <p className={styles.text}>{appDataText.espanol.aboutUs.vision.text}</p>
        <p className={styles.text}>
          {appDataText.espanol.aboutUs.vision.text2}
        </p>
        <p className={styles.text}>
          {appDataText.espanol.aboutUs.vision.text3}
        </p>
      </div>
      <div className={styles.containerTeam}>
        <TeamPresentationComponent />
      </div>
      <Footer />
    </div>
  );
}

export default About;
