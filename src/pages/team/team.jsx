import React from "react";

import styles from "./team.module.css";
import { appDataText } from "../../appDataText/appDataText";
import Footer from "../../components/footer/footer";

function Team() {
  const listTeam = appDataText.espanol.aboutUs.team.team;
  console.log("listTeam", listTeam);
  return (
    <div className={styles.containerTeam}>
      <h1 className={styles.title}>Servicios</h1>
      <div className={styles.wrappTeam}></div>
      <Footer />
    </div>
  );
}
export default Team;
