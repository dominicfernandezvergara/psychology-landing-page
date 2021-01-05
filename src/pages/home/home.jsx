import React from "react";
import styles from "./home.module.css";
import FirstSectionHome from "../../components/home-components/first-section-home";
import SecondSectionHome from "../../components/home-components/second-section-home";
import ThirdSectionHome from "../../components/home-components/third-section-home";
import FourthSectionHome from "../../components/home-components/fourth-section-home";
import FifthSectionHome from "../../components/home-components/fifth-section-home/fifth-section-home";
import Footer from "../../components/footer";
import UseScrollToTop from "../../hooks/use-scroll-to-top";

function Home() {
  UseScrollToTop();
  return (
    <div className={styles.containerHome}>
      <FirstSectionHome />
      <SecondSectionHome
        title="Problema a Solucionar"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua hola."
        buttonText="schedule now"
        paths="./contacto"
        colorButton="primary"
      />
      <ThirdSectionHome
        title="I'm ready when you are!"
        text="I know this is hard. You've likely been debating seeking help for months, if not years. But I'm so glad you found me and have taken the courageous step of being here."
        buttonText="schedule now"
        paths="./contacto"
        colorButton="primary"
        styleBlack={true}
      />
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
