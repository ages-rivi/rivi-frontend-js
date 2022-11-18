import {
  Box,
  Button,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
} from '@chakra-ui/react';
import projetosApi from '@lib/projetos';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

interface Projects {
  id: string;
  titulo: string;
  descricao?: string;
  estado?: string;
  tags?: Array<string>;
  pesquisadores?: Array<Pesquisadores>;
}

interface Pesquisadores {
  nome: string;
  afiliacao: string;
}

export default function ListaProjetos({
  projects,
}: {
  projects: Projects[];
}): React.ReactNode {
  const router = useRouter();
  const [isRenddered, setIsRended] = useState(false);
  const [projectsState, setProjectsState] = useState<Projects[]>(projects);

  const navigateToLink = () => {
    router.push(`/admin/editar`);
  };

  useEffect(() => {
    setIsRended(true);
  }, []);

  const paginationComponentOptions = {
    selectAllRowsItem: true,
    selectAllRowsItemText: 'ALL',
  };

  const columns = [
    {
      name: 'Título',
      selector: 'titulo',
      sortable: true,
    },
    {
      name: 'Pesquisador',
      selector: 'pesquisadores',
      sortable: true,
      cell: (d: { pesquisadores: Pesquisadores[] }): JSX.Element => {
        return (
          <span>
            {d.pesquisadores
              .map((pesquisador) => {
                return pesquisador.nome;
              })
              .join(', ')}
          </span>
        );
      },
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
      selector: 'pesquisadores',
      sortable: true,
      cell: (d: { pesquisadores: Pesquisadores[] }): JSX.Element => {
        return (
          <span>
            {d.pesquisadores
              .map((pesquisador) => {
                return pesquisador.afiliacao;
              })
              .join(', ')}
          </span>
        );
      },
    },
    {
      key: 'action',
      text: 'Action',
      className: 'action',
      width: 100,
      selector: 'id',
      align: 'left',
      sortable: false,
      cell: (d: { id: string }) => {
        return (
          <Menu>
            <MenuButton size="lg">
              <Text fontSize="2xl">...</Text>
            </MenuButton>
            <MenuList minWidth="100px">
              <MenuItem
                onClick={() => {
                  router.push({
                    pathname: `/admin/projetos/editar/[id]`,
                    query: { id: d.id },
                  });
                }}
              >
                Editar/Visualizar
              </MenuItem>
              <MenuItem>Excluir</MenuItem>
            </MenuList>
          </Menu>
        );
      },
    },
  ];

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
      setProjectsState(projects);
    } else {
      const dadoFiltradoTmp = projectsState.filter((projeto) => {
        return projeto.titulo.toLowerCase().includes(value.toLowerCase());
      });
      setProjectsState(dadoFiltradoTmp);
    }
  };

  return (
    <Flex justify="center" direction="column" p="6">
      <Flex justify="center" direction="row" p="6">
        <Box
          mx="auto"
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
              Projetos dos Pesquisadores
            </Text>
            {/*
            <Input
              name="titulo"
              placeholder="🔎  Digite o título que deseja buscar..."
              onChange={onChange}
            />
            */}
          </Flex>
          <Divider />
          <DataTable
            // eslint-disable-next-line
            // @ts-ignore
            columns={columns}
            data={projectsState}
            noHeader
            defaultSortField="id"
            defaultSortAsc={false}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            highlightOnHover
            button
          />
        </Box>
      </Flex>
      <Flex justify="center">
        <Button
          colorScheme="teal"
          w={{ base: '500', md: '' }}
          onClick={navigateToLink}
        >
          Novo Projeto
        </Button>
      </Flex>
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projetos: Array<Projects> = await projetosApi.getAllProjects();
  return { props: { projects: projetos } };
};
