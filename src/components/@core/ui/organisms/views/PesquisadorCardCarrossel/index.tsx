// TO DO: Adicionar nova propriedade DOI no Grid

import { Box, Flex, Text } from '@chakra-ui/react';
import PesquisadorCard from '../../../molecules/views/Cards/PesquisadorCard';

interface Social {
  facebook: string;
  instagram: string;
  linkedin: string;
}

interface Pesquisador {
  nome: string;
  descricao: string;
  tags: string[];
  social: Social;
  colors: (index: number) => string;
}

interface PesquisadorCardCarrosselProps {
  pesquisadores: Pesquisador[];
  titulo: string;
}

export default function PesquisadorCardCarrossel({
  pesquisadores,
  titulo,
}: PesquisadorCardCarrosselProps): JSX.Element {
  if (!pesquisadores) {
    return <Box />;
  }
  return (
    <Flex direction="column" w="full" maxW="1330px" align="center" mb="5">
      <Text fontSize="4xl" textAlign="center" fontWeight="bold" mt="5">
        {titulo}
      </Text>
      <Flex
        gap="5"
        direction={{ base: 'column', lg: 'row' }}
        maxW="full"
        overflow="auto"
        py="8"
      >
        {pesquisadores.map((pesquisador) => {
          return (
            <PesquisadorCard
              nome={pesquisador.nome}
              descricao={pesquisador.descricao}
              tags={pesquisador.tags}
              social={pesquisador.social}
              colors={pesquisador.colors}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}
