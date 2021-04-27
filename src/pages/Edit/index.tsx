import { useEffect, useState, useCallback } from 'react';
import { FaList } from 'react-icons/fa';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Link from 'next/link';
import { useRouter } from 'next/router';

import Header from '../../components/modules/Header';
import Footer from '../../components/modules/Footer';
import Input from '../../components/elements/Input';
import Select from '../../components/elements/Select';
import Button from '../../components/elements/Button';
import Loading from '../../components/elements/Loading';

import api from '../../services/api';

import { Nav, Container, Content, Line } from '../../styles/pages/Edit';

const maritalStatus = ['Solteiro(a)', 'Casado(a)'];
const states = ['SP', 'PR'];
const cities = ['São Paulo', 'Campinas', 'Curitiba'];

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório.'),
  age: yup.number().typeError('A idade deve ser válida.').required('Campo obrigatório.').positive('A idade deve ser válida.').integer('A idade deve ser válida.'),
  cpf: yup.string().min(11, 'CPF deve ser válido.').max(11, 'CPF deve ser válido.').required('Campo obrigatório.'),
  marital_status: yup.string().required('Campo obrigatório.'),
  state: yup.string().required('Campo obrigatório.'),
  city: yup.string().required('Campo obrigatório.'),
});

interface Person {
  id: string;
  name: string;
  age: number;
  cpf: string;
  marital_status: string;
  state: string;
  city: string;
}

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;

  const [person, setPerson] = useState<Person>({} as Person);
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    api.get(`people/${id}`).then(response => {
      const { person } = response.data;
      setPerson(person);
    }).catch((error) => {
      console.error(error);
    })
    setLoading(false);
  }, []);

  const handleDelete = useCallback(async () => {
    api.delete(`people/${id}`).then(response => {
      const { status } = response;

      if (status === 200) {
        console.log('Deletado com sucesso!')
        router.push('/');
      }
    }).catch((error) => {
      console.error(error);
    })
  }, []);

  const handleUpdatePerson = async (data) => {
    console.log(data)
    await api.put(`people/${id}`, data).then(response => {
      const { status } = response;

      if (status === 200) {
        console.log('Atualizado com sucesso!')
        router.push('/');
      }
    });
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
          <h2>EDITAR PESSOA 💾</h2>
          <h3>INFORMAÇÕES PESSOAIS</h3>
          {loading ? (<Loading />) : (
            <form onSubmit={handleSubmit(handleUpdatePerson)}>

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
                      defaultValue={person.name}
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
                      defaultValue={person.age}
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
                      defaultValue={person.cpf}
                    />
                  </div>

                  <div className="marital-status">
                    <Select
                      label="ESTADO CIVIL"
                      options={maritalStatus}
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
                      options={states}
                      required
                      register={register}
                      error={errors.state?.message}
                    />
                  </div>

                  <div className="city">
                    <Select
                      label="CIDADE"
                      id="city"
                      name="city"
                      options={cities}
                      required
                      register={register}
                      error={errors.city?.message}
                    />
                  </div>
                </div>

                <p>Deseja excluir esta pessoa permanentemente?</p>
                <div className="btn-group">
                  <div>
                    <Button
                      delete={true}
                      onClick={handleDelete}
                    >
                      Excluir pessoa
                  </Button>
                  </div>
                  <div>
                    <Button
                      secondary={true}
                      onClick={() => router.push('/')}
                    >
                      Cancelar
                  </Button>
                    <Button
                      primary={true}
                      type="submit"
                    >
                      Salvar
                  </Button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Content>
      </Container>

      <Footer />
    </>
  )
}
