import styled from "styled-components";
import digitalFontWoff2 from "./fonts/digital-7-webfont.woff2";
import digitalFontWoff from "./fonts/digital-7-webfont.woff";

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
`;

export const Img = styled.img`
  margin-top: 2px;
  position: absolute;
  width: 20%;

  @media screen and (max-width: 1920px) {
    width: 15%;
  }

  @media screen and (max-width: 720px) {
    width: 30%;
  }

  @media screen and (max-width: 375px) {
    width: 60%;
  }

  -webkit-animation: rotate-center 1s linear infinite both;
  animation: rotate-center 1s linear infinite both;

  @-webkit-keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const Numbers = styled.h1`
  @font-face {
    font-family: "digital-7";
    src: url("${digitalFontWoff2}") format("woff2"),
      url("${digitalFontWoff}") format("woff");
    font-style: normal;
    font-weight: normal;
  }

  display: flex;
  justify-content: center;
  font-family: "digital-7";
  align-items: center;
  width: 50%;
  margin: 0;

  ${(props) => {
    if (props.characters) {
      return `font-size: 115px;`;
    } else {
      return `font-size: 70px;`;
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
