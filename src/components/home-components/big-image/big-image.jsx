import React from "react";

import styles from "./big-image.module.css";
import image from "../../../images/bigImageHome/FB_IMG_1607172236711.jpg";

function BigImageHome() {
  return (
    <div className={styles.containerBigImage}>
      <img src={image} alt="" className={styles.image}></img>
    </div>
  );
}

export default BigImageHome;
