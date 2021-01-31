import React, { Fragment } from "react";
import AirplayOutlinedIcon from "@material-ui/icons/AirplayOutlined";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import LibraryAddCheckOutlinedIcon from "@material-ui/icons/LibraryAddCheckOutlined";

import styles from "./list-icon-section.module.css";
import { appDataText } from "../../../../appDataText/appDataText";

function ListIconSection() {
  const dataListIconSection = [
    {
      title: appDataText.espanol.home.thirdSectionHome.subtitleIcon1,
      text: appDataText.espanol.home.thirdSectionHome.text1,
      icon: <AirplayOutlinedIcon />,
    },
    {
      title: "Cuidadosa",
      text: appDataText.espanol.home.thirdSectionHome.text2,
      icon: <LoyaltyOutlinedIcon />,
    },
    {
      title: "Segura",
      text: appDataText.espanol.home.thirdSectionHome.text3,
      icon: <VerifiedUserOutlinedIcon />,
    },
    {
      title: "EFICAZ",
      text: appDataText.espanol.home.thirdSectionHome.text4,
      icon: <LibraryAddCheckOutlinedIcon />,
    },
  ];
  return (
    <div className={styles.containerList}>
      {dataListIconSection.map((item, index) => {
        return (
          <div className={styles.wrapp} key={index}>
            <div className={styles.containerIcon}>{item.icon}</div>
            <div className={styles.title}>{item.title}</div>
            <hr className={styles.line} />
            <div className={styles.textIcon}>{item.text}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ListIconSection;
