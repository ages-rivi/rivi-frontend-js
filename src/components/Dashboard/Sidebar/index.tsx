import {
  Avatar,
  Box,
  CloseButton,
  Collapse,
  Flex,
  HStack,
  Icon,
  IconButton,
  Img,
  Link,
  Menu,
  MenuButton,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import * as icons from 'react-icons/fi';

import { FiMenu } from 'react-icons/fi';

interface SideItem {
  icon: IconType;
  name: string;
  href?: string;
  sub?: Array<Sub>;
}

interface Sub {
  name: string;
  href: string;
}

const SIDE_ITENS: Array<SideItem> = [
  {
    icon: icons.FiHome,
    name: 'Home',
    href: '/admin',
  },
  {
    icon: icons.FiFileText,
    name: 'Questionários',
    sub: [
      { name: 'Listar', href: '/admin' },
      {
        name: 'Adicionar',
        href: '/admin',
      },
    ],
  },
  {
    icon: icons.FiUser,
    name: 'Pesquisadores',
    sub: [
      { name: 'Listar', href: '/admin' },
      {
        name: 'Adicionar',
        href: '/admin',
      },
    ],
  },
  {
    icon: icons.FiUser,
    name: 'Linhas de Pesquisa',
    sub: [
      { name: 'Listar', href: '/admin' },
      {
        name: 'Adicionar',
        href: '/admin',
      },
    ],
  },
];

type NavProps = {
  children: SideItem;
};

function NavItem(props: NavProps): JSX.Element {
  const { isOpen, onToggle } = useDisclosure();

  const { href, icon, name, sub } = props.children;

  return (
    <>
      <Link
        onClick={onToggle}
        href={href && href}
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
      >
        <Flex
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'gray.100',
          }}
          backgroundColor={isOpen ? 'gray.100' : 'white'}
          align="center"
          justify="space-between"
        >
          <Flex>
            {icon && <Icon mr="4" fontSize="16" as={icon} />}
            {name}
          </Flex>
        </Flex>
      </Link>
      {sub && (
        <Collapse in={isOpen} animateOpacity>
          {sub.map((submenu: Sub) => {
            return (
              <HStack
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: 'cyan.400',
                  color: 'white',
                }}
              >
                <Icon boxSize={2} mr="6px" as={icons.FiCircle} />
                <Link href={submenu.href}>
                  <Text>{submenu.name}</Text>
                </Link>
              </HStack>
            );
          })}
        </Collapse>
      )}
    </>
  );
}

function SidebarContent(): JSX.Element {
  return (
    <Box
      boxShadow="2xl"
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Img src="/Logo.svg" />
        <CloseButton display={{ base: 'flex', md: 'none' }} />
      </Flex>
      {SIDE_ITENS.map((link) => {
        return <NavItem>{link}</NavItem>;
      })}
    </Box>
  );
}

function MobileNav({ onOpen, ...rest }: MobileProps): JSX.Element {
  return (
    <Flex
      boxShadow="lg"
      ml="270px"
      mr="30px"
      mt="25px"
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
      borderRadius="10"
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems="center">
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar
                  size="sm"
                  src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <Icon as={icons.FiChevronDown} />
                </Box>
              </HStack>
            </MenuButton>
            {/*

            TO BE DEFINED
            
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList> */}
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
}

export default function SidebarWithHeader({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue('gray.100', 'gray.900')}
      boxShadow="2xl"
      w="full"
    >
      <Box>
        <SidebarContent />
      </Box>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface MobileProps {
  onOpen: () => void;
}
