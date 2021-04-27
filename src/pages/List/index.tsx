import { useCallback, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import api from '../../services/api';

import Header from '../../components/modules/Header';
import Button from '../../components/elements/Button';
import Card from '../../components/modules/Card';
import Footer from '../../components/modules/Footer';
import Pagination from '../../components/modules/Pagination';
import Loading from '../../components/elements/Loading';

import { Nav, Container, Content, Line } from '../../styles/pages/Create';

interface PaginationInfo {
  offset: number;
  limit: number;
  total: number;
}

interface People {
  id: string;
  name: string;
  age: number;
  cpf: string;
  marital_status: string;
  state: string;
  city: string;
}

const LIMIT = 5;

export default function List() {
  const [pagination, setPagination] = useState<PaginationInfo>({} as PaginationInfo);
  const [peopleList, setPeopleList] = useState<People[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {

    api.get(`people?offset=${offset}&limit=${LIMIT}`).then(response => {
      setLoading(true);
      const { paginationInfo, people } = response.data;

      setPagination(paginationInfo)
      setPeopleList(people);
      setLoading(false);
    }).catch((error) => {
      setLoading(true);
      console.error(error);
    })
  }, [offset, peopleList]);

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
          {loading ? (<Loading />) : (

            <div>
              {
                peopleList && peopleList.map(currentPerson => (
                  <Card
                    key={currentPerson.id}
                    id={currentPerson.id}
                    name={currentPerson.name}
                    age={currentPerson.age}
                    cpf={currentPerson.cpf}
                    state={currentPerson.state}
                    city={currentPerson.city}
                  />
                ))
              }

              {
                pagination.total > LIMIT && (
                  <Pagination
                    limit={LIMIT}
                    offset={offset}
                    total={pagination.total}
                    setOffset={setOffset}
                  />
                )
              }
            </div>
          )}
        </Content>
      </Container>
      <Footer />
    </>
  );
}
