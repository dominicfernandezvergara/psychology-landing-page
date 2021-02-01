import React from "react";
import cn from "classnames";

import styles from "./services-section-home.module.css";

import { appDataText } from "../../../appDataText/appDataText";
import imagePeople from "../../../images/imageHome/imagePeople3.png";
import imageProfesional from "../../../images/imageHome/imageProfesional3.jpg";
import imageCompanie from "../../../images/imageHome/imageCompanie.jpeg";

function ServicesSectionHome() {
  const bodyPeople = (
    <div className={styles.containerService}>
      <h3 className={styles.titleService}>
        {appDataText.espanol.home.fourthSectionHome.services.people.title}
      </h3>
      <div className={styles.wrappTextImage}>
        <div className={styles.containerImage}>
          <img className={styles.image} alt="" src={imagePeople} />
        </div>
        <div className={styles.containerDescription}>
          <h3 className={styles.titleServiceLarge}>
            {appDataText.espanol.home.fourthSectionHome.services.people.title}
          </h3>
          <div className={styles.descriptionService}>
            {
              appDataText.espanol.home.fourthSectionHome.services.people
                .description
            }
          </div>
          <div className={styles.descriptionService}>
            {
              appDataText.espanol.home.fourthSectionHome.services.people
                .description2
            }
          </div>
          <div className={styles.descriptionService}>
            {
              appDataText.espanol.home.fourthSectionHome.services.people
                .description3
            }
          </div>
          <a className={styles.button} href="/contacto">
            {appDataText.espanol.home.fourthSectionHome.services.buttonText}
          </a>
        </div>
      </div>
    </div>
  );

  const bodyProfesional = (
    <div className={styles.containerService}>
      <h3 className={styles.titleService}>
        {appDataText.espanol.home.fourthSectionHome.services.profesional.title}
      </h3>
      <div className={styles.wrappTextImage}>
        <div className={cn(styles.containerImage, styles.imageSmall)}>
          <img className={styles.image} alt="" src={imageProfesional} />
        </div>
        <div className={styles.containerDescription}>
          <h3 className={styles.titleServiceLarge}>
            {
              appDataText.espanol.home.fourthSectionHome.services.profesional
                .title
            }
          </h3>
          <div className={styles.descriptionService}>
            {
              appDataText.espanol.home.fourthSectionHome.services.profesional
                .description
            }
          </div>
          <a className={styles.button} href="/contacto">
            {appDataText.espanol.home.fourthSectionHome.services.buttonText}
          </a>
        </div>
        <div className={cn(styles.containerImage, styles.imageLarge)}>
          <img className={styles.image} alt="" src={imageProfesional} />
        </div>
      </div>
    </div>
  );

  const bodyCompanie = (
    <div className={styles.containerService}>
      <h3 className={styles.titleService}>
        {appDataText.espanol.home.fourthSectionHome.services.companies.title}
      </h3>
      <div className={styles.wrappTextImage}>
        <div className={styles.containerImage}>
          <img
            className={cn(styles.image, styles.sideImage)}
            alt=""
            src={imageCompanie}
          />
        </div>
        <div className={styles.containerDescription}>
          <h3 className={styles.titleServiceLarge}>
            {
              appDataText.espanol.home.fourthSectionHome.services.companies
                .title
            }
          </h3>
          <div className={styles.descriptionService}>
            {
              appDataText.espanol.home.fourthSectionHome.services.companies
                .description
            }
          </div>
          <div className={styles.descriptionService}>
            {
              appDataText.espanol.home.fourthSectionHome.services.companies
                .description2
            }
          </div>
          <a className={styles.button} href="/contacto">
            {appDataText.espanol.home.fourthSectionHome.services.buttonText}
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.containerSection}>
      <h2 className={styles.title}>
        {appDataText.espanol.home.fourthSectionHome.title}
      </h2>
      <div className={styles.services}>
        <div className={styles.wrappService}>{bodyPeople}</div>
        <div className={styles.wrappService}>{bodyProfesional}</div>
        <div className={styles.wrappService}>{bodyCompanie}</div>
      </div>
    </div>
  );
}
export default ServicesSectionHome;
