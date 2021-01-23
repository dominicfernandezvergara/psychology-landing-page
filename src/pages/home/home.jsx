import React from "react";
import styles from "./home.module.css";
import SecondSectionHome from "../../components/home-components/second-section-home";
import ThirdSectionHome from "../../components/home-components/third-section-home";
import FourthSectionHome from "../../components/home-components/fourth-section-home";
import Footer from "../../components/footer";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import SliderSectionHome from "../../components/home-components/slider-section-home";
import GiftSectionHome from "../../components/home-components/gift-section-home";
import OfferSectionHome from "../../components/home-components/offer-section-home";

function Home() {
  UseScrollToTop();

  return (
    <div className={styles.containerHome}>
      <SliderSectionHome />
      <SecondSectionHome />
      <FourthSectionHome />
      <ThirdSectionHome />
      <OfferSectionHome />
      <GiftSectionHome />
      <Footer />
    </div>
  );
}

export default Home;
