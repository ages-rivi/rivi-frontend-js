import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Text,
  Textarea,
} from '@chakra-ui/react';

function EditaProjetos(): JSX.Element {
  return (
    <Flex direction="column" p="5">
      <Flex direction="column" maxW="1330px" w="full" margin="auto" gap="3">
        <Text textAlign="Left" fontWeight="medium" fontSize="3xl">
          Projeto dos Alunos
        </Text>
        <ChakraProvider>
          <Box p={4}>
            <Text
              textAlign="left"
              mt="6"
              mb="5"
              fontWeight="inter"
              gap="5"
              fontSize="1xl"
            >
              Título
            </Text>

            <Textarea
              mt="-5"
              placeholder="Ex: Relações Interpessoais"
              textAlign="left"
            />
            <Text
              textAlign="left"
              mt="6"
              mb="5"
              fontWeight="inter"
              gap="5"
              fontSize="1xl"
            >
              Descrição
            </Text>

            <Textarea
              mt="-5"
              placeholder="Ex: Descrição do projeto"
              textAlign="left"
            />
            <Text
              textAlign="left"
              mt="6"
              mb="5"
              fontWeight="inter"
              gap="5"
              fontSize="1xl"
            >
              Temáticas
            </Text>

            <Textarea
              mt="-5"
              placeholder="Ex: autocompaixão"
              textAlign="left"
            />
            <Text
              textAlign="left"
              mt="6"
              mb="5"
              fontWeight="inter"
              gap="5"
              fontSize="1xl"
            >
              Aluno
            </Text>

            <Textarea mt="-5" placeholder="Ex: John Doe" textAlign="left" />
            <Text
              textAlign="left"
              mt="6"
              mb="5"
              fontWeight="inter"
              gap="5"
              fontSize="1xl"
            >
              Afiliações
            </Text>

            <Textarea mt="-5" placeholder="PUCRS" textAlign="left" />
            <Flex
              direction={{ base: 'column', md: 'row' }}
              mt="14"
              gap={{ base: '2', md: '6' }}
              w={{ base: 'full', md: 'sm' }}
            >
              <Button colorScheme="teal" w={{ base: 'full', md: '' }}>
                Salvar
              </Button>
              <Button
                colorScheme="black"
                variant="outline"
                w={{ base: 'full', md: '' }}
              >
                Cancelar
              </Button>
            </Flex>
          </Box>
        </ChakraProvider>
      </Flex>
    </Flex>
  );
}

export default EditaProjetos;
