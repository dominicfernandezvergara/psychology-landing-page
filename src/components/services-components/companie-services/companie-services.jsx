import React from "react";

import styles from "./companie-services.module.css";
import UseScrollToTop from "../../../hooks/use-scroll-to-top";
import { appDataText } from "../../../appDataText/appDataText";
import ProgramaAutocuidado from "./programa-autocuidado";

function CompanieServices() {
  UseScrollToTop();
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
