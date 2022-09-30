import { Box, Img, UnorderedList } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import * as icons from 'react-icons/fi';

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

/* function SidebarItens(): JSX.Element {
  return (
    <Stack direction="column" justify="center" paddingBottom="7" w="full">
      {tags.map((sm, index) => {
        return (
          <Tag
            w={{ base: 'full', sm: 'auto' }}
            textAlign="center"
            justifyContent="center"
            variant="solid"
            colorScheme={getColor(index)}
            fontWeight="bold"
            // eslint-disable-next-line react/no-array-index-key
            key={sm + index}
          >
            {sm}
          </Tag>
        );
      })}
    </Stack>
  );
} */

function SidebarChildren(): JSX.Element {
  return <Box />;
}

export default function Sidebar(): JSX.Element {
  return (
    <Box>
      <Img src="/Logo.svg" />
      <UnorderedList />
    </Box>
  );
}
