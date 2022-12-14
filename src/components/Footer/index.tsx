import {
  Box,
  chakra,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

function SocialButton({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}): JSX.Element {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}

export default function SmallWithLogoLeft(): JSX.Element {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Image src="Logo.svg" alt="Logo" />
        <Text>Avenida Ipiranga, nº 6681, prédio 11 | Porto Alegre – RS</Text>
        <Stack direction="row" spacing={6}>
          <SocialButton label="Twitter" href="#">
            <FiFacebook />
          </SocialButton>
          <SocialButton label="YouTube" href="#">
            <FiInstagram />
          </SocialButton>
          <SocialButton label="Instagram" href="#">
            <FiLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
