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
      <h1 className={styles.title}>{appDataText.espanol.home.offer.title}</h1>
      <div className={styles.wrappContainer}>
        <div className={styles.containerLeft}>
          <div className={styles.containerText}>
            <div className={styles.containerDescription}>
              <p className={styles.text}>
                {appDataText.espanol.home.offer.text3}
              </p>
              <p className={styles.text}>
                {appDataText.espanol.home.offer.text4}
              </p>
            </div>
          </div>
          <Button variant="contained" onClick={onClick}>
            {appDataText.espanol.home.offer.buttonText}
          </Button>
        </div>
        <div className={styles.containerRight}>
          <h2 className={styles.subtitleRight}>
            {appDataText.espanol.home.offer.subtitle}
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
            {appDataText.espanol.home.offer.buttonText2}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OfferSectionHome;
