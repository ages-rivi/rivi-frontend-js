import {
  Box,
  Flex,
  Link,
  Popover,
  PopoverTrigger,
  Stack,
} from '@chakra-ui/react';
import NextLink from 'next/link';

interface Route {
  path: string;
  name: string;
}

interface DesktopHeaderProps {
  routes: Route[];
  activeRoute: string;
}

export default function DesktopHeader({
  routes,
  activeRoute,
}: DesktopHeaderProps) {
  return (
    <Stack direction="row" spacing={4}>
      {routes.map((route) => {
        const isActive = activeRoute === route.path;
        return (
          <Box key={route.path}>
            <Popover trigger="hover" placement="bottom-start">
              <PopoverTrigger>
                <NextLink href={route.path} passHref>
                  <Flex
                    as={Link}
                    p={2}
                    fontWeight={isActive ? 'bold' : 'medium'}
                    color={isActive ? 'teal.500' : 'gray.600'}
                    _hover={{
                      textDecoration: 'none',
                      color: 'gray.600',
                    }}
                  >
                    {route.name}
                  </Flex>
                </NextLink>
              </PopoverTrigger>
            </Popover>
          </Box>
        );
      })}
    </Stack>
  );
}
