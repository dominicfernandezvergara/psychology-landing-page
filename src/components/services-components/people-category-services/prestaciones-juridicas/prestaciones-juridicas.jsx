import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import styles from "./prestaciones-juridicas.module.css";
import { appDataText } from "../../../../appDataText/appDataText";
import imagePsicoterapia from "../../../../images/imageServices/imagePeopleCategory/imageAsesoriaLegal.jpg";

function PrestacionesJuridicas() {
  const history = useHistory();
  const onClickButtonPeopleServices = () => {
    history.push({
      pathname: appDataText.espanol.header.contactUs.path,
    });
  };
  return (
    <div className={styles.containerService}>
      <div className={styles.containerImage}>
        <img className={styles.image} alt="" src={imagePsicoterapia} />
      </div>
      <h2 className={styles.titleService}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople4.title
        }
      </h2>
      <p className={styles.text}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople4.description
        }
      </p>
      <div className={styles.containerSubservices}>
        <h3 className={styles.subtitle}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople4.subservices.title
          }
        </h3>
        <div className={styles.subservices}>
          <h4 className={styles.subtitle}>
            {
              appDataText.espanol.services.naturalPeopleService
                .serviceNaturalPeople4.subservices.subservice1.title
            }
          </h4>
          <p className={styles.text}>
            {
              appDataText.espanol.services.naturalPeopleService
                .serviceNaturalPeople4.subservices.subservice1.description
            }
          </p>
        </div>
        <div className={styles.subservices}>
          <h4 className={styles.subtitle}>
            {
              appDataText.espanol.services.naturalPeopleService
                .serviceNaturalPeople4.subservices.subservice2.title
            }
          </h4>
          <p className={styles.text}>
            {
              appDataText.espanol.services.naturalPeopleService
                .serviceNaturalPeople4.subservices.subservice2.description
            }
          </p>
        </div>
        <div className={styles.subservices}>
          <h4 className={styles.subtitle}>
            {
              appDataText.espanol.services.naturalPeopleService
                .serviceNaturalPeople4.subservices.subservice3.title
            }
          </h4>
          <p className={styles.text}>
            {
              appDataText.espanol.services.naturalPeopleService
                .serviceNaturalPeople4.subservices.subservice3.description
            }
          </p>
        </div>
      </div>
      <div className={styles.lenguage}>
        <h4 className={styles.subtitleLenguage}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople4.subtitlelanguage
          }
        </h4>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople4.language
          }
        </p>
      </div>
      <Button variant="contained" onClick={onClickButtonPeopleServices}>
        {appDataText.espanol.services.buttonText}
      </Button>
    </div>
  );
}
export default PrestacionesJuridicas;
