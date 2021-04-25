import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

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
`;
