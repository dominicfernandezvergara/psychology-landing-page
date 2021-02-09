import React from "react";

import styles from "./transfer-data.module.css";
import { appDataText } from "../../../appDataText/appDataText";

function TransferData() {
  return (
    <div className={styles.containerTransferData}>
      <h3 className={styles.title}>
        {appDataText.espanol.contact.transferData.title}
      </h3>
      <div className={styles.textTransfer}>
        {appDataText.espanol.contact.transferData.text}
      </div>
      <div className={styles.wrappBankData}>
        <div className={styles.containerBankData}>
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
        <div className={styles.containerBankData}>
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

export default TransferData;
