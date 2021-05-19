import React, { useState } from "react";

// import { Foods } from "../../data/data";
// import { useOpenFood } from "../../hooks/useOpenFood";

import { useSelector } from "react-redux";

import {
  MenuStyled,
  TitleStyled,
  SubtitleStyled,
  ContainerMenu,
  FoodGrid,
  Food,
  FoodImage,
  FoodLabel,
  TagsMenu,
  TagCard,
  TagImg,
  TagImgTodos,
} from "./MenuStyles";

function Menu({ openFood, setOpenFood }) {
  const [section, setSection] = useState(null);

  let Foods = useSelector((state) => state.products.foods);
  const categories = useSelector(
    ({ categories: { categories } }) => categories
  );

  if (section) {
    Foods = { [section]: Foods[section] };
  }

  return (
    <MenuStyled>
      <ContainerMenu>
        <TitleStyled>Menu</TitleStyled>

        <TagsMenu>
          {section && (
            <TagCard onClick={() => setSection(null)}>
              <TagImgTodos />
              <p>Todos</p>
            </TagCard>
          )}

          {categories.map((category, index) => (
            <TagCard
              key={index}
              onClick={() => setSection(category.section)}
              selected={category.section === section}
            >
              <TagImg img={category.imgTag} />
              <p>{category.section}</p>
            </TagCard>
          ))}
        </TagsMenu>

        {Object.entries(Foods).map(([section, foods], index) => {
          return (
            <div key={index}>
              <SubtitleStyled>{section}</SubtitleStyled>
              <FoodGrid>
                {foods.map((comidita, index) => (
                  <Food key={index} onClick={() => setOpenFood(comidita)}>
                    <FoodImage src={comidita.img} />
                    <FoodLabel>{comidita.name}</FoodLabel>
                  </Food>
                ))}
              </FoodGrid>
            </div>
          );
        })}
      </ContainerMenu>
    </MenuStyled>
  );
}

export default Menu;
