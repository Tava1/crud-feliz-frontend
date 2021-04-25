import styled from 'styled-components';

export const Nav = styled.nav`
  margin: 1rem 1rem 2.5rem 1rem;

  @media screen and (min-width: 768px) {
    margin: 2rem 0;
  }
`;

export const Container = styled.section`

  @media screen and (min-width: 768px) {
    margin: 0 2rem;
  }

  @media screen and (min-width: 992px) {
    width: 900px;
    margin: 0 auto;
  }
`;

export const Content = styled.main`
  h2 {
    margin: 2rem 1rem;
  }

  h3 {
    margin: 1.3rem 1rem;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 150px;

    h2 {
      margin: 2rem 0;
    }

    h3 {
      margin: 1.5rem 0;
    }
  }

  form {
    .group {
      margin: 0 1rem;

      @media screen and (min-width: 768px) {
        margin: 0;
      }

      .input-group {
        div {
          grid-column: span 12;
        }

        @media screen and (min-width: 768px) {
          .name {
            grid-column: span 10;
          }

          .age {
            grid-column: span 2;
          }

          .cpf {
            grid-column: span 4;
          }

          .marital-status {
            grid-column: span 8;
          }

          .state {
            grid-column: span 2;
          }

          .city {
            grid-column: span 6;
          }
        }
      }


      .btn-group {
        display: flex;
        justify-content: flex-end;
        margin-top: 39px;
        margin-bottom: 60px;

        button + button {
          margin-left: 10px;
        }
      }
    }
  }
`;

export const Line = styled.div`
    border-bottom: 1px solid #D9D9D9;
    margin: 2rem 0;
    width: 100%;

`;
