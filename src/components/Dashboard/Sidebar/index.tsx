import { Box, Icon, Img, Link, VStack } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import * as icons from 'react-icons/fi';

interface SidebarProps {
  sidebarItens: SideItem[];
}

interface SideItem {
  icon: IconType;
  name: string;
  href?: string;
  children?: Array<ChildrenItem>;
}

interface ChildrenItem {
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
    children: [
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
    children: [
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
    children: [
      { name: 'Listar', href: '/' },
      {
        name: 'Adicionar',
        href: '/',
      },
    ],
  },
];

function SidebarItens(): JSX.Element {
  return (
    <VStack direction="column" justify="center" paddingBottom="7" w="full">
      {SIDE_ITENS.map((si) => {
        return (
          <Box
            w={{ base: 'full', sm: 'auto' }}
            textAlign="center"
            justifyContent="center"
            fontWeight="bold"
            key={si.name}
          >
            <Link href={si.href} key={si.name}>
              <Icon as={si.icon} w={5} h={5} color="blackAlpha.700" />
              {si.name}
              <SidebarChildren children={si.children} />
            </Link>
          </Box>
        );
      })}
    </VStack>
  );
}

function SidebarChildren({
  children,
}: {
  children: ChildrenItem[];
}): JSX.Element {
  return <Box />;
}

export default function Sidebar(): JSX.Element {
  return (
    <Box>
      <Img src="/Logo.svg" />
      <SidebarItens />
    </Box>
  );
}
