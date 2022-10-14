import {
  Box,
  Divider,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

export const columns = [
  {
    name: 'Título',
    selector: 'titulo',
    sortable: true,
  },
  {
    name: 'Pesquisador',
    selector: 'pesquisador',
    sortable: true,
  },
  {
    name: 'Tags',
    selector: 'tags',
    sortable: true,
    cell: (d: { tags: string[] }): JSX.Element => {
      return <span>{d.tags.join(', ')}</span>;
    },
  },
  {
    name: 'Afiliações',
    selector: 'afiliacoes',
    sortable: true,
  },
  {
    key: 'action',
    text: 'Action',
    className: 'action',
    width: 100,
    align: 'left',
    sortable: false,
    cell: () => {
      return (
        <Menu>
          <MenuButton size="lg">
            <Text fontSize="2xl">...</Text>
          </MenuButton>
          <MenuList minWidth="100px">
            <MenuItem>Selecionar</MenuItem>
            <MenuItem>Editar</MenuItem>
            <MenuItem>Deletar</MenuItem>
            <MenuItem>Visualizar</MenuItem>
            <MenuItem>Arquivar</MenuItem>
          </MenuList>
        </Menu>
      );
    },
  },
];

export const data = [
  {
    id: 1,
    titulo: 'Relações Interpessoais',
    afiliacoes: 'PUCRS',

    tags: ['Autocompaixão', 'Comunicação'],
    pesquisador: 'Tim Burton',
    alunos: 'Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page',
    descricao:
      'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg',
  },
  {
    id: 2,
    titulo: 'Convivio escolar',
    afiliacoes: 'URGS',
    runtime: '42',
    tags: ['Autocompaixão', 'Bullying', 'Comunicação'],
    pesquisador: 'Bim Burton',
    alunos: 'Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page',
    descricao:
      'B couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg',
  },
  {
    id: 3,
    titulo: 'Convivio escolar',
    afiliacoes: 'URGS',
    runtime: '42',
    tags: ['Autocompaixão', 'Bullying', 'Comunicação'],
    pesquisador: 'Bim Burton',
    alunos: 'Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page',
    descricao:
      'B couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg',
  },
  {
    id: 4,
    titulo: 'Convivio escolar',
    afiliacoes: 'URGS',
    runtime: '42',
    tags: ['Autocompaixão', 'Bullying', 'Comunicação'],
    pesquisador: 'Bim Burton',
    alunos: 'Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page',
    descricao:
      'B couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
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
        return projeto.titulo.toLowerCase().includes(value.toLowerCase());
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
            width="45"
            height="45"
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
            placeholder="🔎  Digite o título que deseja buscar..."
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
          selectableRows
          button
        />
      </Box>
    </Flex>
  );
}
