import React from "react";
import styles from "./home.module.css";
import SecondSectionHome from "../../components/home-components/second-section-home";
import ThirdSectionHome from "../../components/home-components/third-section-home";
import Footer from "../../components/footer";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import SliderSectionHome from "../../components/home-components/slider-section-home";
import GiftSectionHome from "../../components/home-components/gift-section-home";
import TestimonySlider from "../../components/testimony-slider";
import ServicesSectionHome from "../../components/home-components/services-section-home/services-section-home";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import ServicesSectionHomeTest from "../../components/home-components/fourth-section-home/fourth-section-home";
// Todo:
// ver si dejar slider de testimonios

function Home() {
  UseScrollToTop();
  // <ServicesSectionHome />

  // <FourthSectionHome />
  return (
    <div className={styles.containerHome}>
      <SliderSectionHome />
      <SecondSectionHome />
      <ServicesSectionHomeTest />
      <ThirdSectionHome />
      <GiftSectionHome />
      <TestimonySlider />
      <Footer />
    </div>
  );
}

export default Home;
