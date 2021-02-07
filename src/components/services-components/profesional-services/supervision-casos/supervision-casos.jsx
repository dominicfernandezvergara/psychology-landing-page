import React from "react";

import styles from "./supervision-casos.module.css";
import { appDataText } from "../../../../appDataText/appDataText";
import imagePsicoterapia from "../../../../images/imageServices/imageProfesionalServices/imageSupervisionCasos2.jpg";

function SupervisionCasos() {
  const noteList =
    appDataText.espanol.services.profesionalServices.serviceProfesionalServices3
      .note.note;
  const stepList =
    appDataText.espanol.services.profesionalServices.serviceProfesionalServices3
      .step.step;
  return (
    <div className={styles.containerService}>
      <div className={styles.containerImage}>
        <img className={styles.image} alt="" src={imagePsicoterapia} />
      </div>
      <h2 className={styles.titleService}>
        {
          appDataText.espanol.services.profesionalServices
            .serviceProfesionalServices3.title
        }
      </h2>
      <div className={styles.containerText}>
        <div className={styles.text}>
          {
            appDataText.espanol.services.profesionalServices
              .serviceProfesionalServices3.description
          }
        </div>
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
      <div className={styles.lenguage}>
        <h4 className={styles.subtitleLenguage}>
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
export default SupervisionCasos;
