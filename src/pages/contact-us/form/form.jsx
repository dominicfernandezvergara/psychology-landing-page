import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import styles from "./form.module.css";
import { appDataText } from "../../../appDataText/appDataText";

function Form() {
  const [commentary, setCommentary] = useState("");

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
  };
  const handleChangeCommentary = (e) => {
    setCommentary(e.target.value);
    console.log("commentary", commentary);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputBox}>
        <TextField
          id="name"
          label={appDataText.espanol.contact.input.name}
          type="text"
          name="name"
          className={styles.input}
          inputRef={register({ required: true })}
        />
      </div>
      {errors.name && (
        <span className={styles.errorInput}>
          {appDataText.espanol.contact.input.errorRequiredInformation}
        </span>
      )}
      <div className={styles.inputBox}>
        <TextField
          name="email"
          id="Email"
          label={appDataText.espanol.contact.input.email}
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
          name={appDataText.espanol.contact.input.comment}
          inputRef={register({ required: true })}
          value={commentary}
          onChange={(e) => handleChangeCommentary(e)}
        />
      </div>
      {errors.commentary && (
        <span className={styles.errorInput}>
          {appDataText.espanol.contact.input.errorRequiredInformation}
        </span>
      )}
      <Button className={styles.submitButton} type="submit">
        {appDataText.espanol.contact.buttonText}
      </Button>
    </form>
  );
}
export default Form;
