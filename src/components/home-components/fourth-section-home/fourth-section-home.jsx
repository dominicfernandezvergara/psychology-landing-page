import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import styles from "./fourth-section-home.module.css";
import { appDataText } from "../../../appDataText/appDataText";
import imagePeople from "../../../images/imageHome/persona-feliz-en-atardecer.jpeg";
import imageProfesional from "../../../images/imageHome/niña-globo-feliz.jpeg";
import imageCompanie from "../../../images/imageHome/enfermera-feliz.jpg";

function FourthSectionHome() {
  const history = useHistory();
  const handleClick = () => {
    console.log("onClick");
    // history.push("./servicios");
  };

  return (
    <div className={styles.containerSection}>
      <h2 className={styles.title}>
        {appDataText.english.home.fourthSectionHome.title}
      </h2>

      <div className={styles.containerService}>
        <img className={styles.image} alt="" src={imagePeople} />
        <div className={styles.containerTextService}>
          <h3 className={styles.subTitle}>
            {appDataText.english.home.fourthSectionHome.services.people.title}
          </h3>
          <ul>
            <li className={styles.text}>
              {
                appDataText.english.home.fourthSectionHome.services.people
                  .service1
              }
            </li>
            <li className={styles.text}>
              {
                appDataText.english.home.fourthSectionHome.services.people
                  .service2
              }
            </li>
            <li className={styles.text}>
              {
                appDataText.english.home.fourthSectionHome.services.people
                  .service3
              }
            </li>
          </ul>
        </div>
        <Button
          variant="contained"
          className={styles.button}
          onClick={handleClick}
        >
          {
            appDataText.english.home.fourthSectionHome.services.people
              .buttonText
          }
        </Button>
      </div>

      <div className={styles.containerService}>
        <img className={styles.image} alt="" src={imageProfesional} />
        <div className={styles.containerTextService}>
          <h3 className={styles.subTitle}>
            {
              appDataText.english.home.fourthSectionHome.services.profesional
                .title
            }
          </h3>
          <ul>
            <li className={styles.text}>
              {
                appDataText.english.home.fourthSectionHome.services.profesional
                  .service1
              }
            </li>
            <li className={styles.text}>
              {
                appDataText.english.home.fourthSectionHome.services.profesional
                  .service1
              }
            </li>
            <li className={styles.text}>
              {
                appDataText.english.home.fourthSectionHome.services.profesional
                  .service3
              }
            </li>
          </ul>
        </div>
        <Button
          variant="contained"
          className={styles.button}
          onClick={handleClick}
        >
          {
            appDataText.english.home.fourthSectionHome.services.profesional
              .buttonText
          }
        </Button>
      </div>

      <div className={styles.containerService}>
        <img className={styles.image} alt="" src={imageCompanie} />
        <div className={styles.containerTextService}>
          <h3 className={styles.subTitle}>
            {
              appDataText.english.home.fourthSectionHome.services.companies
                .title
            }
          </h3>
          <p className={styles.textCompany}>
            {
              appDataText.english.home.fourthSectionHome.services.companies
                .description
            }
          </p>
        </div>
        <Button
          variant="contained"
          className={styles.button}
          onClick={handleClick}
        >
          {
            appDataText.english.home.fourthSectionHome.services.companies
              .buttonText
          }
        </Button>
      </div>
    </div>
  );
}
export default FourthSectionHome;
