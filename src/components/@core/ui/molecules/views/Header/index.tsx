import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import Logo from '../../../atoms/Logo';
import DesktopHeader from './Desktop';
import MobileHeader from './Mobile';

interface Route {
  path: string;
  name: string;
}

interface HeaderProps {
  routes: Route[];
  signIn: string;
  signUp: string;
  activeRoute: string;
}

export default function Header({
  routes,
  signIn,
  signUp,
  activeRoute,
}: HeaderProps) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box
      borderBottom={1}
      borderStyle="solid"
      borderColor="gray.200"
      shadow="md"
      bg="gray.100"
    >
      <Flex
        color="gray.600"
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        align="center"
        maxW="1500px"
        m="auto"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', lg: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Logo />
          <Flex display={{ base: 'none', lg: 'flex' }} ml={10} m="auto">
            <DesktopHeader activeRoute={activeRoute} routes={routes} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          <Button as="a" color="gray.600" variant="link" href={signIn}>
            Entrar
          </Button>
          <Button
            as="a"
            display={{ base: 'none', md: 'inline-flex' }}
            colorScheme="teal"
            href={signUp}
          >
            Criar Conta
          </Button>
        </Stack>
      </Flex>
      <MobileHeader activeRoute={activeRoute} routes={routes} isOpen={isOpen} />
    </Box>
  );
}
