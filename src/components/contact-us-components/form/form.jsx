import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "./form.module.css";
import { appDataText } from "../../../appDataText/appDataText";
import { listServicesForm } from "./list-services-form";
import { listSubservicesForm } from "./list-services-form";

function Form() {
  // select input
  const [currencyService, setCurrencyService] = useState("");
  const [currencySubservice, setCurrencySubservice] = useState("");
  // commentary input
  const [commentary, setCommentary] = useState("");

  // useForm
  const { register, handleSubmit, watch, errors } = useForm();

  // select input Services
  const handleChangeService = (event) => {
    console.log("handleChangeServices", event.target.value);

    setCurrencyService(event.target.value);
  };
  // select input Terapia Complementaria
  const handleChangeTerapia = (event) => {
    console.log("handleChangeTerapia", event.target.value);
    setCurrencySubservice(event.target.value);
  };
  // Submit info
  const onSubmit = (data) => {
    console.log("data", data);
  };

  // commentary input
  const handleChangeCommentary = (e) => {
    setCommentary(e.target.value);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {/* Name input */}
      <div className={styles.inputBox}>
        <TextField
          id="name"
          variant="outlined"
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
      {/* Email input */}
      <div className={styles.inputBox}>
        <TextField
          name="email"
          variant="outlined"
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

      {/* Select input Services*/}
      <div className={styles.inputBoxSelect}>
        <TextField
          id="outlined-select-currency"
          select
          label="Servicio"
          helperText="Selecciona un servicio"
          value={currencyService}
          onChange={handleChangeService}
          variant="outlined"
        >
          {listServicesForm.map((item, index) => (
            <MenuItem key={index} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
      {/* Select input Subservices*/}

      {currencyService === "Terapias complementarias" ? (
        <div className={styles.inputBoxSelect}>
          <TextField
            id="outlined-select-currency"
            select
            label="Terapia complementaria"
            value={currencySubservice}
            onChange={handleChangeTerapia}
            helperText="Selecciona una terapia complementaria"
            variant="outlined"
          >
            {listSubservicesForm.map((item, index) => (
              <MenuItem key={index} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </TextField>
        </div>
      ) : null}

      {/* Commentary input */}
      <div className={styles.inputBoxCommentary}>
        <TextField
          id="commentary"
          variant="outlined"
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
