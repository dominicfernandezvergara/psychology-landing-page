import React from "react";
import styles from "./home.module.css";
import FirstSectionHome from "../../components/home-components/first-section-home";
import SecondSectionHome from "../../components/home-components/second-section-home";
import ThirdSectionHome from "../../components/home-components/third-section-home";
import FourthSectionHome from "../../components/home-components/fourth-section-home";
import FifthSectionHome from "../../components/home-components/fifth-section-home/fifth-section-home";
import Footer from "../../components/footer";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import ComponentSeparator from "../../components/component-separator/component-separator";
import SliderSectionHome from "../../components/home-components/slider-section-home";

function Home() {
  UseScrollToTop();
  // <ComponentSeparator />

  return (
    <div className={styles.containerHome}>
      <SliderSectionHome />
      <SecondSectionHome />
      <FourthSectionHome />
      <ThirdSectionHome />
      <FifthSectionHome />
      <Footer />
    </div>
  );
}

export default Home;
