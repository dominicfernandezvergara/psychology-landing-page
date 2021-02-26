import React from "react";
import Button from "@material-ui/core/Button";

import styles from "./takeFree.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import { appDataText } from "../../appDataText/appDataText";

function TakeFree() {
  UseScrollToTop();

  const bodyTakeFree = appDataText.espanol.takeFree.body;

  return (
    <div className={styles.containerBlog}>
      <h1 className={styles.title}>{appDataText.espanol.takeFree.title}</h1>
      <div className={styles.paddingPage}>
        {bodyTakeFree.map((item, index) => {
          return (
            <div key={index} className={styles.wrapBody}>
              <div className={styles.containerImage}>
                <img
                  alt="takeFreeImage"
                  className={styles.image}
                  src={item.image}
                />
              </div>
              <h3 className={styles.subtitle}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
              {item.text2 && <p className={styles.text}>{item.text2}</p>}
              {item.text3 && <p className={styles.text}>{item.text3}</p>}
              {item.text4 && <p className={styles.text}>{item.text4}</p>}
              <Button variant="contained">
                <a
                  href={item.doc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.dowloadButton}
                >
                  {item.buttonText}
                </a>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TakeFree;
