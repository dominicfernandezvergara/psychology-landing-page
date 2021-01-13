import React from "react";
import ButtonApp from "../../button";
import cn from "classnames";
import PropTypes from "prop-types";
import ApartmentIcon from "@material-ui/icons/Apartment";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import styles from "./third-section-home.module.css";
import { appDataText } from "../../../appDataText/appDataText";

// la funcion recibe un titulo
//un texto, el texto del boton(buttonText)
//el path para la redireccion que hace el boton(path)
//el color para el boton que puede ser "primary" o "secondary"
//Style que puede ser "black" o nada para que sea de fondo blanco.
function ThirdSectionHome() {
  return (
    <div className={styles.containerThirdSection}>
      <div className={styles.backgroundShadow}>
        <h1 className={styles.title}>
          {appDataText.english.home.thirdSectionHome.title}
        </h1>
        <p className={styles.text}>
          {appDataText.english.home.thirdSectionHome.text}
        </p>
        <div className={styles.containerButtonIcons}>
          <div className={styles.containerButton}>
            <ButtonApp text="starts now" path="/contacto" color="primary" />
          </div>
          <div className={styles.containerIconsSection}>
            <div className={styles.wrapIconsSection}>
              <div className={styles.icon}>
                <InsertEmoticonIcon />
              </div>
              <div className={styles.textIcon}>
                More than 100 happy customers
              </div>
            </div>
            <div className={styles.wrapIconsSection}>
              <div className={styles.icon}>
                <LoyaltyIcon />
              </div>
              <div className={styles.textIcon}>Loyal customers</div>
            </div>
            <div className={styles.wrapIconsSection}>
              <div className={styles.icon}>
                <FavoriteIcon />
              </div>
              <div className={styles.textIcon}>Our clients recommend us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ThirdSectionHome.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  paths: PropTypes.string.isRequired,
  colorButton: PropTypes.string.isRequired,
  text: PropTypes.string,
};
ThirdSectionHome.defaultProps = {
  text: null,
};
export default ThirdSectionHome;
