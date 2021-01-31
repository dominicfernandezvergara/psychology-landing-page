import React from "react";

import styles from "./profesional-services.module.css";
import { appDataText } from "../../../appDataText/appDataText";
import SupervisionCasos from "./supervision-casos/supervision-casos";

function ProfesionalServices() {
  return (
    <div className={styles.containerProfesionalServices}>
      <h1 className={styles.title}>
        {appDataText.espanol.services.profesionalServices.title}
      </h1>
      <SupervisionCasos />
    </div>
  );
}
export default ProfesionalServices;
