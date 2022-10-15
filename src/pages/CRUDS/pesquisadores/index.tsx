import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
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
import * as icons from 'react-icons/fi';

export const columns = [
  {
    name: 'Nome',
    selector: 'nome',
    sortable: true,
  },
  {
    key: 'action',
    text: 'Action',
    className: 'action',
    width: 100,
    align: 'left',
    sortable: false,
    width: 'col col-lg-7',
    style: {
      mr: '0',
      ml: 'auto',
    },
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
    nome: 'Pedro',
  },
  {
    id: 2,
    nome: 'Santana',
  },
  {
    id: 3,
    nome: 'Timão',
  },
  {
    id: 4,
    nome: 'Pumba',
  },
  {
    id: 5,
    nome: 'Mufasa',
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
      const dadoFiltradoTmp = data.filter((pesquisador) => {
        return pesquisador.nome.toLowerCase().includes(value.toLowerCase());
      });
      setDadoFiltrado(dadoFiltradoTmp);
    }
  };

  return (
    <Flex justify="center" direction="column" p="6">
      <Flex justify="center" direction="row" p="6">
        <Box
          maxW="1000px"
          mx="auto"
          w="full"
          border="1px solid gray"
          borderColor="gray.200"
          borderRadius="md"
        >
          <Flex justify="left" direction="row" p="5" alignItems="center">
            <Icon as={icons.FiUser} />
            <Text p="2"> </Text>
            <Text
              textAlign="left"
              fontWeight="bold"
              fontSize="md"
              color="gray.700"
              mr="15px"
            >
              Pesquisadores
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
      <Flex justify="center">
        <Button colorScheme="teal" w={{ base: '500', md: '' }}>
          Novo Pesquisador
        </Button>
      </Flex>
    </Flex>
  );
}
