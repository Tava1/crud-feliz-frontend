import styled from 'styled-components';

export const Container = styled.div`
  margin: 60px 60px 0 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;

    li {
      margin: 0 0.4rem;

      button {
        background: #FCFCFC;
        color: #6796B8;
        border: 3px solid #6796B8;
        padding: 0.5rem 0.7rem;
        border-radius: 7px;
        font-weight: 600;
        transition: background 0.2s;

        &:hover {
          background: #6796B8;
          color: #FCFCFC;
        }
      }

      .current-page {
        background: #6796B8;
        color: #FCFCFC;
      }
    }
  }
`;
