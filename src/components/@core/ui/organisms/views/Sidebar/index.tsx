import { Box, Flex, FlexProps, Icon } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { Logo } from '../../../atoms';

interface NavItemProps extends FlexProps {
  icon: IconType;
  name: string;
  href: string;
  isActive: boolean;
}

function NavItem({ icon, name, href, isActive }: NavItemProps) {
  return (
    <NextLink href={href} passHref>
      <Box style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          bgColor={isActive ? 'teal.600' : 'transparent'}
          color={isActive ? 'white' : 'black'}
          _hover={{
            bg: 'teal.500',
            color: 'white',
          }}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {name}
        </Flex>
      </Box>
    </NextLink>
  );
}

interface Link {
  name: string;
  href: string;
  icon: IconType;
}

interface SidebarContentProps {
  links: Link[];
  base_href: string;
  active_href: string;
}

function SidebarContent({
  links,
  base_href,
  active_href,
}: SidebarContentProps) {
  return (
    <Box
      transition="3s ease"
      bg="white"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Logo href={base_href} />
      </Flex>
      {links.map(({ name, icon, href }) => {
        const isActive = active_href === href;
        return (
          <NavItem
            isActive={isActive}
            key={name}
            icon={icon}
            name={name}
            href={href}
          />
        );
      })}
    </Box>
  );
}

interface SidebarProps extends SidebarContentProps {
  children: ReactNode;
}

export default function SidebarWithHeader({
  children,
  links,
  base_href,
  active_href,
}: SidebarProps): JSX.Element {
  return (
    <Box minH="100vh" bg="gray.100">
      <SidebarContent
        active_href={active_href}
        links={links}
        base_href={base_href}
      />

      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
