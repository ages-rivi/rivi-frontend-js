import { Flex } from '@chakra-ui/react';
import DashboardTemplate from 'src/components/templates/dashboard';
import ListaProjetos from 'src/pages/admin/projetos/lista';

interface Projects {
  id: string;
  titulo: string;
  descricao?: string;
  estado?: string;
  tags?: Array<string>;
  pesquisadores?: Array<Pesquisadores>;
}

interface Pesquisadores {
  nome: string;
  afiliacao: string;
}

interface SiteTemplateProps {
}

export default function Projetos({ projects }: { projects: Projects[] }): SiteTemplateProps {
  return (
    <DashboardTemplate>
      <Flex w="full">
        <ListaProjetos projects={projects} />
      </Flex>
    </DashboardTemplate>
  );
}
