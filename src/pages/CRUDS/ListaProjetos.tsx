import { Box, Divider, Flex, Input, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

export const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Director',
    selector: 'director',
    sortable: true,
  },
  {
    name: 'Genres',
    selector: 'genres',
    sortable: true,
    cell: (d: { genres: string[] }): JSX.Element => {
      return <span>{d.genres.join(', ')}</span>;
    },
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
  },
];

export const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
    runtime: '92',
    genres: ['Comedy', 'Fantasy'],
    director: 'Tim Burton',
    actors: 'Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page',
    plot: 'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg',
  },
  {
    id: 2,
    title: 'Ceetlejuice',
    year: '2088',
    runtime: '42',
    genres: ['Autocompaixao', 'Comedy', 'Fantasy'],
    director: 'Bim Burton',
    actors: 'Alec Baldwin, Lula Davis, Bolsonaro, Ciro',
    plot: 'B couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg',
  },
];

export default function ListaProjetos(): React.ReactNode {
  const [isRenddered, setIsRended] = useState(false);
  const [dadoFiltrado, setDadoFiltrado] = useState(data);

  useEffect(() => {
    setIsRended(true);
  }, []);

  // replace null with loading spinner
  if (!isRenddered)
    return (
      <Flex w="full" justify="center" p="20">
        <Spinner color="teal" />
      </Flex>
    );

  const onChange = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { value } = e.currentTarget;

    if (!value) {
      setDadoFiltrado(data);
    } else {
      const dadoFiltradoTmp = data.filter((projeto) => {
        return projeto.title.toLowerCase().includes(value.toLowerCase());
      });
      setDadoFiltrado(dadoFiltradoTmp);
    }
  };

  return (
    <Flex justify="center" direction="row" p="6">
      <Box
        maxW="1000px"
        w="full"
        border="1px solid gray"
        borderColor="gray.200"
        borderRadius="md"
      >
        <Flex justify="left" direction="row" p="5">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 3.7002C6.5 2.59563 7.39543 1.7002 8.5 1.7002C9.60457 1.7002 10.5 2.59563 10.5 3.7002V5.7002H15.5V10.7002H17.5C18.6046 10.7002 19.5 11.5956 19.5 12.7002C19.5 13.8048 18.6046 14.7002 17.5 14.7002H15.5V19.7002H10.5V17.7002C10.5 16.5956 9.60457 15.7002 8.5 15.7002C7.39543 15.7002 6.5 16.5956 6.5 17.7002V19.7002H1.5V14.7002H3.5C4.60457 14.7002 5.5 13.8048 5.5 12.7002C5.5 11.5956 4.60457 10.7002 3.5 10.7002H1.5V5.7002H6.5V3.7002Z"
              stroke="#718096"
              strokeWidth="2"
            />{' '}
          </svg>
          <Text p="2"> </Text>
          <Text
            textAlign="left"
            fontWeight="bold"
            fontSize="md"
            color="gray.700"
          >
            Projetos dos alunos
          </Text>
          <Input
            name="titulo"
            placeholder="Ex: Relações Interpessoais"
            onChange={onChange}
          />
        </Flex>
        <Divider />
        <DataTable
          // eslint-disable-next-line
          // @ts-ignore
          columns={columns}
          data={dadoFiltrado}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
        />
      </Box>
    </Flex>
  );
}
