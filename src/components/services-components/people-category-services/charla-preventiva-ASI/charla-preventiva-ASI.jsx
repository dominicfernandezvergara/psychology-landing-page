import React from "react";

import styles from "./charla-preventiva-ASI.module.css";
import { appDataText } from "../../../../appDataText/appDataText";
import imagePsicoterapia from "../../../../images/imageServices/imageASI.png";

function CharlaPreventivaASI() {
  const tipList =
    appDataText.espanol.services.naturalPeopleService.serviceNaturalPeople3.tips
      .tip;
  const aletList =
    appDataText.espanol.services.naturalPeopleService.serviceNaturalPeople3
      .alerts.tip;

  return (
    <div className={styles.containerService}>
      <h3 className={styles.titleService}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople3.title
        }
      </h3>

      <div className={styles.containerImage}>
        <img className={styles.image} alt="" src={imagePsicoterapia} />
      </div>
      <div className={styles.containerText}></div>
      <p className={styles.text}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople3.description
        }
      </p>
      <p className={styles.text}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople3.description2
        }
      </p>
      <div className={styles.containerBenefist}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople3.benefits.title
          }
        </h4>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople3.benefits.description
          }
        </p>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople3.benefits.description2
          }
        </p>
      </div>
      <div className={styles.containerTips}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople3.tips.subtitle
          }
        </h4>
        <p className={styles.text}>
          {tipList.map((item, index) => {
            return (
              <ul key={index}>
                <li>{item}</li>
              </ul>
            );
          })}
        </p>
      </div>
      <div className={styles.containerAlert}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople3.alerts.subtitle
          }
        </h4>
        <p className={styles.text}>
          {aletList.map((item, index) => {
            return (
              <ul key={index}>
                <li>{item}</li>
              </ul>
            );
          })}
        </p>
      </div>
      <div className={styles.containerNote}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople3.note.title
          }
        </h4>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople3.note.note
          }
        </p>
      </div>
      <p className={styles.lenguage}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople3.subtitlelanguage
        }
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople3.language
        }
      </p>
    </div>
  );
}
export default CharlaPreventivaASI;
