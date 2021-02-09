import React from "react";

import styles from "./terapias-complementarias.module.css";
import UseScrollToTop from "../../../hooks/use-scroll-to-top";
import { appDataText } from "../../../appDataText/appDataText";
import RespiracionConsciente from "./respiracion-consciente";
import AlimentacionConsciente from "./alimentacion-consciente";
import AsesoriasSexualidad from "./asesorias-sexualidad";
import MedicinaHuevoYoni from "./medicina-huevo-yoni";
import CartaAstral from "./carta-astral/carta-astral";
import ConstelacionesFamiliares from "./constelaciones-familiares";
import TarotTerapeutico from "./tarot-terapeutico";

function TerapiasComplementarias() {
  UseScrollToTop();
  return (
    <div className={styles.containerTerapiasComplementarias}>
      <h1 className={styles.title}>
        {
          appDataText.espanol.services.naturalPeopleService
            .serviceNaturalPeople2.title
        }
      </h1>

      <RespiracionConsciente />
      <AlimentacionConsciente />
      <AsesoriasSexualidad />
      <MedicinaHuevoYoni />
      <CartaAstral />
      <ConstelacionesFamiliares />
      <TarotTerapeutico />
    </div>
  );
}
export default TerapiasComplementarias;
