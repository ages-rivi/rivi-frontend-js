import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';

export default function EditaProjetos(): JSX.Element {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // eslint-disable-next-line
    // @ts-ignore
    // eslint-disable-next-line
    for (const [key, value] of data.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <Flex direction="column" p="5">
      <Flex direction="column" maxW="1330px" w="full" margin="auto" gap="3">
        <Text fontWeight="medium" fontSize="3xl">
          Projeto dos Alunos
        </Text>
        <form onSubmit={handleSubmit}>
          <Flex direction="column" p={4} gap="3">
            <FormControl>
              <FormLabel>Título</FormLabel>
              <Input name="title" placeholder="Ex: Relações Interpessoais" />
            </FormControl>
            <FormControl>
              <FormLabel>Temáticas</FormLabel>
              <Input name="themes" placeholder="Ex: autocompaixão" />
            </FormControl>
            <FormControl>
              <FormLabel>Aluno</FormLabel>
              <Input name="student" placeholder="Ex: John Doe" />
            </FormControl>
            <FormControl>
              <FormLabel>Afiliações</FormLabel>
              <Input name="afiliations" placeholder="PUCRS" />
            </FormControl>
            <FormControl>
              <FormLabel>Descrição</FormLabel>
              <Textarea
                name="description"
                placeholder="Ex: Descrição do projeto"
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
                colorScheme="gray"
                variant="outline"
                w={{ base: 'full', md: '' }}
              >
                Cancelar
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
}
