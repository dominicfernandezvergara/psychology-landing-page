import React from "react";

import styles from "./why-choose-us.module.css";
import { appDataText } from "../../../appDataText/appDataText";
import ListIconSection from "./list-icon-section/list-icon-section";

function WhyChooseUs() {
  return (
    <div className={styles.containerThirdSection}>
      <h1 className={styles.title}>
        {appDataText.espanol.home.thirdSectionHome.title}
      </h1>
      <ListIconSection />
    </div>
  );
}

export default WhyChooseUs;
