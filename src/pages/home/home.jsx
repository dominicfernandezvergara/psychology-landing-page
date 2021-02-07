import React from "react";

import styles from "./home.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import SliderSectionHome from "../../components/home-components/slider-section-home";
import ServicesSectionHome from "../../components/home-components/services-section-home";
import WhyChooseUs from "../../components/home-components/why-choose-us";
import GiftSectionHome from "../../components/home-components/gift-section-home";
import TestimonySlider from "../../components/testimony-slider";
import Footer from "../../components/footer";

function Home() {
  UseScrollToTop();
  return (
    <div className={styles.containerHome}>
      <SliderSectionHome />
      <ServicesSectionHome />
      <WhyChooseUs />
      <GiftSectionHome />
      <TestimonySlider />
      <Footer />
    </div>
  );
}

export default Home;
