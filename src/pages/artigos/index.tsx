import { ArticleProvider } from 'src/contexts/ArticleContext';
import ArtigosPage from '../../components/pages/site/artigos';

interface Article {
  id: string;
  title: string;
  category: string;
  description: string;
}

interface ArtigosProps {
  articles: Article[];
  categories: string[];
}

export default function Artigos({ articles, categories }: ArtigosProps) {
  return (
    <ArticleProvider initialArticles={articles}>
      <ArtigosPage categories={categories} />
    </ArticleProvider>
  );
}

export async function getStaticProps() {
  // const { data } = await axios.get(
  //   'https://rivi-backend-node.onrender.com/api/article'
  // );
  // todo: implement backend api call
  const articles = [{ id: '1', title: '1', category: '1', description: '1' }];
  const categories = ['categoria 1'];
  return {
    props: {
      articles,
      categories,
    },
  };
}
