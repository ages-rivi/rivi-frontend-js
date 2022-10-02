import { Box, Flex, HStack, Tag, Text } from '@chakra-ui/react';

interface Project {
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

const PROJECT: Project = {
  titulo: 'Projeto XXX',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis lectus sed odio ornare, in posuere ligula euismod. Etiam sed venenatis magna. Morbi libero lacus. Donec vitae elit viverra, mattis ligula eu, facilisis nisl. Morbi malesuada, tellus feugiat convallis tempus. Nullam tempor arcu turpis, vel euismod eros tincidunt nec.',
  tags: [
    {
      titulo: 'Bullying',
      color: 'blue',
    },
    {
      titulo: 'Comunicação',
      color: 'green',
    },
    {
      titulo: 'Autocompaixão',
      color: 'pink',
    },
  ],
  pesquisadores: [
    {
      nome: 'Caio Andrade',
    },
    {
      nome: 'Flavio Vianna',
    },
  ],
  afiliacoes: [
    {
      nome: 'PUCRS',
    },
    {
      nome: 'Urgs',
    },
  ],
};

function TagsStack(): JSX.Element {
  if (!PROJECT.tags) {
    return <Box />;
  }

  return (
    <HStack direction="row" justify="center" paddingBottom="24px">
      {PROJECT.tags.map((sm) => {
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

function ResearcherStack(): JSX.Element {
  if (!PROJECT.pesquisadores) {
    return <Box />;
  }

  return (
    <HStack direction="row" justify="center" paddingBottom="24px">
      {PROJECT.pesquisadores.map((sm) => {
        return <Text>{sm.nome}</Text>;
      })}
    </HStack>
  );
}

function AfiliacoesStack(): JSX.Element {
  if (!PROJECT.afiliacoes) {
    return <Box />;
  }

  return (
    <HStack direction="row" justify="center" paddingBottom="24px">
      {PROJECT.afiliacoes.map((sm) => {
        return <Text>{sm.nome}</Text>;
      })}
    </HStack>
  );
}

function ProjectItem(): JSX.Element {
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
          {PROJECT.titulo}
        </Text>
        <Text paddingBottom="20px">{PROJECT.description}</Text>
        <TagsStack />
        <ResearcherStack />
        <AfiliacoesStack />
      </Flex>
    </Box>
  );
}

export default ProjectItem;
