import React from "react";

import { CheckoutContainerStyled } from "./CheckoutStyles";

import CheckoutBackground from "../assets/checkout.jpg";
import OrderResume from "../Components/MyOrders/OrderResume";

function Resume() {
  return (
    <CheckoutContainerStyled img={CheckoutBackground}>
      <OrderResume />
    </CheckoutContainerStyled>
  );
}

export default Resume;
