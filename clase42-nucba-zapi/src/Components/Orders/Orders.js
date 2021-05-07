import React from "react";

import { formatPrice } from "../../utils/formatPrice";

import { useSelector } from "react-redux";

import {
  OrderStyled,
  OrderContent,
  OrderContainer,
  OrderItems,
  ItemImg,
} from "./OrdersStyles";

import { useDispatch } from "react-redux";
import * as cartActions from "../../redux/cart/cartActions";

import {
  DialogFooter,
  ConfirmButton,
  DialogShow,
} from "../FoodDialog/FoodDialogStyles";
import HandleQuantity from "./HandleQuantity";

function Orders() {
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.cart.hidden);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleToggle = () => {
    dispatch(cartActions.toggleCartHidden());
  };

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <>
      {!hidden && <DialogShow onClick={handleToggle} />}
      <OrderStyled show={hidden}>
        {cartItems?.length === 0 ? (
          <OrderContent>Nada por aqui</OrderContent>
        ) : (
          <OrderContent>
            <OrderContainer>Tu pedido:</OrderContainer>

            {cartItems.map((item) => (
              <OrderContainer>
                <OrderItems>
                  <ItemImg img={item.img} />
                  <div>
                    <div>{item.name}</div>
                    {formatPrice(item.price)}
                  </div>

                  <div>
                    <HandleQuantity item={item} />
                  </div>
                </OrderItems>
              </OrderContainer>
            ))}
          </OrderContent>
        )}
        <DialogFooter>
          <ConfirmButton>Ir a pagar {formatPrice(total)}</ConfirmButton>
        </DialogFooter>
      </OrderStyled>
    </>
  );
}

export default Orders;
