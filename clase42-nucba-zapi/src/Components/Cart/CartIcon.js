import React from "react";

import { CartIconContainer, CartIconStyled, ItemCount } from "./CartIconStyles";

import * as cartActions from "../../redux/cart/cartActions";

import { useDispatch, useSelector } from "react-redux";

function CartIcon() {
  const dispatch = useDispatch();

  const quantity = useSelector((state) =>
    state.cart.cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0)
  );

  const handleToggle = () => {
    dispatch(cartActions.toggleCartHidden());
  };

  return (
    <CartIconContainer onClick={handleToggle}>
      <CartIconStyled />
      {quantity !== 0 && <ItemCount>{quantity}</ItemCount>}
    </CartIconContainer>
  );
}

export default CartIcon;
