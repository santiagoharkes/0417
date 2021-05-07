import React from "react";
import imgLogo from "../../assets/nucbazappiintegral.png";
import CartIcon from "../Cart/CartIcon";

import {
  NavbarStyled,
  Logo,
  ContainerNavbar,
  NavigationMenu,
} from "./NavbarStyles";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <NavbarStyled>
      <ContainerNavbar>
        <Link to="/">
          <Logo src={imgLogo} />
        </Link>

        <Link to="/checkout">Checkout</Link>

        <NavigationMenu>
          <CartIcon />
        </NavigationMenu>
      </ContainerNavbar>
    </NavbarStyled>
  );
}

export default Navbar;
