import { CheckCircleIcon, TimeIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Tag, Text } from '@chakra-ui/react';

interface Projects {
  titulo: string;
  descricao?: string;
  tags?: Array<Tags>;
  pesquisadores?: Array<Pesquisadores>;
  afiliacoes?: Array<Afiliacoes>;
  estado: string;
}

interface Tags {
  titulo: string;
  color: string;
}

interface Pesquisadores {
  nome: string;
}

interface Afiliacoes {
  nome: string;
}

function TagsStack({ tags }): JSX.Element {
  if (!tags) {
    return <Box />;
  }

  return (
    <HStack direction="row" justify="center" paddingBottom="24px">
      {tags.map((sm) => {
        return (
          <Tag
            size="sm"
            variant="solid"
            colorScheme={sm.color}
            fontSize="sm"
            fontWeight="bold"
          >
            {sm.titulo}
          </Tag>
        );
      })}
    </HStack>
  );
}

function ResearcherStack({ pesquisadores }): JSX.Element {
  if (!pesquisadores) {
    return <Box />;
  }

  return (
    <HStack direction="row" justify="center" paddingBottom="24px">
      <Text>
        {pesquisadores
          .map((pesquisador) => {
            return pesquisador;
          })
          .join(', ')}
      </Text>
      ;
    </HStack>
  );
}

function AfiliacoesStack({ afiliacoes }): JSX.Element {
  if (!afiliacoes) {
    return <Box />;
  }

  /*
  const afiliacoesUnicas = afiliacoes.filter((afiliacao, index) => {
    return (
      index ===
      afiliacoes.findIndex((outro) => {
        return afiliacao.nome === outro.nome;
      })
    );
  });
  */

  const afiliacoesUnicas = Array.from(new Set(afiliacoes));
  return (
    <HStack direction="row" justify="center" paddingBottom="24px">
      <Text>
        {afiliacoesUnicas
          .map((afiliacao) => {
            return afiliacao;
          })
          .join(', ')}
      </Text>
    </HStack>
  );
}

function IconProject({ estado }): JSX.Element {
  if (!estado) {
    return <Box />;
  }

  if (estado === 'ativo') {
    return <TimeIcon boxSize={4} color="orange.400" />;
  }

  if (estado === 'off') {
    return <CheckCircleIcon boxSize={4} color="green.400" />;
  }
}

function ProjectItem({ project }): JSX.Element {
  return (
    <Box
      borderBottom={1}
      p="12px"
      width="360px"
      borderStyle="solid"
      borderColor="gray.100"
      borderRadius="20"
      shadow="xl"
      bg="gray.100"
    >
      <Flex
        color="gray.700"
        direction="row"
        justify="left"
        py="3px"
        align="right"
        maxW="300.px"
        m="auto"
      >
        <IconProject estado={project.estado} />
      </Flex>
      <Flex
        color="gray.700"
        direction="column"
        py="3px"
        align="center"
        maxW="300.px"
        m="auto"
      >
        <Text py="30px" fontWeight="medium" fontSize="2xl">
          {project.titulo}
        </Text>
        <Text paddingBottom="20px">{project.descricao}</Text>
      </Flex>
      <Flex
        color="gray.700"
        direction="column"
        py="3px"
        align="left"
        maxW="300.px"
        m="auto"
      >
        <TagsStack tags={project.tags} />
        <ResearcherStack pesquisadores={project.pesquisadores} />
        <AfiliacoesStack afiliacoes={project.afiliacoes} />
      </Flex>
    </Box>
  );
}

export default ProjectItem;
