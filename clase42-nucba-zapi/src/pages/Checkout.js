import React from "react";

import CheckoutBackground from "../assets/checkout.jpg";
import CheckoutIllustrationSource from "../assets/checkoutIllustration.png";
import CheckoutForm from "../Components/CheckoutForm/CheckoutForm";

import {
  CheckoutContainerStyled,
  CheckoutGridContainer,
  CheckoutImage,
  CheckoutIllustration,
} from "./CheckoutStyles";

function Checkout() {
  return (
    <CheckoutContainerStyled img={CheckoutBackground}>
      <CheckoutGridContainer>
        <CheckoutIllustration>
          <CheckoutImage src={CheckoutIllustrationSource} />
        </CheckoutIllustration>
        <CheckoutForm />
      </CheckoutGridContainer>
    </CheckoutContainerStyled>
  );
}

export default Checkout;
