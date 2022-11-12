// Copiado do Átomo Tag
// TO DO: Fazer o footer do card de projeto
// OBS: Esse card deve conter uma lista de nomes dos pesquisadores e uma lista de nomes das afiliação que ficam em baixo no card de Projeto

import { Tag } from '@chakra-ui/react';

interface TagProps {
  label: string;
  colorScheme: string;
}

export default function TagComponent({ label, colorScheme }: TagProps) {
  return (
    <Tag
      w={{ base: 'full', sm: 'auto' }}
      textAlign="center"
      justifyContent="center"
      variant="solid"
      colorScheme={colorScheme}
      fontWeight="bold"
    >
      {label}
    </Tag>
  );
}
