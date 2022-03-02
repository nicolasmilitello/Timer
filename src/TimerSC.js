import styled from "styled-components";

//? ANIMATIONS:
import { rotate } from "./animations/rotate";

export const Container = styled.div`
  text-align: center;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--secondsColor);
`;

export const Display = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;

  @media screen and (min-width: 1450px) {
    margin-bottom: 6%;
  }
`;

export const Img = styled.img`
  margin-top: 2px;
  position: absolute;
  width: 30%;

  @media screen and (min-width: 1921px) {
    width: 15%;
  }

  @media screen and (max-width: 1920px) {
    width: 18%;
  }

  @media screen and (max-width: 1700px) {
    width: 22%;
  }

  @media screen and (max-width: 1450px) {
    width: 20%;
  }

  @media screen and (max-width: 1000px) {
    width: 24%;
  }

  @media screen and (max-width: 900px) {
    width: 28%;
  }

  @media screen and (max-width: 720px) {
    width: 35%;
  }

  @media screen and (max-width: 600px) {
    width: 40%;
  }

  @media screen and (max-width: 500px) {
    width: 48%;
  }

  @media screen and (max-width: 375px) {
    width: 60%;
  }

  ${rotate}
`;

export const Numbers = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0;

  ${(props) => {
    if (props.characters) {
      return `@media screen and (min-width: 1921px) {
    font-size: 150px;
  }

  @media screen and (max-width: 1920px) {
    font-size: 125px;
  }

  @media screen and (max-width: 1450px) {
    font-size: 105px;
  }

    @media screen and (max-width: 1000px) {
    font-size: 100px;
  }

  @media screen and (max-width: 720px) {
    font-size: 95px;

  }

  @media screen and (max-width: 500px) {
    font-size: 85px;

  }

  @media screen and (max-width: 375px) {
    font-size: 85px;

  }`;
    } else {
      return `@media screen and (min-width: 2001px) {
    font-size: 125px;
  }

  @media screen and (max-width: 2000px) {
    font-size: 116px;
  }

  @media screen and (max-width: 1920px) {
    font-size: 125px;
  }

  @media screen and (max-width: 1450px) {
    font-size: 83px;
  }

      @media screen and (max-width: 1000px) {
    font-size: 85px;
  }

  @media screen and (max-width: 730px) {
    font-size: 77px;
        color: yellow;
  }

  @media screen and (max-width: 500px) {
    font-size: 73px;
  }

  @media screen and (max-width: 375px) {
    font-size: 70px;
  }`;
    }
  }}

  ${(props) => {
    if (props.countdown) {
      return `color: red;`;
    } else {
      return `color: white;`;
    }
  }}
`;

export const Unit = styled.h4`
  margin-top: 0px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ActiveButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.6rem 1.5rem;
  margin: 0.4rem;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.3rem;
  color: var(--borderButtons);
  border-style: groove;

  ${(props) => {
    if (props.state) {
      return `background-color: var(--activeButton);
    border: 1px solid var(--borderButtons);
    color: var(--fontColorButtons);`;
    } else {
      return `background-color: var(--inactiveButton);
    border: 1px solid var(--borderButtons);
    color: var(--fontColorButtons);`;
    }
  }}

  &:focus {
    outline-width: 0;
  }

  &:hover {
    background-color: var(--hoverButton);
    border: 1px solid var(--borderButtons);
  }
`;

export const InactiveButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.6rem 1.5rem;
  margin: 0.4rem;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.3rem;
  color: var(--borderButtons);
  border-style: groove;
  background-color: var(--inactiveButton);
  border: 1px solid var(--borderButtons);
  color: var(--fontColorButtons);

  &:focus {
    outline-width: 0;
  }

  &:hover {
    background-color: var(--hoverButton);
    border: 1px solid var(--borderButtons);
  }
`;

export const ChangeModeButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.6rem 1.5rem;
  margin: 0.4rem;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.7rem;
  color: var(--borderButtons);
  border-style: groove;
  background-color: var(--inactiveButton);
  border: 1px solid var(--borderButtons);
  color: var(--fontColorButtons);

  &:focus {
    outline-width: 0;
  }

  &:hover {
    background-color: var(--hoverButton);
    border: 1px solid var(--borderButtons);
  }
`;

export const Mode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & input {
    border-radius: 10px;
    background: var(--inactiveButton);
    color: var(--fontColorButtons);
    font-size: 0.85rem;
  }
`;

export const InputContainer = styled.div`
  height: 29px;
`;
