import styled from 'styled-components';

export const Container = styled.header`
  height: 85px;
  margin: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin: 0 2rem;
  }

  @media screen and (min-width: 992px) {
    width: 900px;
    margin: 0 auto;
  }

  .logo {
    a {
      h1 {
        font-size: 1.8rem
      }
    }
  }

  .social-media {
    display: flex;
    align-items: center;

    button + button {
      margin-left: 5px;
    }
  }
`;
