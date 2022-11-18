import { Flex, Text } from '@chakra-ui/react';
import PesquisadorCardCarrossel from 'src/components/@core/ui/organisms/views/PesquisadorCardCarrossel';
import SiteTemplate from '../../../templates/site';

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
  tipo: string;
  colors: (index: number) => string;
}

interface QuemSomosProps {
  colaboradores: Pesquisador[];
  pesquisadores: Pesquisador[];
}

export default function QuemSomos({
  colaboradores,
  pesquisadores,
}: QuemSomosProps): JSX.Element {
  return (
    <SiteTemplate>
      <Flex direction="column" p="5" align="center" w="full">
        <Flex
          direction="column"
          maxW="1330px"
          w="full"
          mx="auto"
          mt="5"
          gap="3"
          mb="9"
        >
          <Text textAlign="center" fontWeight="medium" fontSize="4xl">
            Conheça o Grupo RIVI
          </Text>
          <Text textAlign="center" mb="2">
            Saiba quem está por trás do grupo!
          </Text>
          <Text textAlign="center">
            Fundado em 2013, o grupo integra o Programa de Pós-Graduação em
            Psicologia da Pontifícia Universidade Católica do Rio Grande do Sul
            (PUCRS). Tem como principal objetivo analisar as relações
            interpessoais, sócio cognições e manifestações de violência e
            desenvolver intervenções cognitivo-comportamentais em diferentes
            contextos. Faz parte da linha da área de concentração em Psicologia
            Clínica, Teorias, técnicas, intervenções na psicologia clínica.
            Destaca-se o estudo das relações entre pares, interações de amizade,
            processos como popularidade, proeminência social e habilidades e
            competências sociais, além da investigação sobre as relações entre
            pais e filhos, práticas e estilos parentais. Também contempla o
            estudo das psicopatologias na atualidade, enfocando os contextos
            virtuais e o impacto/interação das tecnologias da informação e
            comunicação.
          </Text>
        </Flex>
        <PesquisadorCardCarrossel
          pesquisadores={colaboradores}
          titulo="Grupo de Pesquisa"
        />
        <PesquisadorCardCarrossel
          pesquisadores={pesquisadores}
          titulo="Colaboradores"
        />
      </Flex>
    </SiteTemplate>
  );
}
