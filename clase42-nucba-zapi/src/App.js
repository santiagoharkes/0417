import { GlobalStyles } from "./styles/GlobalStyles";

import Navbar from "./Components/Navbar/Navbar";
import Orders from "./Components/Orders/Orders";
import { useOpenFood } from "./hooks/useOpenFood";
import { useOrders } from "./hooks/useOrders";

import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Orders {...orders} />
      <Switch>
        <Route exact path="/">
          <Home openFood={openFood} orders={orders} />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </>
  );
}

export default App;
