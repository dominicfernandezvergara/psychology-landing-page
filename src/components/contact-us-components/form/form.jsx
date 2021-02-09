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
  const { register, handleSubmit, errors, reset } = useForm();

  // select input Services
  const handleChangeService = (event) => {
    setCurrencyService(event.target.value);
  };
  // select input Terapia Complementaria
  const handleChangeTerapia = (event) => {
    setCurrencySubservice(event.target.value);
  };
  // Submit info
  const onSubmit = async (data) => {
    const dataPostBackend = {
      userName: data.name,
      companyName: "AWARENESS CONSULTANT",
      email: data.email,
      companyEmail: "dominic.fernandezv@gmail.com",
      phoneNumber: "+491779702512",
      description: data.Comentario,
      template: "serviceContactEmail",
      subject: "Awareness Consultant contactando contigo",
      service: currencyService + " " + currencySubservice,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataPostBackend),
    };
    try {
      const fetchResponse = await fetch(
        "https://emails-service.herokuapp.com/api/v1/email/contact",
        requestOptions
      );
      const data2 = await fetchResponse.json();
      reset();
      setCurrencyService("");
      setCurrencySubservice("");
      setCommentary("");
      return data2;
    } catch (e) {
      reset();
      setCurrencyService("");
      setCurrencySubservice("");
      setCommentary("");
    }
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
        <span className={styles.errorInput}>
          {appDataText.espanol.contact.input.errorRequiredInformation}
        </span>
      )}
      {/* Country input */}
      <div className={styles.inputBox}>
        <TextField
          id="country"
          variant="outlined"
          label={appDataText.espanol.contact.input.country}
          type="text"
          name="country"
          className={styles.input}
          inputRef={register({ required: true })}
        />
      </div>
      {errors.country && (
        <span className={styles.errorInput}>
          {appDataText.espanol.contact.input.errorRequiredInformation}
        </span>
      )}
      {/* Select input Services*/}
      <div className={styles.inputBoxSelect}>
        <TextField
          id="outlined-select-currency"
          variant="outlined"
          label={appDataText.espanol.contact.input.service}
          type="text"
          name="servicio"
          select
          helperText={appDataText.espanol.contact.input.service2}
          value={currencyService}
          onChange={handleChangeService}
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
            label={appDataText.espanol.contact.input.terapiaComplementaria}
            value={currencySubservice}
            onChange={handleChangeTerapia}
            helperText={
              appDataText.espanol.contact.input.terapiaComplementaria2
            }
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
