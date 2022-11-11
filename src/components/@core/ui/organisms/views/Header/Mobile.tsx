import { Collapse, Flex, Link, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

interface Route {
  path: string;
  name: string;
}

interface MobileHeaderProps {
  isOpen: boolean;
  routes: Route[];
  activeRoute: string;
}

interface MobileNavIemProps {
  name: string;
  path: string;
  isActive: boolean;
}

function MobileNavItem({ name, path, isActive }: MobileNavIemProps) {
  return (
    <Stack spacing={4}>
      <NextLink href={path} passHref>
        <Flex
          py={2}
          as={Link}
          justify="space-between"
          align="center"
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Text
            fontWeight={isActive ? 'bold' : 'medium'}
            color={isActive ? 'teal.500' : 'gray.600'}
          >
            {name}
          </Text>
        </Flex>
      </NextLink>
    </Stack>
  );
}

export default function MobileHeader({
  isOpen,
  routes,
  activeRoute,
}: MobileHeaderProps) {
  return (
    <Collapse in={isOpen} animateOpacity>
      <Stack bg="white" p={4} display={{ lg: 'none' }}>
        {routes.map((route) => {
          const isActive = activeRoute === route.path;
          return (
            <MobileNavItem
              key={route.path}
              name={route.name}
              path={route.path}
              isActive={isActive}
            />
          );
        })}
      </Stack>
    </Collapse>
  );
}
