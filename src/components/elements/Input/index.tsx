import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ id, name, label, ...rest }) => {
  return (
    <Container>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        name={name}
        {...rest}
      />
    </Container>
  );
}

export default Input;
