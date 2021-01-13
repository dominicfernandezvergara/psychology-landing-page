import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./logo.module.css";
import imageLogo from "../../images/logo/kisspng-psychology-symbol-psychotherapist-semana-da-psicol-psicologa-social-5cc757f9c4bd23.3476718715565680578058.jpg";

function Logo() {
  const history = useHistory();
  const onClickRedirectionInicio = () => {
    history.push("/inicio");
  };

  return (
    <button className={styles.containerLogo} onClick={onClickRedirectionInicio}>
      <img className={styles.logo} src={imageLogo} alt="" />
    </button>
  );
}

export default Logo;
