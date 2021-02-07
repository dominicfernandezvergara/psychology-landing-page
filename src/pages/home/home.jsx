import React from "react";

import styles from "./home.module.css";
import ThirdSectionHome from "../../components/home-components/third-section-home";
import Footer from "../../components/footer";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import SliderSectionHome from "../../components/home-components/slider-section-home";
import GiftSectionHome from "../../components/home-components/gift-section-home";
import TestimonySlider from "../../components/testimony-slider";
import ServicesSectionHomeTest from "../../components/home-components/fourth-section-home/fourth-section-home";

function Home() {
  UseScrollToTop();
  // <ServicesSectionHome />
  // <SecondSectionHome />
  // <FourthSectionHome />
  // <OfferSectionHome />
  // <AboutSectionHome />
  return (
    <div className={styles.containerHome}>
      <SliderSectionHome />
      <ServicesSectionHomeTest />
      <ThirdSectionHome />
      <GiftSectionHome />
      <TestimonySlider />
      <Footer />
    </div>
  );
}

export default Home;
