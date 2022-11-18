import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import projetosApi from '@lib/projetos';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRef, useState } from 'react';
import ProjectItem from 'src/components/@core/ui/molecules/views/Cards/ProjetoCard';

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

export default function EditaProjetos({
  projetos,
}: {
  projetos: Projects;
}): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const [emptyData, setEmptyData] = useState({
    titulo: projetos.titulo,
    descricao: projetos.descricao,
    tags: projetos.tags?.map((tag) => {
      return ` ${tag}`;
    }),
    pesquisadores: projetos.pesquisadores
      ?.map((pesquisador) => {
        return pesquisador.nome;
      })
      .join(', '),
    afiliacoes: projetos.pesquisadores
      ?.map((pesquisador) => {
        return pesquisador.afiliacao;
      })
      .join(', '),
    estado: projetos.estado,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(emptyData);
  };

  const onChange = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setEmptyData({ ...emptyData, [name]: value });
  };

  const onChangeTmp = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setEmptyData({
      ...emptyData,
      [name]: value.split(', '),
    });
  };

  return (
    <Flex justify="center" direction="column" p="5">
      <Flex
        justify="center"
        direction="column"
        maxW="1330px"
        w="full"
        margin="auto"
        gap="3"
      >
        <Text textAlign="center" fontWeight="medium" fontSize="3xl">
          Projeto dos Alunos
        </Text>
        <Flex justify="center" direction="row" gap="3">
          <form onSubmit={handleSubmit}>
            <Flex direction="column" p={4} gap="3">
              <FormControl>
                <FormLabel>Título</FormLabel>
                <Input
                  name="titulo"
                  value={emptyData.titulo}
                  placeholder="Ex: Relações Interpessoais"
                  onChange={onChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Descrição</FormLabel>
                <Textarea
                  name="descricao"
                  value={emptyData.descricao}
                  placeholder="Ex: Descrição do projeto"
                  onChange={onChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Tags</FormLabel>
                <Input
                  name="tags"
                  value={emptyData.tags}
                  placeholder="Ex: autocompaixão"
                  onChange={onChangeTmp}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Pesquisadores</FormLabel>
                <Input
                  name="pesquisadores"
                  value={emptyData.pesquisadores}
                  placeholder="Ex: John Doe"
                  onChange={onChangeTmp}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Afiliações</FormLabel>
                <Input
                  name="afiliacoes"
                  value={emptyData.afiliacoes}
                  placeholder="PUCRS"
                  onChange={onChangeTmp}
                />
              </FormControl>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                mt="14"
                gap={{ base: '2', md: '6' }}
                w={{ base: 'full', md: 'sm' }}
              >
                <Button
                  colorScheme="teal"
                  w={{ base: 'full', md: '' }}
                  type="submit"
                >
                  Salvar
                </Button>
                <Button colorScheme="teal" w={{ base: 'full', md: '' }}>
                  Cancelar
                </Button>
                <Button
                  onClick={onOpen}
                  colorScheme="teal"
                  w={{ base: 'full', md: '' }}
                  type="submit"
                >
                  Excluir
                </Button>
                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Delete Customer
                      </AlertDialogHeader>

                      <AlertDialogBody>
                        Tem certeza que deseja excluir esse projeto? Você não
                        pode desfazer essa ação depois.
                      </AlertDialogBody>

                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Cancelar
                        </Button>
                        <Button colorScheme="red" onClick={onClose} ml={3}>
                          Excluir
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
              </Flex>
            </Flex>
          </form>
          <ProjectItem project={emptyData} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projetos: Array<Projects> = await projetosApi.getAllProjects();

  const paths = projetos.map((projeto) => {
    return {
      params: { id: projeto.id },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string };
  const projetos: Projects = await projetosApi.getProjectById(id);

  return { props: { projetos } };
};
