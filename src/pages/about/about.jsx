import React from "react";

import styles from "./about.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import { appDataText } from "../../appDataText/appDataText";
// import missionImage from "../../images/imageAbout/imageBrandBluePink.png";
import Footer from "../../components/footer";
import FounderCompany from "../../components/about-components/container-founder-company";
import Team from "../../components/team/team";

// todo:
// -ver si se deja slider de testimonios
// -enlace pagina team
function About() {
  UseScrollToTop();
  return (
    <div className={styles.containerAbout}>
      <h1 className={styles.title}>{appDataText.espanol.aboutUs.title}</h1>

      <div className={styles.containerPadding}>
        <div className={styles.wrappContainer}>
          <div className={styles.containerTextMission}>
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
            <p className={styles.text}>
              {appDataText.espanol.aboutUs.vision.text}
            </p>
            <p className={styles.text}>
              {appDataText.espanol.aboutUs.vision.text2}
            </p>
          </div>
        </div>
        <div className={styles.wrappContainer}>
          <FounderCompany />
        </div>
        <div className={styles.wrappContainer}>
          <Team />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
