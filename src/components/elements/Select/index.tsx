import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Array<string>;
  id: string;
  name: string;
}

const Select: React.FC<InputProps> = ({ id, name, options, label, ...rest }) => {
  return (
    <Container>
      {label && <label htmlFor={id}>{label}</label>}
      <select
        id={id}
        name={name}
        {...rest}
      >
        <option value='0'>Selecione</option>
        {options && options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </Container>
  );
}

export default Select;
