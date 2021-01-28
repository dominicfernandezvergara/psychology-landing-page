import React from "react";

import styles from "./alimentacion-consciente.module.css";
import { appDataText } from "../../../../appDataText/appDataText";
import imagePsicoterapia from "../../../../images/imageServices/imagePeople.jpeg";

function AlimentacionConsciente() {
  const benefitsList =
    appDataText.espanol.services.naturalPeopleService.serviceNaturalPeople2
      .terapiasComplementarias.terapia2.benefits.benefits;
  const tipsList =
    appDataText.espanol.services.naturalPeopleService.serviceNaturalPeople2
      .terapiasComplementarias.terapia2.tips.tip;
  return (
    <div className={styles.containerService}>
      <h3 className={styles.titleService}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople2.terapiasComplementarias.terapia2.title
        }
      </h3>
      <p className={styles.phrase}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople2.terapiasComplementarias.terapia2.phrase
        }
      </p>
      <div className={styles.containerImage}>
        <img className={styles.image} alt="" src={imagePsicoterapia} />
      </div>
      <div className={styles.containerText}>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia2
              .description
          }
        </p>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia2
              .description2
          }
        </p>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia2
              .description3
          }
        </p>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia2
              .description4
          }
        </p>
      </div>
      <div className={styles.containerBenefist}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia2.benefits
              .title
          }
        </h4>
        <p className={styles.text}>
          {benefitsList.map((item, index) => {
            return (
              <ul key={index}>
                <li>{item}</li>
              </ul>
            );
          })}
        </p>
      </div>
      <div className={styles.containerTip}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia2.tips.title
          }
        </h4>
        <p className={styles.text}>
          {tipsList.map((item, index) => {
            return (
              <ul key={index}>
                <li>{item}</li>
              </ul>
            );
          })}
        </p>
      </div>
      <p className={styles.lenguage}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople2.terapiasComplementarias.terapia2
            .subtitlelanguage
        }
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople2.terapiasComplementarias.terapia2.language
        }
      </p>
    </div>
  );
}
export default AlimentacionConsciente;
