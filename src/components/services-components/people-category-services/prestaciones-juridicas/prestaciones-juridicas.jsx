import React from "react";

import styles from "./prestaciones-juridicas.module.css";
import { appDataText } from "../../../../appDataText/appDataText";
import imagePsicoterapia from "../../../../images/imageServices/imagePeopleCategory/imageAsesoriaLegal.jpg";

function PrestacionesJuridicas() {
  return (
    <div className={styles.containerService}>
      <h2 className={styles.titleService}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople4.title
        }
      </h2>
      <div className={styles.wrappContainer}>
        <div className={styles.containerImage}>
          <img className={styles.image} alt="" src={imagePsicoterapia} />
        </div>
        <div className={styles.containerRight}>
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
        </div>
      </div>
    </div>
  );
}
export default PrestacionesJuridicas;
