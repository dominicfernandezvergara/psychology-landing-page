import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import cn from "classnames";

import styles from "./footer.module.css";
import Logo from "../logo";
import { appDataText } from "../../appDataText/appDataText";

function Footer() {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.containerLogo}>
        <Logo />
      </div>
      <div className={cn(styles.data, styles.containerServices)}>
        <h3 className={styles.title}>
          {appDataText.english.home.fourthSectionHome.title}
        </h3>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <ArrowForwardIosIcon />
          </div>
          <a href="/servicios" className={styles.text}>
            {appDataText.english.home.fourthSectionHome.services.people.title}
          </a>
        </div>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <ArrowForwardIosIcon />
          </div>
          <a href="/servicios" className={styles.text}>
            {
              appDataText.english.home.fourthSectionHome.services.profesional
                .title
            }
          </a>
        </div>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <ArrowForwardIosIcon />
          </div>
          <a href="/servicios" className={styles.text}>
            {
              appDataText.english.home.fourthSectionHome.services.companies
                .title
            }
          </a>
        </div>
      </div>
      <div className={styles.data}>
        <h3 className={styles.title}>Contacta con nosotros</h3>
        <p className={styles.addresse}>
          Contramaestre Micalvi #522, of.42, Ñuñoa
        </p>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <ArrowForwardIosIcon />
          </div>
          <a href="tel:5551234567" className={styles.text}>
            Teléfono : +56222225473
          </a>
        </div>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <ArrowForwardIosIcon />
          </div>
          <a href="mailto: abc@example.com" className={styles.text}>
            E-mail : info@contacto.cl
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
