import React from "react";
import useForm from "../../hooks/useForm";
import { Input } from "../Input/Input";
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from "../../utils/validator";

import { FormStyled, FormSectionStyled, FormTitle } from "./CheckoutFormStyles";

function CheckoutForm() {
  const [formState, inputHandler] = useForm(
    {
      domicilio: {
        value: "",
        isValid: false,
      },
      localidad: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  console.log({ formState });
  return (
    <FormStyled>
      <FormSectionStyled>
        {!formState.isValid && (
          <FormTitle>
            Por favor, completá los datos para poder continuar
          </FormTitle>
        )}

        <Input
          id="domicilio"
          label="Domicilio"
          type="text"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Por favor, completá tu domicilio"
        />

        <Input
          id="localidad"
          label="Localidad"
          type="text"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Por favor, completá tu localidad"
        />
      </FormSectionStyled>
    </FormStyled>
  );
}

export default CheckoutForm;
