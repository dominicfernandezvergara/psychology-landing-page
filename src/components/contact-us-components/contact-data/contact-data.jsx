import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
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
            <div className={styles.subtitle}>
              {appDataText.espanol.contact.addresse.title}
            </div>
            <div className={styles.textContactData}>
              {appDataText.espanol.contact.addresse.addresse}
            </div>
          </div>
        </div>
        <div className={styles.subWrappData}>
          <div className={styles.iconLink}>
            <WhatsAppIcon />
          </div>
          <div className={styles.containerText}>
            <div className={styles.subtitle}>
              {appDataText.espanol.contact.fono.title}
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=420776212480"
              className={styles.textContactData}
            >
              {appDataText.espanol.contact.fono.fono}
            </a>
          </div>
        </div>
        <div className={styles.subWrappData}>
          <div className={styles.iconLink}>
            <EmailIcon />
          </div>
          <div className={styles.containerText}>
            <div className={styles.subtitle}>
              {appDataText.espanol.contact.email.title}
            </div>

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
