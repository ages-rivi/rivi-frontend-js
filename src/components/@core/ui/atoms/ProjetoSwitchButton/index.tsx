// Copiado do Átomo SearchButton
// TO DO: Fazer o botão de switch de estado (Em andamento/Finalizados) de projetos

import { chakra, VisuallyHidden } from '@chakra-ui/react';

interface SocialButtonProps {
  children: React.ReactNode;
  label: string;
  href: string;
}

export default function SocialButton({
  children,
  label,
  href,
}: SocialButtonProps): JSX.Element {
  return (
    <chakra.button
      bg="blackAlpha.100"
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
        bg: 'blackAlpha.200',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}
