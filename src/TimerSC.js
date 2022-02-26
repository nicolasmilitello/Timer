import styled from "styled-components";
// color: #1a202c;
export const Container = styled.div`
  text-align: center;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Display = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Numbers = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 200px;
  width: 50%;
  margin: 0;
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
  color: #ecc94b;
  border-style: groove;

  ${(props) => {
    if (props.state) {
      return `background-color: #2b6cb0;
    border: 1px solid #ecc94b;
    color: white;`;
    } else {
      return `background-color: #2a4365;
    border: 1px solid #ecc94b;
    color: white;`;
    }
  }}

  &:focus {
    outline-width: 0;
  }

  &:hover {
    background-color: #2c5282;
    border: 1px solid #ecc94b;
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
  color: #ecc94b;
  border-style: groove;
  background-color: #2a4365;
  border: 1px solid #ecc94b;
  color: white;

  &:focus {
    outline-width: 0;
  }

  &:hover {
    background-color: #2c5282;
    border: 1px solid #ecc94b;
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

export const InputContainer = styled.div`
  height: 29px;
`;
