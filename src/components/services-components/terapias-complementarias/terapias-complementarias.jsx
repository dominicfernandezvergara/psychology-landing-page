import React from "react";

import styles from "./terapias-complementarias.module.css";
import { appDataText } from "../../../appDataText/appDataText";
import RespiracionConsciente from "./respiracion-consciente";
import AlimentacionConsciente from "./alimentacion-consciente";

function TerapiasComplementarias() {
  return (
    <div className={styles.containerTerapiasComplementarias}>
      <h1 className={styles.title}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople2.title
        }
      </h1>
      <p className={styles.phrase}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople2.phrase
        }
      </p>
      <RespiracionConsciente />
      <AlimentacionConsciente />
    </div>
  );
}
export default TerapiasComplementarias;
