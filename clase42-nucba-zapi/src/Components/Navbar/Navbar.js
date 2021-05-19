import React from "react";
import imgLogo from "../../assets/nucbazappiintegral.png";
import userIcon from "../../assets/user.svg";
import CartIcon from "../Cart/CartIcon";
import { Link } from "react-router-dom";

import {
  NavbarStyled,
  Logo,
  ContainerNavbar,
  NavigationMenu,
  Divider,
  User,
  LoginButton,
  UserContainer,
  LinkStyled,
} from "./NavbarStyles";

import { useSelector, useDispatch } from "react-redux";

import * as userActions from "../../redux/user/userActions";
import { UserMenu } from "../UserMenu/UserMenu";

function Navbar() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(userActions.toggleMenuHidden());
  };

  return (
    <NavbarStyled>
      <ContainerNavbar>
        <Link to="/">
          <Logo src={imgLogo} />
        </Link>

        <NavigationMenu>
          <CartIcon />
          <Divider />
          {currentUser ? (
            <UserContainer>
              <User src={userIcon} onClick={handleToggle} />
              <UserMenu user={currentUser} />
            </UserContainer>
          ) : (
            <Link to="/login">
              <LoginButton>Ingresar</LoginButton>
            </Link>
          )}
        </NavigationMenu>
      </ContainerNavbar>
    </NavbarStyled>
  );
}

export default Navbar;
