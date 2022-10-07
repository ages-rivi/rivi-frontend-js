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
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import * as icons from 'react-icons/fi';

import { FiChevronDown, FiMenu } from 'react-icons/fi';

interface SidebarProps {
  sidebarItens: SideItem[];
}

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
    href: '/',
  },
  {
    icon: icons.FiFileText,
    name: 'Questionários',
    sub: [
      { name: 'Listar', href: '/' },
      {
        name: 'Adicionar',
        href: '/',
      },
    ],
  },
  {
    icon: icons.FiUser,
    name: 'Pesquisadores',
    sub: [
      { name: 'Listar', href: '/' },
      {
        name: 'Adicionar',
        href: '/',
      },
    ],
  },
  {
    icon: icons.FiUser,
    name: 'Linhas de Pesquisa',
    sub: [
      { name: 'Listar', href: '/' },
      {
        name: 'Adicionar',
        href: '/',
      },
    ],
  },
];

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue('gray.100', 'gray.900')}
      boxShadow="2xl"
    >
      <Box
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <SidebarContent onClose={onClose} />
      </Box>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
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
        return <NavItem key={link.name}>{link}</NavItem>;
      })}
    </Box>
  );
}

function NavItem({ children }: SideItem): JSX.Element {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Link
        onClick={onToggle}
        href={children.href && children.href}
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
      >
        <Box
          alignContent="space-around"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'gray.100',
          }}
          backgroundColor={isOpen ? 'gray.100' : 'white'}
        >
          {children.icon && <Icon mr="4" fontSize="16" as={children.icon} />}
          {children.name}
          {children.sub && (
            <Icon
              alignSelf="flex-end"
              mr="4"
              fontSize="16"
              as={icons.FiChevronDown}
            />
          )}
        </Box>
      </Link>
      {children.sub && (
        <Collapse in={isOpen} animateOpacity>
          {children.sub.map((sub: Sub) => {
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
                <Icon mr="4" fontSize="16" as={icons.FiCircle} />
                <Link href={sub.href}>
                  <Text>{sub.name}</Text>
                </Link>
              </HStack>
            );
          })}
        </Collapse>
      )}
    </>
  );
}

interface MobileProps {
  onOpen: () => void;
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
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
}
