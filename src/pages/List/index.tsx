import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';

import Header from '../../components/modules/Header';
import Button from '../../components/elements/Button';
import Card from '../../components/modules/Card';
import Footer from '../../components/modules/Footer';

import { Nav, Container, Content, Line } from '../../styles/pages/Create';

export default function List() {
  return (
    <>
      <Header />

      <Container>
        <Nav>
          <Link href="/Create">
            <a>
              <Button anchor={true} icon={FaPlus}>Novo</Button>
            </a>
          </Link>
        </Nav>
        <Line />

        <Content>
          <h2>LISTA DE PESSOAS</h2>

          <div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Content>
      </Container>

      <Footer />
    </>
  );
}
