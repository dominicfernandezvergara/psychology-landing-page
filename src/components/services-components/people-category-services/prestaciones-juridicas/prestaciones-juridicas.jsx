import React from "react";

import styles from "./prestaciones-juridicas.module.css";
import { appDataText } from "../../../../appDataText/appDataText";
import imagePsicoterapia from "../../../../images/imageServices/imagePeople.jpeg";

function PrestacionesJuridicas() {
  return (
    <div className={styles.containerService}>
      <h3 className={styles.titleService}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople4.title
        }
      </h3>
      <p className={styles.phrase}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople4.phrase
        }
      </p>
      <div className={styles.containerImage}>
        <img className={styles.image} alt="" src={imagePsicoterapia} />
      </div>
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
          <h4 className={styles.titleSubservices}>
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
          <h4 className={styles.titleSubservices}>
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
          <h4 className={styles.titleSubservices}>
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

      <p className={styles.lenguage}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople4.subtitlelanguage
        }
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople4.language
        }
      </p>
    </div>
  );
}
export default PrestacionesJuridicas;
