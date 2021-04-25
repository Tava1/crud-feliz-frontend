import styled from 'styled-components';

export const Container = styled.div`
  /* width: 100%; */
  height: 100px;
  background: #F6F6F6;
  border-radius: 4px;
  margin: 10px 1rem;
  box-shadow: 1px 1px 10px rgba(23, 23, 23, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin: 10px 0;
  }

  // Detail
  .context {
    a {
      display: flex;
      align-items: center;

      svg {
        color: #6796B8;
        margin: 0 1rem;
      }
    }

    .info {
      @media screen and (min-width: 768px) {
        display: flex;
      }

      div {
        @media screen and (min-width: 768px) {
          margin-right: 1.5rem;
        }

        span {
          font-size: 0.8rem;
          color: #A6A6A6;
        }

        p {
          font-size: 1.2rem;
        }
      }

      div:first-child {
        @media screen and (min-width: 768px) {
          min-width: 190px;
        }
      }

      div:last-child {
        display: none;

        @media screen and (min-width: 768px) {
          display: block;
        }

        span {
          font-size: 0.8rem;
          color: #A6A6A6;
        }

        p {
          font-size: 1.1rem;
        }
      }
    }
  }

  // Delete
  .delete {
    border-left: 1px solid #D2D2D2;

    a {
      padding: 0 1rem;

      svg {
        color: #F83838;
      }
    }
  }
`;
