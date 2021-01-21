import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

import styles from "./contact-us.module.css";
import { appDataText } from "../../appDataText/appDataText";
import Form from "./form/form";

function ContactUs() {
  return (
    <div className={styles.containerContactUs}>
      <h1 className={styles.title}> {appDataText.espanol.contact.title}</h1>
      <div className={styles.containerForm}>
        <div className={styles.textContainerForm}>
          {appDataText.espanol.contact.text}
        </div>
        <Form />
      </div>
      <div className={styles.contactData}>
        <h3 className={styles.title}>{appDataText.espanol.contact.subtitle}</h3>
        <p className={styles.subtitle}>
          {appDataText.espanol.contact.addresse.title}
        </p>
        <p className={styles.textContactData}>
          {appDataText.espanol.contact.addresse.addresse}
        </p>
        <p className={styles.subtitle}>
          {appDataText.espanol.contact.fono.title}
        </p>
        <div className={styles.containerText}>
          <div className={styles.iconLink}>
            <PhoneIcon />
          </div>
          <a href="tel:5551234567" className={styles.textContactData}>
            {appDataText.espanol.contact.fono.fono}
          </a>
        </div>
        <p className={styles.subtitle}>
          {appDataText.espanol.contact.email.title}
        </p>
        <div className={styles.containerText}>
          <div className={styles.iconLink}>
            <EmailIcon />
          </div>
          <a href="mailto: abc@example.com" className={styles.textContactData}>
            {appDataText.espanol.contact.email.correo}
          </a>
        </div>
      </div>
      <div className={styles.containerTransferData}>
        <h3 className={styles.title}>
          {appDataText.espanol.contact.transferData.title}
        </h3>
        <p className={styles.textTransfer}>
          {appDataText.espanol.contact.transferData.text}
        </p>
        <div className={styles.containerChileTransferData}>
          <div className={styles.subtitle}>
            {appDataText.espanol.contact.transferData.chile.title}
          </div>
          <div className={styles.textTransferData}>
            {appDataText.espanol.contact.transferData.chile.typeCurrency}
          </div>
          <div className={styles.textTransferData}>
            {appDataText.espanol.contact.transferData.chile.bank}
          </div>
          <div className={styles.textTransferData}>
            {appDataText.espanol.contact.transferData.chile.accountNumber}
          </div>
          <div className={styles.textTransferData}>
            {appDataText.espanol.contact.transferData.chile.run}
          </div>
        </div>
        <div className={styles.containerEuropeTransferData}>
          <div className={styles.subtitle}>
            {appDataText.espanol.contact.transferData.europe.title}
          </div>
          <div className={styles.textTransferData}>
            {appDataText.espanol.contact.transferData.europe.typeCurrency}
          </div>
          <div className={styles.textTransferData}>
            {appDataText.espanol.contact.transferData.europe.bank}
          </div>
          <div className={styles.textTransferData}>
            {appDataText.espanol.contact.transferData.europe.accountNumber}
          </div>
          <div className={styles.textTransferData}>
            {appDataText.espanol.contact.transferData.europe.IBAN}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
