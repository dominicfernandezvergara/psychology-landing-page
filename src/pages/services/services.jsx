import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./services.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import { appDataText } from "../../appDataText/appDataText";
import Footer from "../../components/footer/footer";
import PeopleCategoryServices from "../../components/services-components/people-category-services";
import TerapiasComplementarias from "../../components/services-components/terapias-complementarias";
import ProfesionalServices from "../../components/services-components/profesional-services";
import CompanieServices from "../../components/services-components/companie-services";

function Services() {
  UseScrollToTop();

  let location = useLocation();
  const numberValue = location.state?.number || 0;
  return (
    <div className={styles.containerServices}>
      <h1 className={styles.title}>{appDataText.espanol.services.title}</h1>
      <div className={styles.containerService}>
        {numberValue === 0 ? <PeopleCategoryServices /> : null}
        {numberValue === 1 ? <ProfesionalServices /> : null}
        {numberValue === 2 ? <CompanieServices /> : null}
        {numberValue === 3 ? <TerapiasComplementarias /> : null}
      </div>
      <Footer />
    </div>
  );
}
export default Services;
