import React from "react";

import styles from "./supervision-casos.module.css";
import { appDataText } from "../../../../appDataText/appDataText";
import imagePsicoterapia from "../../../../images/imageServices/imagePeople.jpeg";

function SupervisionCasos() {
  const noteList =
    appDataText.espanol.services.profesionalServices.serviceProfesionalServices3
      .note.note;
  const stepList =
    appDataText.espanol.services.profesionalServices.serviceProfesionalServices3
      .step.step;
  return (
    <div className={styles.containerService}>
      <h3 className={styles.titleService}>
        {
          appDataText.espanol.services.profesionalServices
            .serviceProfesionalServices3.title
        }
      </h3>
      <div className={styles.phrase}>
        {
          appDataText.espanol.services.profesionalServices
            .serviceProfesionalServices3.phrase
        }
      </div>
      <div className={styles.containerImage}>
        <img className={styles.image} alt="" src={imagePsicoterapia} />
      </div>
      <div className={styles.containerDescripcion}>
        <div className={styles.text}>
          {
            appDataText.espanol.services.profesionalServices
              .serviceProfesionalServices3.description
          }
        </div>
      </div>
      <div className={styles.containerNote}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.profesionalServices
              .serviceProfesionalServices3.note.title
          }
        </h4>
        <ul>
          {noteList.map((item, index) => {
            return (
              <li className={styles.text} key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.containerSteps}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.profesionalServices
              .serviceProfesionalServices3.step.title
          }
        </h4>
        <ol>
          {stepList.map((item, index) => {
            return (
              <li key={index} className={styles.text}>
                {item}
              </li>
            );
          })}
        </ol>
      </div>
      <div className={styles.lenguage}>
        {
          appDataText.espanol.services.profesionalServices
            .serviceProfesionalServices3.subtitlelanguage
        }
        {
          appDataText.espanol.services.profesionalServices
            .serviceProfesionalServices3.language
        }
      </div>
    </div>
  );
}
export default SupervisionCasos;
