import styled from "styled-components";

export const CheckoutContainerStyled = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-height: calc(100vh - 75px);

  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  position: relative;
  top: 75px;

  &::before {
    content: "";
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgb(248, 54, 0);
    background: linear-gradient(
      27deg,
      rgba(248, 54, 0, 1) 0%,
      rgba(254, 140, 0, 1) 100%
    );
    mix-blend-mode: color;
  }

  &::after {
    content: "";
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000000bd;
  }
`;

export const CheckoutGridContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 500px) 50%;
  max-width: 1200px;
  width: 100%;

  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const CheckoutIllustration = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const CheckoutImage = styled.img`
  max-width: 500px;
  width: 100%;
`;
