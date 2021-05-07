import styled from "styled-components";

import { ContainerStyled } from "../../styles/utilities/Container";

export const NavbarStyled = styled.div`
  padding: 10px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.propiedadPerriUno ? props.propiedadPerriUno : "#fff"};
  width: 100%;
  z-index: 999;
  border-bottom: 1px solid #e5edef;
  height: 75px;
`;

export const ContainerNavbar = styled(ContainerStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 100%;
  height: 100%;
`;

export const Logo = styled.img`
  max-width: 200px;
  height: auto;
  max-height: 100%;
`;

export const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  padding-right: 20px;
`;
