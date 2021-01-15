import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import styles from "./contact-us.module.css";
import image from "../../images/imageHome/imagePeople.jpeg";
import ButtonApp from "../../components/button";
import { appDataText } from "../../appDataText/appDataText";

function ContactUs() {
  const [commentary, setCommentary] = useState("");

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
  };
  const handleChangeCommentary = (e) => {
    setCommentary(e.target.value);
    console.log("commentary", commentary);
  };
  console.log(watch("name"));
  return (
    <div className={styles.containerContactUs}>
      <div className={styles.shadow}>
        <div className={styles.formContactUs}>
          <h1 className={styles.title}> {appDataText.english.contact.title}</h1>
          <div className={styles.data}>
            <p className={styles.addresse}>
              {appDataText.english.contact.addresse}
            </p>
            <div className={styles.containerText}>
              <a href="tel:5551234567" className={styles.text}>
                {appDataText.english.contact.fono}
              </a>
            </div>
            <div className={styles.containerText}>
              <a href="mailto: abc@example.com" className={styles.text}>
                {appDataText.english.contact.email}
              </a>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputBox}>
              <TextField
                id="name"
                label={appDataText.english.contact.input.name}
                type="text"
                name="name"
                className={styles.input}
                inputRef={register({ required: true })}
              />
            </div>
            {errors.name && (
              <span className={styles.errorInput}>
                {appDataText.english.contact.input.errorRequiredInformation}
              </span>
            )}
            <div className={styles.inputBox}>
              <TextField
                name="email"
                id="Email"
                label={appDataText.english.contact.input.email}
                type="text"
                className={styles.input}
                inputRef={register({
                  required: "Email requerido para continuar",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email invalido",
                  },
                })}
              />
            </div>
            {errors.email && (
              <span className={styles.errorInput}>{errors.email.message}</span>
            )}
            <div className={styles.commentaryBox}>
              <TextField
                id="commentary"
                label="Comentario"
                multiline
                rowsMax={4}
                type="text"
                className={styles.input}
                name={appDataText.english.contact.input.comment}
                inputRef={register({ required: true })}
                value={commentary}
                onChange={(e) => handleChangeCommentary(e)}
              />
            </div>
            {errors.commentary && (
              <span className={styles.errorInput}>
                {appDataText.english.contact.input.errorRequiredInformation}
              </span>
            )}
            <Button className={styles.submitButton} type="submit">
              {appDataText.english.contact.buttonText}
            </Button>
          </form>
        </div>
        <div className={styles.containerImage}>
          <img className={styles.image} src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
