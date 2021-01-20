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
      text:
        "Por Videollamada. Desde el lugar que tu prefieras y en un horario conveniente para ti.",
      icon: <AirplayOutlinedIcon />,
    },
    {
      title: "Cuidadosa",
      text: "100% confidencial y libre de críticas. ¡Estás en buenas manos!",
      icon: <LoyaltyOutlinedIcon />,
    },
    {
      title: "Segura",
      text: "Mantenemos los más altos estándares de integridad y ética.",
      icon: <VerifiedUserOutlinedIcon />,
    },
    {
      title: "EFICAZ",
      text: "El enfoque es la búsqueda de soluciones para tu situación actual.",
      icon: <LibraryAddCheckOutlinedIcon />,
    },
  ];
  return (
    <div className={styles.containerList}>
      {dataListIconSection.map((item, index) => {
        return (
          <div className={styles.wrapp}>
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
