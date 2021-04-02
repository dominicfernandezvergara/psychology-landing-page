import React from "react";
import cn from "classnames";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import styles from "./services-section-home.module.css";

import { appDataText } from "../../../appDataText/appDataText";
import imagePeople from "../../../images/imageHome/act1-personaNatural.jpg";
import imageProfesional from "../../../images/imageHome/act1-psicologos y profesionales.jpg";
import imageCompanie from "../../../images/imageHome/act1-empresas.jpg";

function ServicesSectionHome() {
  const history = useHistory();

  const onClickButtonPeopleServices = () => {
    history.push({
      pathname: "/servicios",
      state: { service: "Servicios Personas Naturales", number: 0 },
    });
  };
  const onClickButtonProfesionalServices = () => {
    history.push({
      pathname: "/servicios",
      state: { service: "Servicios Psicologos", number: 1 },
    });
  };
  const onClickButtonCompanieServices = () => {
    history.push({
      pathname: "/servicios",
      state: { service: "Servicios Empresas", number: 2 },
    });
  };

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
          <div className={styles.containerButtton}>
            <Button variant="contained" onClick={onClickButtonPeopleServices}>
              {appDataText.espanol.home.fourthSectionHome.services.buttonText}
            </Button>
          </div>
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
          <div className={styles.containerButtton}>
            <Button
              variant="contained"
              onClick={onClickButtonProfesionalServices}
            >
              {appDataText.espanol.home.fourthSectionHome.services.buttonText}
            </Button>
          </div>
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
          <div className={styles.containerButtton}>
            <Button variant="contained" onClick={onClickButtonCompanieServices}>
              {appDataText.espanol.home.fourthSectionHome.services.buttonText}
            </Button>
          </div>
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
