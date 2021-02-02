import React from "react";

import styles from "./programa-autocuidado.module.css";
import { appDataText } from "../../../../appDataText/appDataText";
import imagePsicoterapia from "../../../../images/imageServices/imageCompanieServices/imageAutocuidado.jpg";

function ProgramaAutocuidado() {
  return (
    <div className={styles.containerService}>
      <h3 className={styles.titleService}>
        {appDataText.espanol.services.companiesServices.companieService1.title}
      </h3>
      <div className={styles.phrase}>
        {appDataText.espanol.services.companiesServices.companieService1.phrase}
      </div>
      <div className={styles.containerImage}>
        <img className={styles.image} alt="" src={imagePsicoterapia} />
      </div>
      <div className={styles.containerDescripcion}>
        <div className={styles.text}>
          {
            appDataText.espanol.services.companiesServices.companieService1
              .description1
          }
        </div>
        <div className={styles.text}>
          {
            appDataText.espanol.services.companiesServices.companieService1
              .description2
          }
        </div>
        <div className={styles.text}>
          {
            appDataText.espanol.services.companiesServices.companieService1
              .description3
          }
        </div>
        <div className={styles.text}>
          {
            appDataText.espanol.services.companiesServices.companieService1
              .description4
          }
        </div>
      </div>

      <div className={styles.containerSymptoms}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.companiesServices.companieService1
              .symptoms.title
          }
        </h4>
        <ul>
          <li className={styles.text}>
            {
              appDataText.espanol.services.companiesServices.companieService1
                .symptoms.symptoms1
            }
          </li>
          <li className={styles.text}>
            {
              appDataText.espanol.services.companiesServices.companieService1
                .symptoms.symptoms2
            }
          </li>
          <li className={styles.text}>
            {
              appDataText.espanol.services.companiesServices.companieService1
                .symptoms.symptoms3
            }
          </li>
          <li className={styles.text}>
            {
              appDataText.espanol.services.companiesServices.companieService1
                .symptoms.symptoms4
            }
          </li>
        </ul>
      </div>
      <div className={styles.containerNote}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.companiesServices.companieService1.note
              .title
          }
        </h4>
        <div className={styles.text}>
          {
            appDataText.espanol.services.companiesServices.companieService1.note
              .note
          }
        </div>
        <div className={styles.text}>
          {
            appDataText.espanol.services.companiesServices.companieService1.note
              .note2
          }
        </div>
        <div className={styles.text}>
          {
            appDataText.espanol.services.companiesServices.companieService1.note
              .note3
          }
        </div>
      </div>
      <div className={styles.lenguage}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.profesionalServices
              .serviceProfesionalServices3.subtitlelanguage
          }
        </h4>
        <p className={styles.text}>
          {
            appDataText.espanol.services.profesionalServices
              .serviceProfesionalServices3.language
          }
        </p>
      </div>
    </div>
  );
}
export default ProgramaAutocuidado;
