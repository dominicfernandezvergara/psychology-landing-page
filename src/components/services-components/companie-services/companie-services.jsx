import React from "react";

import styles from "./companie-services.module.css";
import { appDataText } from "../../../appDataText/appDataText";
import ProgramaAutocuidado from "./programa-autocuidado";

function CompanieServices() {
  return (
    <div className={styles.containerCompanieServices}>
      <h1 className={styles.title}>
        {appDataText.espanol.services.companiesServices.title}
      </h1>
      <ProgramaAutocuidado />
    </div>
  );
}
export default CompanieServices;
