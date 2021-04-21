import React from "react";

import {
  MenuStyled,
  TitleStyled,
  SubtitleStyled,
  ContainerMenu,
  FoodGrid,
  Food,
  FoodImage,
  FoodLabel,
} from "./MenuStyles";

function Menu() {
  return (
    <MenuStyled>
      <ContainerMenu>
        <TitleStyled>Menu</TitleStyled>

        {/* Acá abajo vamos a pintar las comiditas */}
      </ContainerMenu>
    </MenuStyled>
  );
}

export default Menu;
