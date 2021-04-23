import { GlobalStyles } from "./styles/GlobalStyles";

import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Menu from "./Components/Menu/Menu";
import { useOpenFood } from "./hooks/useOpenFood";
import { FoodDialog } from "./Components/FoodDialog/FoodDialog";

function App() {
  const openFood = useOpenFood();

  return (
    <div>
      <GlobalStyles />
      <FoodDialog {...openFood} />
      <Navbar />
      <Banner />
      <Menu {...openFood} />
    </div>
  );
}

export default App;
