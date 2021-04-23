import styled from "styled-components";
import { FoodLabel } from "../Menu/MenuStyles";

export const Dialog = styled.div`
  width: 500px;
  background-color: white;
  top: 150px;
  z-index: 1000;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  height: 50%;
  justify-content: space-between;

  @media screen and (max-width: 550px) {
    max-width: 95%;
    left: 3%;
    height: 80%;
  }
`;

export const DialogBanner = styled.div`
  min-height: 150px;
  margin-bottom: 20px;
  border-radius: 8px 8px 0 0;
  position: relative;
  min-height: 50%;
  background-image: ${(p) => `url(${p.img})`};
  background-position: center;
  background-size: cover;
`;

export const DialogBannerName = styled(FoodLabel)`
  bottom: 0;
  padding: 10px 40px;
  height: 30%;
  display: flex;
  align-items: center;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  max-height: 400px;
  padding: 40px;
  height: 100%;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px gray;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled.div`
  font-weight: 700;
  z-index: 999;
  margin: 10px;
  color: white;
  height: auto;
  border-radius: 10px;
  padding: 10px;
  width: 200px;
  cursor: pointer;
  background-color: #ff0385;
  text-align: center;
`;

export const DialogShow = styled.div`
  position: fixed;
  height: calc(100% - 75px);
  width: 100%;
  background-color: #000000e6;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 75px;

  & * {
    z-index: 5;
  }
`;
