import React, { InputHTMLAttributes } from 'react';
import { UseFormRegister } from "react-hook-form";

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  name: string;
  register: UseFormRegister<any>;
  required: boolean;
  error: string;
}

const Input = ({ id, name, label, register, required, error, ...rest }: InputProps) => (
  <Container>
    {label && <label htmlFor={id}>{label}</label>}
    <input
      id={id}
      name={name}
      {...register(name, { required })}
      {...rest}
    />
    <div>
      {error &&
        <Error>
          <div>
            <p>{error}</p>
          </div>
        </Error>
      }
    </div>
  </Container>
);
export default Input;
