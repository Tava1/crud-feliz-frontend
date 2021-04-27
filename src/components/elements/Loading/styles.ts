import styled, { keyframes } from 'styled-components';

const dotAnimation = keyframes`
  0% {
      color: #6796B8;
  }
  50% {
      color: #FCFCFC;
  }
  100% {
      color: #6796B8;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 50vh;
  margin-bottom: 10vh;
  justify-content: center;
  align-items: center;

  span {
    font-size: 60px;
    font-weight: 700;
  }

  #first-dot {
    animation: ${dotAnimation} 1.5s infinite linear;
  }

  #second-dot {
    animation: ${dotAnimation} 1.0s infinite linear;
  }

  #third-dot {
    animation: ${dotAnimation} 1.5s infinite linear;
  }
`;
