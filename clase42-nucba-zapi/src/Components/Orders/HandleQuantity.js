import React from "react";

import { useDispatch } from "react-redux";

import * as cartActions from "../../redux/cart/cartActions";

import {
  QuantityButton,
  QuantityManageStyled,
  QuantityStyled,
  RemoveIconStyled,
} from "./HandleQuantityStyles";

function HandleQuantity({ item }) {
  const dispatch = useDispatch();

  return (
    <QuantityManageStyled>
      {item.quantity === 1 ? (
        <RemoveIconStyled
          onClick={() => dispatch(cartActions.removeItem(item))}
        />
      ) : (
        <QuantityButton onClick={() => dispatch(cartActions.removeItem(item))}>
          -
        </QuantityButton>
      )}

      <QuantityStyled>{item.quantity}</QuantityStyled>
      <QuantityButton onClick={() => dispatch(cartActions.addItem(item))}>
        +
      </QuantityButton>
    </QuantityManageStyled>
  );
}

export default HandleQuantity;
