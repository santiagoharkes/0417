import { GlobalStyles } from "./styles/GlobalStyles";

import Navbar from "./Components/Navbar/Navbar";
import Orders from "./Components/Orders/Orders";

import { useOpenFood } from "./hooks/useOpenFood";
import { useOrders } from "./hooks/useOrders";

import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Resume from "./pages/Resume";
import Ordencitas from "./pages/Orders";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as userActions from "./redux/user/userActions";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

function onAuthStateChange(cb, action) {
  auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot((snapshot) => {
        cb(
          action({
            id: snapshot.id,
            ...snapshot.data(),
          })
        );
      });
    } else {
      cb(action(null));
    }
  });
}

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  // const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = onAuthStateChange(dispatch, userActions.setCurrentUser);

    return () => {
      unsuscribe();
    };
  }, [dispatch]);

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
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/mis-ordenes">
          <Ordencitas />
        </Route>

        <Route exact path="/mis-ordenes/:manuelitaviviaenpehuajo">
          <Resume />
        </Route>
      </Switch>
    </>
  );
}

export default App;
