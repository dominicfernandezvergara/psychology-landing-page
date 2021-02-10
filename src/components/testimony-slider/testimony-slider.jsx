import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import styles from "./testimony-slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { appDataText } from "../../appDataText/appDataText";

function TestimonySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const [settingSlider, setSettingSlider] = useState(settings);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSettingSlider({
        ...settings,
        autoplay: false,
      });
    }
  }, [settings]);
  return (
    <div className={styles.containerTestimonySlider}>
      <h1 className={styles.title}> {appDataText.espanol.testimony.title}</h1>
      <Slider {...settingSlider} className={styles.slider}>
        <div className={styles.curved}>
          <h3 className={styles.testimonyTitle}>
            {appDataText.espanol.testimony.testimony1.title}
          </h3>
          <div className={styles.testimonyText}>
            <p className={styles.comillaStart}>“</p>
            <p className={styles.text}>
              {appDataText.espanol.testimony.testimony1.text}
            </p>
            <p className={styles.comillaEnd}>”</p>
            <h4 className={styles.testimonySubtitle}>
              {appDataText.espanol.testimony.testimony1.subtitle}
            </h4>
          </div>
        </div>
        <div className={styles.curved}>
          <h3 className={styles.testimonyTitle}>
            {appDataText.espanol.testimony.testimony2.title}
          </h3>
          <div className={styles.testimonyText}>
            <p className={styles.comillaStart}>“</p>
            <p className={styles.text}>
              {appDataText.espanol.testimony.testimony2.text}
            </p>
            <p className={styles.text}>
              {appDataText.espanol.testimony.testimony2.text2}
            </p>
            <p className={styles.text}>
              {appDataText.espanol.testimony.testimony2.text3}
            </p>
            <p className={styles.comillaEnd}>”</p>
            <h4 className={styles.testimonySubtitle}>
              {appDataText.espanol.testimony.testimony2.subtitle}
            </h4>
          </div>
        </div>
        <div className={styles.curved}>
          <h3 className={styles.testimonyTitle}>
            {appDataText.espanol.testimony.testimony3.title}
          </h3>
          <div className={styles.testimonyText}>
            <p className={styles.comillaStart}>“</p>
            <p className={styles.text}>
              {appDataText.espanol.testimony.testimony3.text}
            </p>
            <p className={styles.comillaEnd}>”</p>
            <h4 className={styles.testimonySubtitle}>
              {appDataText.espanol.testimony.testimony3.subtitle}
            </h4>
          </div>
        </div>
        <div className={styles.curved}>
          <h3 className={styles.testimonyTitle}>
            {appDataText.espanol.testimony.testimony4.title}
          </h3>
          <div className={styles.testimonyText}>
            <p className={styles.comillaStart}>“</p>
            <p className={styles.text}>
              {appDataText.espanol.testimony.testimony4.text}
            </p>
            <p className={styles.comillaEnd}>”</p>
            <h4 className={styles.testimonySubtitle}>
              {appDataText.espanol.testimony.testimony4.subtitle}
            </h4>
          </div>
        </div>
        <div className={styles.curved}>
          <h3 className={styles.testimonyTitle}>
            {appDataText.espanol.testimony.testimony5.title}
          </h3>
          <div className={styles.testimonyText}>
            <p className={styles.comillaStart}>“</p>
            <p className={styles.text}>
              {appDataText.espanol.testimony.testimony5.text}
            </p>
            <p className={styles.comillaEnd}>”</p>
            <h4 className={styles.testimonySubtitle}>
              {appDataText.espanol.testimony.testimony5.subtitle}
            </h4>
          </div>
        </div>
        <div className={styles.curved}>
          <h3 className={styles.testimonyTitle}>
            {appDataText.espanol.testimony.testimony6.title}
          </h3>
          <div className={styles.testimonyText}>
            <p className={styles.comillaStart}>“</p>
            <p className={styles.text}>
              {appDataText.espanol.testimony.testimony6.text}
            </p>
            <p className={styles.comillaEnd}>”</p>
            <h4 className={styles.testimonySubtitle}>
              {appDataText.espanol.testimony.testimony6.subtitle}
            </h4>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default TestimonySlider;
