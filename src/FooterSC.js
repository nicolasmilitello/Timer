import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--backgroundFooterColor);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Text = styled.h6`
  width: 100%;
  color: var(--textFooterColor);
  margin: 0;
`;

export const CreditsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Credits = styled.h6`
  color: var(--textFooterColor);
  margin: 0;
  font-size: 8px;
`;
