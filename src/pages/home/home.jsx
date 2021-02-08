import React from "react";

import styles from "./home.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import SliderSectionHome from "../../components/home-components/slider-section-home";
import ServicesSectionHome from "../../components/home-components/services-section-home";
import WhyChooseUs from "../../components/home-components/why-choose-us";
import GiftSectionHome from "../../components/home-components/gift-section-home";
import TestimonySlider from "../../components/testimony-slider";
import Footer from "../../components/footer";
import Banner from "../../components/home-components/banner";
import OfferSectionHome from "../../components/home-components/offer-section-home/offer-section-home";

function Home() {
  UseScrollToTop();
  // <OfferSectionHome />

  return (
    <div className={styles.containerHome}>
      <Banner />
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
