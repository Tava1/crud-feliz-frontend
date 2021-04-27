import styled from 'styled-components';

export const Container = styled.footer`
  background: #171717;
  color: #FCFCFC;
  width: 100%;
  margin-top: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  .social-media {
    margin-top: 1rem;
    & > a {
      img {
        margin-right: 0.5rem;
      }
    }
  }

  & > a {
    padding: 1rem;
    font-weight: bold;
  }
`;
