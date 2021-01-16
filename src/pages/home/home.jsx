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
import { appDataText } from "../../appDataText/appDataText";

function Home() {
  UseScrollToTop();
  return (
    <div className={styles.containerHome}>
      <FirstSectionHome />
      <SecondSectionHome />
      <ComponentSeparator />
      <TextSeparator text={appDataText.english.home.textSeparator.text1} />
      <ComponentSeparator />
      <FourthSectionHome />
      <ComponentSeparator />
      <TextSeparator text={appDataText.english.home.textSeparator.text2} />
      <ComponentSeparator />
      <ThirdSectionHome />
      <FifthSectionHome />
      <Footer />
    </div>
  );
}

export default Home;
