import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import ProjectItem from '@components/ProjectCard';
import getAllProjects from '@lib/projetos';
import { GetStaticProps } from 'next';

// No banco nao tem afiliacoes e precisa por
/*
afiliacoes: [
    {
      nome: 'PUCRS',
    },
    {
      nome: 'PUCSP',
    },
    {
      nome: 'Concordia',
    },
    {
      nome: 'Marista',
    },
    {
      nome: 'UFSC',
    },
  ],
 */

function Projetos({ projects }): JSX.Element {
  return (
    <Flex direction="column" p="5">
      <Flex direction="column" maxW="1330px" w="full" margin="auto" gap="3">
        <Text textAlign="center" fontWeight="medium" fontSize="5xl">
          Linhas de Pesquisa
        </Text>
        <Text textAlign="left" mb="0" fontWeight="bold" gap="1">
          Avaliação e Intervenção em situações de violência, preconceito,
          bullying e cyberbullying
        </Text>
        Os estudos da linha de pesquisa priorizam a compreensão dos processos de
        violência e preconceito nas suas diferentes formas de manifestação. É
        ainda objetivo desenvolver e avaliar intervenções
        cognitivo-comportamentais preventivas e focais direcionadas a estes
        processos.
        <Text textAlign="left" mb="0" fontWeight="bold" gap="1">
          Pesquisa em Psicoterapia: Perspectivas Atuais
        </Text>
        <Text textAlign="left">
          Esta linha de pesquisa prioriza estudos que validem instrumentos,
          desenvolvam e avaliem intervenções em Psicologia Clínica em diferentes
          abordagens teóricas. São desenvolvidas e avaliadas intervenções
          cognitivo-comportamentais em diferentes contextos que respondam as
          demandas atuais. Assim como são repensadas e estudadas práticas
          clínicas baseadas na abordagem Psicanalítica e Sistêmica. Por fim,
          ainda, propõe diálogo com outras áreas da Psicologia como a Psicologia
          do Esporte, identificando intersecções e possibilidades de
          intervenção.
        </Text>
        <Text textAlign="left" mb="0" fontWeight="bold" gap="1">
          Relações Interpessoais e Tecnologias da Informação e Comunicação
        </Text>
        <Text textAlign="left">
          O objetivo dos estudos nesta linha de pesquisa é a investigação das
          relações interpessoais (relações amorosas, relações de amizade,
          popularidade, relações entre pais e filhos, entre outras) e o
          atravessamento/influência da tecnologia e digitalidade. Estes
          processos são analisados com ênfase na perspectiva de análise e
          intervenção clínica.
        </Text>
        <Text textAlign="center" fontWeight="medium" fontSize="5xl" p="5">
          Projetos
        </Text>
      </Flex>
      <Tabs variant="enclosed" align="center" justifyContent="center">
        <TabList mb="1em">
          <Tab _selected={{ color: 'white', bg: 'teal.500' }}>Em Andamento</Tab>
          <Tab _selected={{ color: 'white', bg: 'teal.500' }}>Finalizados</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex
              justify="center"
              direction={{ base: 'column', md: 'row' }}
              gap={{ base: '2', md: '6' }}
              w="full"
              wrap="wrap"
            >
              {projects
                .filter((project) => {
                  return project.estado === 'em andamendto';
                })
                .map((project) => {
                  return <ProjectItem project={project} />;
                })}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex
              justify="center"
              direction={{ base: 'column', md: 'row' }}
              gap={{ base: '2', md: '6' }}
              w="full"
              wrap="wrap"
            >
              {projects
                .filter((project) => {
                  return project.estado === 'concluído';
                })
                .map((project) => {
                  return <ProjectItem project={project} />;
                })}
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects();
  return { props: { projects } };
  // const nova chamada
};

export default Projetos;
