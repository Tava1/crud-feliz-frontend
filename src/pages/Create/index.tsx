import { FaList } from 'react-icons/fa';
import Link from 'next/link';

import Header from '../../components/modules/Header';
import Footer from '../../components/modules/Footer';

import Input from '../../components/elements/Input';
import Select from '../../components/elements/Select';
import Button from '../../components/elements/Button';

import { Nav, Container, Content, Line } from '../../styles/pages/Create';

const estadoCivil = ['Solteiro(a)', 'Casado(a)'];

export default function Create() {
  return (
    <>
      <Header />

      <Container>
        <Nav>
          <Link href="/List">
            <a>
              <Button anchor={true} icon={FaList}>Visualizar lista</Button>
            </a>
          </Link>
        </Nav>
        <Line />
        <Content>
          <h2>NOVA PESSOA 💾</h2>
          <h3>INFORMAÇÕES PESSOAIS</h3>
          <form>
            <div className="group">
              <div className="input-group grid">

                <div className="name">
                  <Input
                    label="NOME"
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>

                <div className="age">
                  <Input
                    className="age"
                    label="IDADE"
                    type="number"
                    id="age"
                    name="age"
                    required
                  />
                </div>
              </div>

              <div className="input-group grid">
                <div className="cpf">
                  <Input
                    label="CPF"
                    type="number"
                    id="cpf"
                    name="cpf"
                    required
                  />
                </div>

                <div className="marital-status">
                  <Select
                    label="ESTADO CIVIL"
                    options={estadoCivil}
                    id="marital-status"
                    name="marital-status"
                    required
                  />
                </div>
              </div>
            </div>

            <Line />

            <h3>LOCALIDADE</h3>

            <div className="group">
              <div className="input-group grid">
                <div className="state">
                  <Select
                    label="ESTADO"
                    id="state"
                    name="state"
                    options={estadoCivil}
                    required
                  />
                </div>

                <div className="city">
                  <Select
                    label="CIDADE"
                    id="city"
                    name="city"
                    options={estadoCivil}
                    required
                  />
                </div>
              </div>

              <div className="btn-group">
                <Button secondary={true} >Cancelar</Button>
                <Button primary={true} type="submit">Registrar</Button>
              </div>
            </div>

          </form>

        </Content>
      </Container>

      <Footer />
    </>
  )
}
