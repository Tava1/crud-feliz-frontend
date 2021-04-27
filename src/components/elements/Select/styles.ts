import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  label {
    margin-bottom: 0.3rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  select {
    height: 44px;
    border-radius: 4px;
    border: 1px solid #171717;
    background: #FCFCFC;
    width: 100%;
    margin-bottom: 1rem;
    padding: 0 1rem;

    option {
      padding: 0;
    }
  }

  & > div {
    height: 0.5rem;
    margin-bottom: 0.8rem;

    display: flex;
    align-self: flex-end;
  }
`;

export const Error = styled.div`
  color: #F83838;
  font-size: 12px;
`;
