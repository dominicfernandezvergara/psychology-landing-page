import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import styles from "./respiracion-consciente.module.css";
import { appDataText } from "../../../../appDataText/appDataText";
import imagePsicoterapia from "../../../../images/imageServices/imageTerapiasComplementarias/act1-Respiracion consiente 1.jpg";

function RespiracionConsciente() {
  const history = useHistory();
  const onClickButtonPeopleServices = () => {
    history.push({
      pathname: appDataText.espanol.header.contactUs.path,
    });
  };
  const benefitsList =
    appDataText.espanol.services.naturalPeopleService.serviceNaturalPeople2
      .terapiasComplementarias.terapia1.benefits.Benefits;
  const tipsList =
    appDataText.espanol.services.naturalPeopleService.serviceNaturalPeople2
      .terapiasComplementarias.terapia1.tips.tip;
  return (
    <div className={styles.containerService}>
      <div className={styles.containerImage}>
        <img className={styles.image} alt="" src={imagePsicoterapia} />
      </div>
      <h2 className={styles.titleService}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople2.terapiasComplementarias.terapia1.title
        }
      </h2>
      <div className={styles.containerDescripcion}>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia1
              .description
          }
        </p>
      </div>
      <div className={styles.containerBenefist}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia1.benefits
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
      <div className={styles.containerTip}>
        <h4 className={styles.subtitle}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia1.tips.title
          }
        </h4>
        <div className={styles.text}>
          {tipsList.map((item, index) => {
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
              .serviceNaturalPeople2.terapiasComplementarias.terapia1
              .subtitlelanguage
          }
        </h4>
        <p className={styles.text}>
          {
            appDataText.espanol.services.naturalPeopleService
              .serviceNaturalPeople2.terapiasComplementarias.terapia1.language
          }
        </p>
      </div>
      <Button variant="contained" onClick={onClickButtonPeopleServices}>
        {appDataText.espanol.services.buttonText}
      </Button>
    </div>
  );
}
export default RespiracionConsciente;
