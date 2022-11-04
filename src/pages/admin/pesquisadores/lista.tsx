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
import getAllResearchers from '@lib/pesquisadores';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import * as icons from 'react-icons/fi';

const paginationComponentOptions = {
  rowsPerPageText: 'Itens por página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos',
};

export const columns = [
  {
    name: 'Nome',
    selector: 'nome',
    sortable: true,
    width: '88%',
  },
  {
    key: 'action',
    text: 'Action',
    width: '10%',
    sortable: false,
    cell: () => {
      return (
        <Menu>
          <MenuButton>
            <Icon as={icons.FiMoreVertical} />
          </MenuButton>
          <MenuList minWidth="100px">
            <MenuItem>Selecionar</MenuItem>
            <MenuItem>
              Editar / <br /> Visualizar
            </MenuItem>
            <MenuItem>Deletar</MenuItem>
            <MenuItem>Arquivar</MenuItem>
          </MenuList>
        </Menu>
      );
    },
  },
];

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllResearchers();
  return { props: { data } };
};

// eslint-disable-next-line react/prop-types
export default function ListaProjetos({ data }: any): React.ReactNode {
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
      // eslint-disable-next-line react/prop-types
      const dadoFiltradoTmp = data.filter((pesquisador: { nome: string }) => {
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
              // eslint-disable-next-line
              // @ts-ignore
              onChange={onChange}
            />
          </Flex>
          <Divider />
          <DataTable
            // eslint-disable-next-line
            // @ts-ignore
            columns={columns}
            paginationComponentOptions={paginationComponentOptions}
            className="dataTable"
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
        <Link href="/admin/pesquisadores/edita">
          <Button colorScheme="teal" w={{ base: '500', md: '' }}>
            Novo Pesquisador
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
