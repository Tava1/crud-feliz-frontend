import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

import { Container } from './styles';

const Card: React.FC = () => (
  <Container>

    <div className="context">
      <Link href="/">
        <a>
          <FaUserCircle size={60} />
          <div className="info">
            <div>
              <span>Nome - idade</span>
              <p><strong>Gustavo Cesar,</strong> 21</p>
            </div>

            <div>
              <span>CPF</span>
              <p>123.123.123-10</p>
            </div>

            <div>
              <span>Cidade - Estado</span>
              <p>São Paulo - SP</p>
            </div>
          </div>
        </a>
      </Link>
    </div>

    <div className="delete">
      <Link href="/">
        <a>
          <IoMdClose size={58} />
        </a>
      </Link>
    </div>

  </Container>

);

export default Card;
