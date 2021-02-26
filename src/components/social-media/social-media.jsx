import React from "react";

import styles from "./social-media.module.css";
import WhatsAppIcon from "../../images/whatsappIcon.svg";
import InstagramIcon from "../../images/instagramIcon.svg";
import FacebookIcon from "../../images/facebookIcon.svg";

function SocialMedia() {
  return (
    <div className={styles.containerSocialMedia}>
      <a
        href="https://api.whatsapp.com/send?phone=420776212480"
        className={styles.iconSocialMedia}
      >
        <img src={WhatsAppIcon} className={styles.iconSocialMedia} alt="" />
      </a>
      <a
        href="https://www.instagram.com/awareness.consultant/"
        className={styles.iconSocialMedia}
      >
        <img src={InstagramIcon} className={styles.iconSocialMedia} alt="" />
      </a>
      <a
        href="https://www.facebook.com/awareness.consultora"
        className={styles.iconSocialMedia}
      >
        <img src={FacebookIcon} className={styles.iconSocialMedia} alt="" />
      </a>
    </div>
  );
}
export default SocialMedia;
