import { FaList } from 'react-icons/fa';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Link from 'next/link';

import Header from '../../components/modules/Header';
import Footer from '../../components/modules/Footer';

import Input from '../../components/elements/Input';
import Select from '../../components/elements/Select';
import Button from '../../components/elements/Button';

import { Nav, Container, Content, Line } from '../../styles/pages/Create';

const estadoCivil = ['Solteiro(a)', 'Casado(a)'];

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório.'),
  age: yup.number().typeError('A idade deve ser válida.').required('Campo obrigatório.').positive('A idade deve ser válida.').integer('A idade deve ser válida.'),
  cpf: yup.string().min(11, 'CPF deve ser válido.').max(11, 'CPF deve ser válido.').required('Campo obrigatório.'),
  marital_status: yup.string().required('Campo obrigatório.'),
  state: yup.string().required('Campo obrigatório.'),
  city: yup.string().required('Campo obrigatório.'),
})

export default function Create() {

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const handleNewPerson = async (data) => {
    console.log(data);
  };

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
          <form onSubmit={handleSubmit(handleNewPerson)}>
            <div className="group">
              <div className="input-group grid">

                <div className="name">
                  <Input
                    label="NOME"
                    type="text"
                    id="name"
                    name="name"
                    required
                    register={register}
                    error={errors.name?.message}
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
                    register={register}
                    error={errors.age?.message}
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
                    register={register}
                    error={errors.cpf?.message}
                  />
                </div>

                <div className="marital-status">
                  <Select
                    label="ESTADO CIVIL"
                    options={estadoCivil}
                    id="marital_status"
                    name="marital_status"
                    required
                    register={register}
                    error={errors.marital_status?.message}
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
                    register={register}
                    required
                    error={errors.state?.message}
                  />
                </div>

                <div className="city">
                  <Select
                    label="CIDADE"
                    id="city"
                    name="city"
                    options={estadoCivil}
                    register={register}
                    required
                    error={errors.city?.message}
                  />
                </div>
              </div>

              <div className="btn-group">
                <Button
                  secondary={true}
                >
                  Cancelar
                </Button>

                <Button
                  primary={true}
                  type="submit"
                >
                  Registrar
                </Button>
              </div>
            </div>

          </form>

        </Content>
      </Container>

      <Footer />
    </>
  )
}
