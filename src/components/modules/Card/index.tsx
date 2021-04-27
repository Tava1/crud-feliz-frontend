import Link from 'next/link';
import { useCallback } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import api from '../../../services/api';

import { Container } from './styles';

interface CardProps {
  id: string
  name: string;
  age: number;
  cpf: string;
  state: string;
  city: string;
}

const Card: React.FC<CardProps> = ({ id, name, age, cpf, state, city }: CardProps) => {

  const handleDelete = useCallback(() => {
    api.delete(`people/${id}`).then(response => {
      const { status } = response;

      if (status === 200) {
        console.log('Deletado com sucesso!')
      }
    }).catch((error) => {
      console.error(error);
    })
  }, []);

  return (
    <Container>
      <div className="context">
        <Link href={{
          pathname: '/Edit',
          query: { id },
        }}>
          <a>
            <FaUserCircle size={60} />
            <div className="info">
              <div>
                <span>Nome - idade</span>
                <p><strong>{name},</strong> {age}</p>
              </div>

              <div>
                <span>CPF</span>
                <p>{cpf}</p>
              </div>

              <div>
                <span>Cidade - Estado</span>
                <p>{city} - {state}</p>
              </div>
            </div>
          </a>
        </Link>
      </div>

      <div className="delete">
        <button onClick={handleDelete}>
          <IoMdClose color={'#F83838'} size={50} />
        </button>
      </div>

    </Container >

  )
};

export default Card;
