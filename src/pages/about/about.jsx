import React from "react";

import styles from "./about.module.css";
import { appDataText } from "../../appDataText/appDataText";
// import missionImage from "../../images/imageAbout/imageBrandBluePink.png";
import Footer from "../../components/footer";
import ContainerFounderCompany from "../../components/about-components/container-founder-company";
import TestimonySliderAbout from "../../components/testimony-slider-about";

function About() {
  return (
    <div className={styles.containerAbout}>
      <h1 className={styles.title}>{appDataText.espanol.aboutUs.title}</h1>
      <TestimonySliderAbout />

      <div className={styles.containerText}>
        <h3 className={styles.subtitle}>
          {appDataText.espanol.aboutUs.mission.title}
        </h3>
        <p className={styles.text}>
          {appDataText.espanol.aboutUs.mission.text}
        </p>

        <p className={styles.text}>
          {appDataText.espanol.aboutUs.mission.text3}
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
      </div>
      <div className={styles.containerTeam}>
        <ContainerFounderCompany />
      </div>
      <Footer />
    </div>
  );
}

export default About;
