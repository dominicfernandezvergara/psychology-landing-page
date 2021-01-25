import React from "react";

import styles from "./fourth-section-home.module.css";
import Button from "@material-ui/core/Button";

import { appDataText } from "../../../appDataText/appDataText";
import imagePeople from "../../../images/imageHome/imagePeople3.png";
import imageProfesional from "../../../images/imageHome/imageProfesional3.jpg";
import imageCompanie from "../../../images/imageHome/imageCompanie.jpeg";
import ContainerService from "./container-service/container-service";

function FourthSectionHome() {
  const handleClick = () => {
    console.log("onClick");
    // history.push("./servicios");
  };
  const bodyPeople = (
    <div className={styles.containerSubServices}>
      <div className={styles.subServices}>
        {appDataText.espanol.home.fourthSectionHome.services.people.description}
      </div>
      <div className={styles.subServices}>
        {
          appDataText.espanol.home.fourthSectionHome.services.people
            .description2
        }
      </div>
      <div className={styles.subServices}>
        {
          appDataText.espanol.home.fourthSectionHome.services.people
            .description3
        }
      </div>
    </div>
  );

  const bodyProfesional = (
    <div className={styles.containerSubServices}>
      <div className={styles.subServices}>
        {
          appDataText.espanol.home.fourthSectionHome.services.profesional
            .description
        }
      </div>
      <div className={styles.subServices}>
        {
          appDataText.espanol.home.fourthSectionHome.services.profesional
            .description2
        }
      </div>
    </div>
  );

  const bodyCompanie = (
    <div className={styles.containerSubServices}>
      <div className={styles.subServices}>
        {
          appDataText.espanol.home.fourthSectionHome.services.companies
            .description
        }
      </div>
      <div className={styles.subServices}>
        {
          appDataText.espanol.home.fourthSectionHome.services.companies
            .description2
        }
      </div>
    </div>
  );

  return (
    <div className={styles.containerSection}>
      <h2 className={styles.title}>
        {appDataText.espanol.home.fourthSectionHome.title}
      </h2>
      <div className={styles.services}>
        <ContainerService
          body={bodyPeople}
          title={
            appDataText.espanol.home.fourthSectionHome.services.people.title
          }
          image={imagePeople}
          classNameContainerText={styles.marginLeftContainerText}
          textButton={
            appDataText.espanol.home.fourthSectionHome.services.people
              .buttonText
          }
        />
        <ContainerService
          body={bodyProfesional}
          title={
            appDataText.espanol.home.fourthSectionHome.services.profesional
              .title
          }
          image={imageProfesional}
          textButton={
            appDataText.espanol.home.fourthSectionHome.services.profesional
              .buttonText
          }
          imageRight={true}
        />
        <ContainerService
          body={bodyCompanie}
          title={
            appDataText.espanol.home.fourthSectionHome.services.companies.title
          }
          image={imageCompanie}
          textButton={
            appDataText.espanol.home.fourthSectionHome.services.companies
              .buttonText
          }
          classNameContainerText={styles.marginLeftContainerText}
        />
      </div>
    </div>
  );
}
export default FourthSectionHome;
