import React from "react";

import styles from "./charla-preventiva-ASI.module.css";
import { appDataText } from "../../../../appDataText/appDataText";
import imagePsicoterapia from "../../../../images/imageServices/imagePeopleCategory/ASI.jpg";

function CharlaPreventivaASI() {
  return (
    <div className={styles.containerService}>
      <div className={styles.containerImage}>
        <img className={styles.image} alt="" src={imagePsicoterapia} />
      </div>
      <h2 className={styles.titleService}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople3.title
        }
      </h2>
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
      <p className={styles.text}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople3.description3
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
              .serviceNaturalPeople3.benefits.description2
          }
        </p>
      </div>
      <div className={styles.lenguage}>
        <h4 className={styles.subtitleLenguage}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople3.subtitlelanguage
          }
        </h4>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople3.language
          }
        </p>
      </div>
    </div>
  );
}
export default CharlaPreventivaASI;
