import React from "react";

import styles from "./psicoterapia-service.module.css";
import { appDataText } from "../../../../appDataText/appDataText";
import imagePsicoterapia from "../../../../images/imageServices/imagePeopleCategory/imagePsicoterapiaOnline.jpg";

function PsicoterapiaService() {
  return (
    <div className={styles.containerService}>
      <h2 className={styles.titleService}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople1.title
        }
      </h2>
      <div className={styles.wrappContainer}>
        <div className={styles.containerImage}>
          <img className={styles.image} alt="" src={imagePsicoterapia} />
        </div>
        <div className={styles.containerRight}>
          <div className={styles.containerText}>
            <p className={styles.text}>
              {
                appDataText.espanol.services.naturalPeopleService
                  .serviceNaturalPeople1.description
              }
            </p>
          </div>
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

          <div className={styles.lenguage}>
            <h4 className={styles.subtitleLenguage}>
              {
                appDataText.espanol.services.naturalPeopleService
                  .serviceNaturalPeople1.subtitlelanguage
              }
            </h4>
            <p>
              {
                appDataText.espanol.services.naturalPeopleService
                  .serviceNaturalPeople1.language
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PsicoterapiaService;
