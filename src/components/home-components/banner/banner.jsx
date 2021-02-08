import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import styles from "./banner.module.css";
import { appDataText } from "../../../appDataText/appDataText";

function Banner() {
  const history = useHistory();

  const handleClick = () => {
    history.push(appDataText.espanol.home.banner.path);
  };
  return (
    <div className={styles.containerBanner}>
      <div className={styles.containerText}>
        <h1 className={styles.title}>
          {appDataText.espanol.home.banner.title}
        </h1>
        <p className={styles.text}>{appDataText.espanol.home.banner.text}</p>
        <Button variant="contained" onClick={handleClick}>
          {appDataText.espanol.home.banner.buttonText}
        </Button>
      </div>
    </div>
  );
}

export default Banner;
