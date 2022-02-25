import styled from "styled-components";
// color: #1a202c;
export const Container = styled.div`
  text-align: center;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='40' height='40' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(135)'%3E%3Crect width='100%25' height='100%25' fill='rgba(26, 32, 44,1)'/%3E%3Ccircle cx='0' cy='20' r='1' fill='rgba(45, 55, 72,1)'/%3E%3Ccircle cx='40' cy='20' r='1' fill='rgba(45, 55, 72,1)'/%3E%3Cpath d='m 19.5 19.5 h1 v1 h-1z' fill='%23ecc94b'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Numbers = styled.h1`
  font-size: 200px;
  margin: 0px;
`;

export const Unit = styled.h4`
  margin-top: 0px;
`;

export const Buttons = styled.div`
  display: flex;
  direction: row;

  & .button {
    display: flex;
    align-items: center;
    padding: 0.6rem 1.5rem;
    margin: 0.4rem;
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.3rem;
    color: #ecc94b;
    border-style: groove;
  }

  & .button:focus {
    outline-width: 0;
  }

  & .button-primary:hover {
    background-color: #2c5282;
    border: 1px solid #ecc94b;
  }

  & .button-primary-active {
    background-color: #2b6cb0;
    border: 1px solid #ecc94b;
    color: white;
  }

  & .button-primary-inactive {
    background-color: #2a4365;
    border: 1px solid #ecc94b;
    color: white;
  }
`;

export const Type = styled.div`
  & .button {
    display: flex;
    align-items: center;
    padding: 0.8rem 1.2rem;
    margin: 0.4rem;
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.7rem;
    color: #ecc94b;
    border-style: groove;
  }

  & .button:focus {
    outline-width: 0;
  }

  & .button-primary:hover {
    background-color: #2c5282;
    border: 1px solid #ecc94b;
  }

  & .button-primary-inactive {
    background-color: #2a4365;
    border: 1px solid #ecc94b;
    color: white;
  }

  & input {
    border-radius: 10px;
    background: #2a4365;
    color: white;
  }
`;
