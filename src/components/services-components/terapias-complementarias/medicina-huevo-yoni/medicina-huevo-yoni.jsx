import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import styles from "./medicina-huevo-yoni.module.css";
import { appDataText } from "../../../../appDataText/appDataText";
import imagePsicoterapia from "../../../../images/imageServices/imageTerapiasComplementarias/act1-Huevo Yoni servicio.jpg";

function MedicinaHuevoYoni() {
  const history = useHistory();
  const onClickButtonPeopleServices = () => {
    history.push({
      pathname: appDataText.espanol.header.contactUs.path,
    });
  };
  const benefitsList =
    appDataText.espanol.services.naturalPeopleService.serviceNaturalPeople2
      .terapiasComplementarias.terapia4.benefits.benefits;

  return (
    <div className={styles.containerService}>
      <div className={styles.containerImage}>
        <img className={styles.image} alt="" src={imagePsicoterapia} />
      </div>
      <h2 className={styles.titleService}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople2.terapiasComplementarias.terapia4.title
        }
      </h2>
      <div className={styles.containerDescripcion}>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia4
              .description
          }
        </p>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia4
              .description2
          }
        </p>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia4
              .description3
          }
        </p>
      </div>
      <div className={styles.containerUse}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia4.use.title
          }
        </h4>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia4.use
              .description
          }
        </p>
      </div>
      <div className={styles.containerBenefist}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia4.benefits
              .title
          }
        </h4>
        <div className={styles.text}>
          {benefitsList.map((item, index) => {
            return (
              <ul key={index}>
                <li>{item}</li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className={styles.lenguage}>
        <h4 className={styles.subtitleLenguage}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia4
              .subtitlelanguage
          }
        </h4>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia4.language
          }
        </p>
      </div>
      <Button variant="contained" onClick={onClickButtonPeopleServices}>
        {appDataText.espanol.services.buttonText}
      </Button>
    </div>
  );
}
export default MedicinaHuevoYoni;
