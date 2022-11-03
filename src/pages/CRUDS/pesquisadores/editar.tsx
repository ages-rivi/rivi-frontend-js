import { members } from '@api/mock/members';
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
import MemberCard from '@components/Members/MemberCard';
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
    <Flex justify="center" direction="row" p="5" bg="gray.50">
      <Flex borderRadius="10px" bg="white">
        <Flex
          align="start"
          padding={4}
          justify="center"
          direction="column"
          maxW="1330px"
          w="1080px"
          h="840px"
          margin="auto"
          gap="3"
        >
          <Text textAlign="start" fontWeight="medium" fontSize="3xl">
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
                <div className="socialmedia">
                  <FormLabel width="150px">Facebook</FormLabel>
                  <Input
                    name="facebook"
                    placeholder="Ex: link"
                    onChange={onChangeTmp}
                  />
                </div>
                <div className="socialmedia">
                  <FormLabel>Linkedin</FormLabel>
                  <Input
                    name="linkedin"
                    placeholder="Ex: link"
                    onChange={onChangeTmp}
                  />
                </div>
                <div className="socialmedia">
                  <FormLabel>WhatsApp</FormLabel>
                  <Input
                    name="whatsapp"
                    placeholder="Ex: link"
                    onChange={onChangeTmp}
                  />
                </div>
                <div className="socialmedia">
                  <FormLabel>Lattes</FormLabel>
                  <Input
                    name="lattes"
                    placeholder="Ex: link"
                    onChange={onChangeTmp}
                  />
                </div>
                <div className="socialmedia">
                  <FormLabel>Email</FormLabel>
                  <Input
                    name="email"
                    placeholder="Ex: link"
                    onChange={onChangeTmp}
                  />
                </div>
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
          </Flex>
        </Flex>
      </Flex>
      <Flex h="559px" p="5" align="center">
        <MemberCard key={members[1].id} member={members[1]} />
      </Flex>
    </Flex>
  );
}
