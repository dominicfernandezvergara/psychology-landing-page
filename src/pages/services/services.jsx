import React from "react";

import styles from "./services.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import { appDataText } from "../../appDataText/appDataText";
import Footer from "../../components/footer/footer";
import PeopleCategoryServices from "../../components/services-components/people-category-services";
import TerapiasComplementarias from "../../components/services-components/terapias-complementarias";
import ProfesionalServices from "../../components/services-components/profesional-services/profesional-services";
function Services() {
  UseScrollToTop();

  // <PeopleCategoryServices />
  // <TerapiasComplementarias />
  return (
    <div className={styles.containerServices}>
      <h1 className={styles.title}>{appDataText.espanol.services.title}</h1>
      <div className={styles.containerService}>
        <ProfesionalServices />
      </div>
      <Footer />
    </div>
  );
}
export default Services;
