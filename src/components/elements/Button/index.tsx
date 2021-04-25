import React, { ButtonHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons'

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
  primary?: boolean;
  secondary?: boolean;
  anchor?: boolean;
}

const Button: React.FC<ButtonProps> = ({ primary: isPrimary, secondary: isSecondary, anchor: isAnchor, icon: Icon, children, ...rest }) => (
  <Container
    primary={!!isPrimary}
    secondary={!!isSecondary}
    anchor={!!isAnchor}
    hasIcon={!!children}
    {...rest}
  >
    {Icon && <Icon size={25} />}
    {children}
  </Container>
);

export default Button;
