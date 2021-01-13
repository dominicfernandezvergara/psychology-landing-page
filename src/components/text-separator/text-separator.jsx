import React from "react";
import PropTypes from "prop-types";

import styles from "./text-separator.module.css";

function TextSeparator({ text }) {
  return (
    <div className={styles.containerTextSeparator}>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
TextSeparator.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextSeparator;
