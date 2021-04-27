import React, { SelectHTMLAttributes } from 'react';
import { UseFormRegister } from "react-hook-form";

import { Container, Error } from './styles';

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Array<string>;
  id: string;
  name: string;
  register: UseFormRegister<any>;
  required: boolean;
  error: string;
}

const Select: React.FC<InputProps> = ({ id, name, options, label, register, required, error, ...rest }) => (
  <Container>
    {label && <label htmlFor={id}>{label}</label>}
    <select
      id={id}
      name={name}
      {...register(name, { required })}
      {...rest}
    >
      <option value="">Selecione</option>
      {options && options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
    {error &&
      <div>
        <Error>
          <div>
            <p>{error}</p>
          </div>
        </Error>
      </div>
    }
  </Container>
);


export default Select;
