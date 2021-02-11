import React from "react";
import cn from "classnames";

import styles from "./about.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import { appDataText } from "../../appDataText/appDataText";
import Footer from "../../components/footer";
import Team from "../../components/team/team";

function About() {
  UseScrollToTop();

  return (
    <div className={styles.containerAbout}>
      <h1 className={styles.title}>{appDataText.espanol.aboutUs.title}</h1>

      <div className={styles.containerPadding}>
        <div className={styles.wrappContainer}>
          <div className={cn(styles.containerText, styles.marginBottom)}>
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
          <div className={cn(styles.containerText, styles.marginBottom)}>
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
          <div className={styles.containerText}>
            <h3 className={styles.subtitle}>
              {appDataText.espanol.aboutUs.subtitle}
            </h3>
            <p className={styles.text}>{appDataText.espanol.aboutUs.text}</p>

            <p className={styles.text}>{appDataText.espanol.aboutUs.text2}</p>
            <p className={styles.text}>{appDataText.espanol.aboutUs.text3}</p>
            <p className={styles.text}>{appDataText.espanol.aboutUs.text4}</p>
            <p className={styles.text}>{appDataText.espanol.aboutUs.text5}</p>
            <p className={styles.text}>{appDataText.espanol.aboutUs.text6}</p>
          </div>
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
