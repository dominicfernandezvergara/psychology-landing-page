import React, { Fragment } from "react";

import styles from "./contact-us.module.css";
import { appDataText } from "../../appDataText/appDataText";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import Form from "./form/form";
import HowItWork from "../../components/contact-us-components/how-it-work";
import ContactData from "../../components/contact-us-components/contact-data";
import TransferData from "../../components/contact-us-components/transfer-data";
import Footer from "../../components/footer";

function ContactUs() {
  UseScrollToTop();
  return (
    <Fragment>
      {/*Responsive Small*/}
      <div className={styles.containerContactUsResponsiveSmall}>
        <h1 className={styles.title}> {appDataText.espanol.contact.title}</h1>
        <div className={styles.textContainerForm}>
          {appDataText.espanol.contact.text}
        </div>
        <div className={styles.wrappFormHowItWork}>
          <div className={styles.containerForm}>
            <Form />
          </div>
          <div className={styles.containerHowItWork}>
            <HowItWork />
          </div>
        </div>
        <div className={styles.containerHowItWork}>
          <ContactData />
        </div>
        <div className={styles.containerTransferData}>
          <TransferData />
        </div>
        <div className={styles.containerFooter}>
          <Footer />
        </div>
      </div>
      {/*Responsive Small*/}

      {/*Responsive Medium*/}
      <div className={styles.containerContactUsResponsiveMedium}>
        <h1 className={styles.title}> {appDataText.espanol.contact.title}</h1>

        <div className={styles.wrappFormHowItWork}>
          <div className={styles.subcontainerwrappFormDataContact}>
            <h1 className={styles.subtitle}>
              {appDataText.espanol.contact.subtitle2}
            </h1>
            <div className={styles.textContainerForm}>
              {appDataText.espanol.contact.text}
            </div>
            <div className={styles.containerForm}>
              <Form />
            </div>
          </div>
          <div className={styles.wrappContactTransferData}>
            <div className={styles.containerContacData}>
              <ContactData />
            </div>
            <div className={styles.containerTransferData}>
              <TransferData />
            </div>
          </div>
        </div>
        <div className={styles.containerHowItWork}>
          <HowItWork />
        </div>

        <div className={styles.containerFooter}>
          <Footer />
        </div>
      </div>
      {/*Responsive Medium*/}
    </Fragment>
  );
}

export default ContactUs;
