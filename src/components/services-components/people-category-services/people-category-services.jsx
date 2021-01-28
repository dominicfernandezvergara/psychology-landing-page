import React from "react";

import styles from "./people-category-services.module.css";
import { appDataText } from "../../../appDataText/appDataText";
import PsicoterapiaService from "./psicoterapia-service/psicoterapia-service";
import CharlaPreventivaASI from "./charla-preventiva-ASI/charla-preventiva-ASI";
import PrestacionesJuridicas from "./prestaciones-juridicas/prestaciones-juridicas";

function PeopleCategoryServices() {
  console.log("holaaa");
  return (
    <div className={styles.containerPeopleCategoryServices}>
      <h1 className={styles.title}>
        {appDataText.espanol.services.naturalPeopleService.title}
      </h1>
      {/*Psicoterapia individual y grupal adultos */}
      <PsicoterapiaService />
      <CharlaPreventivaASI />
      <PrestacionesJuridicas />
    </div>
  );
}
export default PeopleCategoryServices;
