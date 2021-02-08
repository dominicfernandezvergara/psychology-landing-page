import React from "react";

import styles from "./blog.module.css";
import { appDataText } from "../../appDataText/appDataText";

function Blog() {
  return (
    <div className={styles.containerBlog}>
      <h1 className={styles.title}>{appDataText.espanol.blog.title}</h1>
    </div>
  );
}

export default Blog;
