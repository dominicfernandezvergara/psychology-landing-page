import React from "react";

import styles from "./component-separator.module.css";

function ComponentSeparator() {
  return (
    <div className={styles.containerComponentSeparator}>
      <hr className={styles.line} />
    </div>
  );
}
export default ComponentSeparator;
