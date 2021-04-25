import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  hasIcon: boolean;
  primary: boolean;
  secondary: boolean;
  anchor: boolean;
}

export const Container = styled.button<ContainerProps>`
  border: 1px solid #171717;
  background: #FCFCFC;
  border-radius: 4px;
  padding: 10px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 0.2s;

  ${props => props.hasIcon &&
    css`
      svg {
        margin-right: 10px;
      }
    `
  }

  ${props => props.primary &&
    css`
      border: 1px solid #171717;
      background: #171717;
      color: #FCFCFC;
      padding: 1rem 2rem;

      &:hover {
        border: 1px solid #171717;
        background: #FCFCFC;
        color: #171717;
      }
    `
  }

  ${props => props.secondary &&
    css`
      border: 1px solid #171717;
      background: #FCFCFC;
      color: #171717;
      padding: 1rem 2rem;

      &:hover {
        border: 1px solid #171717;
        background: #171717;
        color: #FCFCFC;
      }
    `
  }

${props => props.anchor &&
    css`
      border: 1px solid #2CAD7F;
      background: #2CAD7F;
      color: #FCFCFC;

      &:hover {
        background: ${shade(0.1, '#2CAD7F')};
        color: #FCFCFC;
      }
    `
  }
`
