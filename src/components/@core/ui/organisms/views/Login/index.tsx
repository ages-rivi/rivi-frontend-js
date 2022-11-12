import {
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  Heading,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import { FaLock, FaUserAlt } from 'react-icons/fa';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function LoginView({
  showPassword,
  handleShowClick,
  handleLoginClick,
}) {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Img src="/Logo.svg" />
        <Heading color="black">Entre na nossa plataforma</Heading>
        <p>para conhecer nossas features!</p>
        <Box minW={{ base: '90%', md: '468px' }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="Email" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Senha"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {/* <FormHelperText textAlign="right">
                    <Link>forgot password?</Link>
                  </FormHelperText> */}
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={handleLoginClick}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
