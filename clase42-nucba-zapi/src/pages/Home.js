import React from "react";

import Banner from "../Components/Banner/Banner";
import { FoodDialog } from "../Components/FoodDialog/FoodDialog";
import Menu from "../Components/Menu/Menu";

function Home({ openFood, orders }) {
  return (
    <>
      <FoodDialog {...openFood} {...orders} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default Home;
