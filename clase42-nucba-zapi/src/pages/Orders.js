import React, { useEffect, useCallback } from "react";

import { CheckoutContainerStyled } from "./OrdersStyles";

import CheckoutBackground from "../assets/checkout.jpg";

import MyOrders from "../Components/MyOrders/MyOrders";

import * as orderActions from "../redux/orders/ordersActions";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

function Ordencitas() {
  const currentUser = useSelector((state) => state.user.currentUser);
  let { orders } = useSelector((state) => state.orders);
  const history = useHistory();
  const dispatch = useDispatch();

  const fetchOrders = useCallback(async () => {
    console.log("Fetcheando las ordenes");
    await dispatch(orderActions.fetchOrders(currentUser?.id));
  }, [dispatch, currentUser]);

  if (!currentUser) {
    history.push("/");
  }

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders, currentUser]);

  return (
    <CheckoutContainerStyled img={CheckoutBackground}>
      <MyOrders orders={orders} />
    </CheckoutContainerStyled>
  );
}

export default Ordencitas;
