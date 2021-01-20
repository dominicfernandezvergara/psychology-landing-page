import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./container-service.module.css";

function ContainerService({
  title,
  image,
  body,
  imageRight,
  textButton,
  classNameContainerText,
  classNameContainerBody,
}) {
  const handleClick = () => {
    console.log("onClick");
    // history.push("./servicios");
  };
  return (
    <Fragment>
      {/* Small View */}
      <div className={styles.containerService}>
        <img className={styles.image} alt="" src={image} />
        <div className={styles.containerTextService}>
          <h3 className={styles.subTitle}>{title}</h3>
          <div className={cn(styles.containerbody, classNameContainerBody)}>
            {body}{" "}
            <a className={styles.button} href="/contacto">
              Leer más
            </a>
          </div>
          {/*<div className={styles.containerButton}>
            <a className={styles.button} href="/contacto">
              Leer más
  </a>
          </div>*/}
        </div>
      </div>
      {/* Small View */}

      {/* Large View */}
      <div className={styles.containerServiceLarge}>
        {!imageRight && (
          <img className={styles.imageLarge} alt="left" src={image} />
        )}
        <div
          className={cn(styles.containerTextService, classNameContainerText)}
        >
          <h3 className={styles.subTitle}>{title}</h3>
          <div className={styles.containerbody}>
            {body}
            <a className={styles.button} href="/contacto">
              Leer más
            </a>
          </div>
        </div>
        {imageRight && (
          <img className={styles.imageLarge} alt="right" src={image} />
        )}
      </div>
      {/* Large View */}
    </Fragment>
  );
}

ContainerService.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  imageRight: PropTypes.bool,
  classNameContainerText: PropTypes.string,
  classNameContainerBody: PropTypes.string,
};
ContainerService.defaultProps = {
  imageRight: false,
  classNameContainerText: "",
  classNameContainerBody: "",
};
export default ContainerService;
