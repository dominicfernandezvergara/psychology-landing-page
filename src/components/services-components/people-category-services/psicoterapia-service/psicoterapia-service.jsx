import React from "react";

import styles from "./psicoterapia-service.module.css";
import { appDataText } from "../../../../appDataText/appDataText";
import imagePsicoterapia from "../../../../images/imageServices/imagePeople.jpeg";

function PsicoterapiaService() {
  return (
    <div className={styles.containerService}>
      <h3 className={styles.titleService}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople1.title
        }
      </h3>
      <p className={styles.phrase}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople1.phrase
        }
      </p>
      <div className={styles.containerImage}>
        <img className={styles.image} alt="" src={imagePsicoterapia} />
      </div>
      <p className={styles.text}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople1.description
        }
      </p>
      <div className={styles.containerBenefist}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople1.benefits.title
          }
        </h4>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople1.benefits.description
          }
        </p>
      </div>
      <div className={styles.containerNote}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople1.note.title
          }
        </h4>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople1.note.note
          }
        </p>
      </div>
      <p className={styles.lenguage}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople1.subtitlelanguage
        }
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople1.language
        }
      </p>
    </div>
  );
}
export default PsicoterapiaService;
