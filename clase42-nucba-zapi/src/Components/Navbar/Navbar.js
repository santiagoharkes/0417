import React from "react";
import imgLogo from "../../assets/nucbazappiintegral.png";

import { NavbarStyled, Logo, ContainerNavbar } from "./NavbarStyles";

function Navbar() {
  return (
    <NavbarStyled>
      <ContainerNavbar>
        <Logo src={imgLogo} />
      </ContainerNavbar>
    </NavbarStyled>
  );
}

export default Navbar;
