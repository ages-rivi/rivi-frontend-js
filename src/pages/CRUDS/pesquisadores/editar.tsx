import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';
import ProjectCard from '@components/ProjectCard';
import { useState } from 'react';

export default function EditaProjetos(): JSX.Element {
  const [emptyData, setEmptyData] = useState({
    nome: '',
    tags: '',
    descricao: '',
    facebook: '',
    linkedin: '',
    estado: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // console.log(emptyData);
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
          Novo Pesquisador
        </Text>
        <Flex justify="center" direction="row" gap="3">
          <form onSubmit={handleSubmit}>
            <Flex direction="column" p={4} gap="3">
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input
                  name="nome"
                  placeholder="Ex: John Doe"
                  onChange={onChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Tags</FormLabel>
                <Select
                  name="tags"
                  placeholder="Ex: autocompaixão"
                  onChange={onChangeTmp}
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
                <FormLabel>Facebook</FormLabel>
                <Input
                  class="socialmedia"
                  name="afiliacoes"
                  placeholder="Ex: link"
                  onChange={onChangeTmp}
                />
              </FormControl>
              {/*  */}
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
                  colorScheme="gray"
                  variant="outline"
                  w={{ base: 'full', md: '' }}
                >
                  Cancelar
                </Button>
              </Flex>
            </Flex>
          </form>
          <ProjectCard project={emptyData} />
        </Flex>
      </Flex>
    </Flex>
  );
}
