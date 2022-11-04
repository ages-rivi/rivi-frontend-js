import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import Logo from '../../../atoms/Logo';
import SocialButton from '../../../atoms/SocialButton';

interface FooterProps {
  address: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

export default function Footer({
  address,
  facebook,
  instagram,
  linkedin,
}: FooterProps): JSX.Element {
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
        <Logo />
        <Text>{address}</Text>
        <Stack direction="row" spacing={6}>
          {facebook && (
            <SocialButton label="Facebook" href={facebook}>
              <FiFacebook />
            </SocialButton>
          )}

          {instagram && (
            <SocialButton label="Instagram" href={instagram}>
              <FiInstagram />
            </SocialButton>
          )}
          {linkedin && (
            <SocialButton label="Linkedin" href={linkedin}>
              <FiLinkedin />
            </SocialButton>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
