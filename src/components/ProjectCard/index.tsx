import { Box, Flex, HStack, Tag, Text } from '@chakra-ui/react';

interface Projects {
  titulo: string;
  description?: string;
  tags?: Array<Tags>;
  pesquisadores?: Array<Pesquisadores>;
  afiliacoes?: Array<Afiliacoes>;
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
            return pesquisador.nome;
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

  const afiliacoesUnicas = afiliacoes.filter((afiliacao, index) => {
    return (
      index ===
      afiliacoes.findIndex((outro) => {
        return afiliacao.nome === outro.nome;
      })
    );
  });

  return (
    <HStack direction="row" justify="center" paddingBottom="24px">
      <Text>
        {afiliacoesUnicas
          .map((afiliacao) => {
            return afiliacao.nome;
          })
          .join(', ')}
      </Text>
      ;
    </HStack>
  );
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
        direction="column"
        py="3px"
        align="center"
        maxW="300.px"
        m="auto"
      >
        <Text py="30px" fontWeight="medium" fontSize="2xl">
          {project.titulo}
        </Text>
        <Text paddingBottom="20px">{project.description}</Text>
        <TagsStack tags={project.tags} />
      </Flex>
      <Flex
        color="gray.700"
        direction="column"
        py="3px"
        align="left"
        maxW="300.px"
        m="auto"
      >
        <ResearcherStack pesquisadores={project.pesquisadores} />
        <AfiliacoesStack afiliacoes={project.afiliacoes} />
      </Flex>
    </Box>
  );
}

export default ProjectItem;
