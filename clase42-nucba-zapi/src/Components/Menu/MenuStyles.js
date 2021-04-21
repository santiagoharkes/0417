import styled from "styled-components";
import { ContainerStyled } from "../../styles/utilities/Container";

export const MenuStyled = styled.div`
  height: auto;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

export const TitleStyled = styled.h2`
  padding: 10px 30px;
  text-align: center;
  border-top: 1px solid #ff8352;
  border-bottom: 1px solid #ff8352;
  margin-bottom: 20px;
  background: #ff8352;
  border-radius: 10px;
`;

export const SubtitleStyled = styled.h3`
  padding: 10px 0;
  border-bottom: 1px solid #ff8352;
`;

export const ContainerMenu = styled(ContainerStyled)`
  padding: 0 50px;

  @media screen and (max-width: 700px) {
    padding: 0 20px;
  }
`;

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 50px;

  @media screen and (max-width: 700px) {
    padding: 50px 0;
  }
`;

export const Food = styled.div`
  height: 200px;
  padding: 10px;
  color: #000;
  border-radius: 7px;
  transition: box-shadow 0.1s ease;
  box-shadow: 0px 0px 2px 0px grey;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    filter: contrast(100%);
    box-shadow: 0px 0px 15px 0px grey;
    background-size: 150%;
  }
`;

export const FoodImage = styled.img`
  filter: contrast(75%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s ease;

  &:hover {
    filter: contrast(100%);
    transform: scale(1.2);
  }
`;

export const FoodLabel = styled.div`
  font-weight: 700;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  font-size: 20px;
  color: white;
  background-color: #00000070;
  width: 100%;
  z-index: 1;
`;
