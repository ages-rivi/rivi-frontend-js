import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure
} from '@chakra-ui/react';
import ProjectCard from '@components/ProjectCard';
import { useState,useRef } from 'react';
import { useRouter } from 'next/router'

export default function EditaProjetos(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const router = useRouter()
  const { query: { row }  } = router


  console.log("", row)
  const [emptyData, setEmptyData] = useState({
    titulo: '',
    descricao: '',
    tags: '',
    pesquisadores: '',
    afiliacoes: '',
    estado: '',
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
      [name]: value.split(','),
    });
  };
  
  return (
    <>
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
                  placeholder="Ex: Relações Interpessoais"
                  onChange={onChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Descrição</FormLabel>
                <Textarea
                  name="descricao"
                  placeholder="Ex: Descrição do projeto"
                  onChange={onChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Temáticas</FormLabel>
                <Input
                  name="tags"
                  placeholder="Ex: autocompaixão"
                  onChange={onChangeTmp}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Pesquisadores</FormLabel>
                <Input
                  name="pesquisadores"
                  placeholder="Ex: John Doe"
                  onChange={onChangeTmp}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Afiliações</FormLabel>
                <Input
                  name="afiliacoes"
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
                <Button 
                  colorScheme="teal"
                  w={{ base: 'full', md: '' }}
                >
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
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
            Tem certeza que deseja excluir esse projeto? Você não pode desfazer essa ação depois.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme='red' onClick={onClose} ml={3}>
                Excluir
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
                
              </Flex>
            </Flex>
          </form>
          <ProjectCard project={emptyData} />
        </Flex>
      </Flex>
    </Flex>
    </>
  );
}
