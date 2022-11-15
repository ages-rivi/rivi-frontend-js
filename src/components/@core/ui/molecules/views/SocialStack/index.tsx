import { Box, Stack } from '@chakra-ui/react';
import { FiLinkedin } from 'react-icons/fi';
import { SocialButton } from '../../../atoms';

export interface Social {
  facebook: string;
  instagram: string;
  linkedin: string;
}

interface SocialStackProps {
  social: Social;
}

export default function SocialStack({ social }: SocialStackProps): JSX.Element {
  if (!social) {
    return <Box />;
  }

  return (
    <Stack direction="row" gap="12">
      <SocialButton label="Facebook" href={social.facebook}>
        <FiLinkedin />
      </SocialButton>
      <SocialButton label="Instagram" href={social.instagram}>
        <FiLinkedin />
      </SocialButton>
      <SocialButton label="Linkedin" href={social.linkedin}>
        <FiLinkedin />
      </SocialButton>
    </Stack>
  );
}
