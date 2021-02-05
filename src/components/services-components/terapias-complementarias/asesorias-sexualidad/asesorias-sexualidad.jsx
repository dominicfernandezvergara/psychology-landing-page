import React from "react";

import styles from "./asesorias-sexualidad.module.css";
import { appDataText } from "../../../../appDataText/appDataText";
import imagePsicoterapia from "../../../../images/imageServices/imageTerapiasComplementarias/imageAsesoriaSexual.jpeg";

function AsesoriasSexualidad() {
  const advisoryList =
    appDataText.espanol.services.naturalPeopleService.serviceNaturalPeople2
      .terapiasComplementarias.terapia3.subServices.service;

  return (
    <div className={styles.containerService}>
      <h3 className={styles.titleService}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople2.terapiasComplementarias.terapia3.title
        }
      </h3>
      <p className={styles.phrase}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople2.terapiasComplementarias.terapia3.phrase
        }
      </p>
      <div className={styles.containerImage}>
        <img className={styles.image} alt="" src={imagePsicoterapia} />
      </div>
      <div className={styles.containerDescripcion}>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia3
              .description
          }
        </p>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia3
              .description2
          }
        </p>
      </div>
      <div className={styles.containerBenefist}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia3
              .subServices.subtitle
          }
        </h4>
        <div className={styles.containerSubServices}>
          {advisoryList.map((item, index) => {
            return (
              <div key={index}>
                <ul>
                  <li>
                    <p className={styles.subtitle}>{item.title}</p>
                    <p className={styles.text}>{item.description}</p>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.lenguage}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia3
              .subtitlelanguage
          }
        </h4>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia3.language
          }
        </p>
      </div>
    </div>
  );
}
export default AsesoriasSexualidad;
