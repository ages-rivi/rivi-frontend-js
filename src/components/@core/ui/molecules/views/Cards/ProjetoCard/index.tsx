// Copiada da Molécula ArticleCard
// TO DO: Trazer informações do arquivo do MemberCard legado

import { Box, Flex, Text } from '@chakra-ui/react';
import TagStack from '../../../containers/TagStack';
import AfiliacoesStack from '../../AfiliacoesStack';
import PesquisadorStack from '../../PesquisadorStack';

interface ProjectCardProps {
  id: string;
  titulo: string;
  descricao?: string;
  estado?: string;
  tag: string[];
  pesquisadores: string;
  afiliacao: string;
}

export default function ProjetoCard({
  project,
}: {
  project: ProjectCardProps;
}): JSX.Element {
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
        {/* <IconProject project={project} /> */}
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
        <TagStack tags={project.tag} />
        <PesquisadorStack pesquisadores={project.pesquisadores} />
        <AfiliacoesStack afiliacoes={project.afiliacao} />
      </Flex>
    </Box>
  );
}
