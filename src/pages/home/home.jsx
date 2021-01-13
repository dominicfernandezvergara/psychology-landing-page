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
import TextSeparator from "../../components/text-separator/text-separator";

function Home() {
  UseScrollToTop();
  return (
    <div className={styles.containerHome}>
      <FirstSectionHome />
      <SecondSectionHome />
      <ComponentSeparator />
      <TextSeparator text="Are you ready to live a stable, well-balanced life?" />
      <ComponentSeparator />
      <ThirdSectionHome />
      <ComponentSeparator />
      <TextSeparator text="In you is the power to transmute everything" />
      <ComponentSeparator />
      <FourthSectionHome />
      <FifthSectionHome
        title="How it work?"
        buttonText="schedule now"
        paths="./contacto"
        colorButton="secondary"
        styleBlack={true}
      />
      <Footer />
    </div>
  );
}

export default Home;
