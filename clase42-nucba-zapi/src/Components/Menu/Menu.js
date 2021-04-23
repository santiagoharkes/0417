import React from "react";

import { Foods } from "../../data/data";
import { useOpenFood } from "../../hooks/useOpenFood";

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

function Menu({ openFood, setOpenFood }) {
  return (
    <MenuStyled>
      <ContainerMenu>
        <TitleStyled>Menu</TitleStyled>

        {/* Acá abajo vamos a pintar las comiditas */}

        {Object.entries(Foods).map(([section, foods]) => {
          return (
            <>
              <SubtitleStyled>{section}</SubtitleStyled>
              <FoodGrid>
                {foods.map((comidita) => (
                  <Food onClick={() => setOpenFood(comidita)}>
                    <FoodImage src={comidita.img} />
                    <FoodLabel>{comidita.name}</FoodLabel>
                  </Food>
                ))}
              </FoodGrid>
            </>
          );
        })}
      </ContainerMenu>
    </MenuStyled>
  );
}

export default Menu;
