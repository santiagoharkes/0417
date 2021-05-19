import React from "react";
import { useSelector } from "react-redux";

import CheckoutBackground from "../assets/checkout.jpg";
import CheckoutIllustrationSource from "../assets/checkoutIllustration.png";
import CheckoutForm from "../Components/CheckoutForm/CheckoutForm";

import { useHistory } from "react-router-dom";

import {
  CheckoutContainerStyled,
  CheckoutGridContainer,
  CheckoutImage,
  CheckoutIllustration,
} from "./CheckoutStyles";

function Checkout() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const history = useHistory();

  if (!currentUser) {
    history.push("/login");
  }

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
