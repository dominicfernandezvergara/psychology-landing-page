import React from "react";

import styles from "./container-service.module.css";

function ContainerService({ title, text }) {
  return (
    <div className={styles.containerTextServicePeople}>
      <div className={styles.shadow}>
        <h3 className={styles.subTitle}>
          {appDataText.english.home.fourthSectionHome.services.people.title}
        </h3>
        <p className={styles.text}>
          {appDataText.english.home.fourthSectionHome.services.people.service1}
        </p>
        <p className={styles.text}>
          {appDataText.english.home.fourthSectionHome.services.people.service2}
        </p>
        <p className={styles.text}>
          {appDataText.english.home.fourthSectionHome.services.people.service3}
        </p>
        <div className={styles.containerButton}>
          <Button
            variant="contained"
            className={styles.button}
            onClick={handleClick}
          >
            {
              appDataText.english.home.fourthSectionHome.services.people
                .buttonText
            }
          </Button>
        </div>
      </div>
    </div>
  );
}
