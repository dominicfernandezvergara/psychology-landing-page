import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import styles from "./programa-autocuidado.module.css";
import { appDataText } from "../../../../appDataText/appDataText";
import imagePsicoterapia from "../../../../images/imageServices/imageCompanieServices/imageAutoCuidado.png";

function ProgramaAutocuidado() {
  const history = useHistory();
  const onClickButtonPeopleServices = () => {
    history.push({
      pathname: appDataText.espanol.header.contactUs.path,
    });
  };
  return (
    <div className={styles.containerService}>
      <div className={styles.containerImage}>
        <img className={styles.image} alt="" src={imagePsicoterapia} />
      </div>
      <h2 className={styles.titleService}>
        {appDataText.espanol.services.companiesServices.companieService1.title}
      </h2>
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
      <Button variant="contained" onClick={onClickButtonPeopleServices}>
        {appDataText.espanol.services.buttonText}
      </Button>
    </div>
  );
}
export default ProgramaAutocuidado;
