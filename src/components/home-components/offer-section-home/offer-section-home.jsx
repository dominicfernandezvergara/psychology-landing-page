import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import FingerprintIcon from "@material-ui/icons/Fingerprint";

import styles from "./offer-section-home.module.css";
import { appDataText } from "../../../appDataText/appDataText";

function OfferSectionHome() {
  const history = useHistory();
  const onClick = () => {
    history.push("/contacto");
  };
  //   <div className={styles.containerIcon}>
  //   <FingerprintIcon />
  // </div>
  return (
    <div className={styles.containerOfferSectionHome}>
      <h1 className={styles.title}>
        Promoción para iniciar tu proceso de cambio
      </h1>
      <div className={styles.wrappContainer}>
        <div className={styles.containerLeft}>
          <div className={styles.containerText}>
            <div className={styles.containerDescription}>
              <p className={styles.text}>
                {appDataText.espanol.aboutUs.especialText}
              </p>
              <p className={styles.text}>
                {appDataText.espanol.aboutUs.especialText2}
              </p>
            </div>
          </div>
          <Button variant="contained" onClick={onClick}>
            {appDataText.espanol.home.banner.buttonText}
          </Button>
        </div>
        <div className={styles.containerRight}>
          <h2 className={styles.subtitleRight}>
            Servicio recomendado para empezar psicoterapia.
          </h2>
          <h1 className={styles.price}>€39</h1>
          <div className={styles.containerOffer}>
            <p className={styles.textRight}>
              {appDataText.espanol.home.offer.text}
            </p>
            <AddIcon />
            <p className={styles.textRight}>
              {appDataText.espanol.home.offer.text1}
            </p>
            <AddIcon />
            <p className={styles.textRight}>
              {appDataText.espanol.home.offer.text2}
            </p>
          </div>
          <Button variant="contained" onClick={onClick}>
            {appDataText.espanol.home.banner.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OfferSectionHome;
