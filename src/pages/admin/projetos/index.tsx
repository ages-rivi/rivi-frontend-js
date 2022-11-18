import axios from 'axios';
import { GetStaticProps } from 'next';
import ProjetosPage from 'src/components/pages/dashboard/projetos';

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

export default function Projetos({ projects }: { projects: Projects[] }) {
  return <ProjetosPage projects={projects} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('http://localhost:4000/api/projeto');
  const projetos: Array<Projects> = res.data;
  return { props: { projects: projetos } };
};
