import { Button, Flex, Img, Text } from '@chakra-ui/react';
import api from '@lib/api';
import { useEffect } from 'react';

function Home(): React.ReactNode {
  useEffect(() => {
    // ? mock api call example below
    api.get('teste').then(({ data }) => {
      return console.log(data);
    });
  }, []);

  return (
    <Flex
      direction={{ base: 'column-reverse', md: 'row' }}
      p="10"
      justify="center"
      align="center"
      maxW="1300px"
      w="full"
      margin="auto"
      mt={{ base: '1vh', md: '10vh' }}
      gap="14"
    >
      <Flex
        align={{ base: 'center', md: 'flex-start' }}
        direction="column"
        color="gray.700"
        maxW="581px"
        w="full"
      >
        <Text
          fontSize={{ base: '5xl', lg: '6xl', xl: '7xl' }}
          textAlign={{ base: 'center', md: 'left' }}
          fontWeight="bold"
        >
          GRUPO RIVI
        </Text>
        <Text
          fontSize={{ base: 'xl', lg: '2xl', xl: '3xl' }}
          mb="6"
          display={{ base: 'none', md: 'flex' }}
        >
          Relações interpessoais e a violência
        </Text>
        <Text textAlign={{ base: 'center', md: 'left' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante
          lectus, semper sed tempus cursus, feugiat quis orci. Etiam a sagittis
          ex, sed lobortis lacus. Vivamus lobortis varius egestas.
        </Text>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          mt="14"
          gap={{ base: '2', md: '6' }}
          w={{ base: 'full', md: 'auto' }}
        >
          <Button colorScheme="teal" w={{ base: 'full', md: '' }}>
            Conhecer
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            w={{ base: 'full', md: '' }}
          >
            Explorar
          </Button>
        </Flex>
      </Flex>
      <Img src="Hero.svg" w={{ base: '500px', md: '50%' }} />
    </Flex>
  );
}

export default Home;
