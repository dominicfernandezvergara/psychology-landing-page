import React from "react";
import { useHistory } from "react-router-dom";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import AddIcon from "@material-ui/icons/Add";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import cn from "classnames";

import styles from "./offer-section-home.module.css";
import { appDataText } from "../../../appDataText/appDataText";

function OfferSectionHome() {
  const history = useHistory();
  const onClick = () => {
    history.push("/Nosotros");
  };
  return (
    <div className={styles.containerOfferSectionHome}>
      <h1 className={styles.title}>
        Promoción para iniciar tu proceso de cambio
      </h1>
      <div className={styles.wrappContainer}>
        <div className={styles.containerLeft}>
          <h3 className={styles.subtitle}>¿Tienes alguna pregunta?</h3>
          <div className={styles.containerText}>
            <div className={styles.containerDescription}>
              <p className={styles.text}>
                {appDataText.espanol.home.secondSectionHome.description}
              </p>
              <p className={styles.text}>
                {appDataText.espanol.home.secondSectionHome.description2}
              </p>
              <p className={styles.text}>
                {appDataText.espanol.home.secondSectionHome.description3}
              </p>
            </div>
          </div>
          <button
            className={cn(styles.button, styles.buttonLeft)}
            type="button"
            onClick={onClick}
          >
            Contactanos
          </button>
        </div>
        <div className={styles.containerRight}>
          <div className={styles.containerIcon}>
            <FingerprintIcon />
          </div>
          <h1 className={styles.subtitleRight}>Promoción</h1>
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
          <button className={styles.button} type="button" onClick={onClick}>
            Comienza Aquí
          </button>
        </div>
      </div>
    </div>
  );
}

export default OfferSectionHome;
