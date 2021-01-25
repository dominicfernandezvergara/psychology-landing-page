import React from "react";

import styles from "./team.module.css";
import Footer from "../../components/footer/footer";

function Team() {
  return (
    <div className={styles.containerTeam}>
      <h1 className={styles.title}>Servicios</h1>
      <div className={styles.containerService}></div>
      <Footer />
    </div>
  );
}
export default Team;
