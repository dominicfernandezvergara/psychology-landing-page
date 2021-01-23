import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

import styles from "./contact-data.module.css";
import { appDataText } from "../../../appDataText/appDataText";

function ContactData() {
  return (
    <div className={styles.contactData}>
      <h3 className={styles.title}>{appDataText.espanol.contact.subtitle}</h3>
      <div className={styles.wrappData}>
        <div className={styles.subWrappData}>
          <div className={styles.iconLink}>
            <RoomIcon />
          </div>
          <div className={styles.containerText}>
            <p className={styles.subtitle}>
              {appDataText.espanol.contact.addresse.title}
            </p>
            <p className={styles.textContactData}>
              {appDataText.espanol.contact.addresse.addresse}
            </p>
          </div>
        </div>
        <div className={styles.subWrappData}>
          <div className={styles.iconLink}>
            <PhoneIcon />
          </div>
          <div className={styles.containerText}>
            <p className={styles.subtitle}>
              {appDataText.espanol.contact.fono.title}
            </p>
            <a href="tel:5551234567" className={styles.textContactData}>
              {appDataText.espanol.contact.fono.fono}
            </a>
          </div>
        </div>
        <div className={styles.subWrappData}>
          <div className={styles.iconLink}>
            <EmailIcon />
          </div>
          <div className={styles.containerText}>
            <p className={styles.subtitle}>
              {appDataText.espanol.contact.email.title}
            </p>

            <a
              href="mailto: abc@example.com"
              className={styles.textContactData}
            >
              {appDataText.espanol.contact.email.correo}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactData;
