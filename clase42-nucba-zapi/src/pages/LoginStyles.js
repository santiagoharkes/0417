import styled, { css } from "styled-components";

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const GoogleIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const Alink = styled.a`
  color: red;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

export const LayoutPage = styled.div`
  max-width: 1440px;
  min-height: 900px;
  padding: 0 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  max-width: 1440px;
  padding: 150px;
`;

export const FormContent = styled.div`
  padding: 24px 32px 15px;
  border-radius: 15px;
  background-color: #fff;
`;

export const FormStyled = styled.div`
  margin-top: 62px;
  background-color: #fff;
  border-radius: 15px;
  width: 400px;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
`;

export const Botoncito = styled.button`
  font-family: "Montserrat", cursive;
  font-weight: 700;
  z-index: 999;
  border: none;
  margin: ${({ m }) => (m ? `${m}` : "10px")};
  width: ${({ w }) => (w ? w : "200px")};
  color: white;
  height: 20px;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: red;
  ${({ disabled }) =>
    disabled &&
    css`
      background: #ccc !important;
      color: #fff;
      border: 1px rgb(184, 182, 182) solid;
      cursor: not-allowed !important;
      transition: 0.5s ease-out;
    `}
`;

export const GoogleButton = styled(Botoncito)`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(130deg, #ff9259 0%, #ff2426 70%);
`;
