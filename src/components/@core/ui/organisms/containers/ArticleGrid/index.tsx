import { useRouter } from 'next/router';
import ArticleGridView from '../../views/ArticleGrid';

interface Article {
  id: string;
  title: string;
  category: string;
  description: string;
}

interface ArticleProps {
  articles: Article[];
}

export default function ArticleGrid({ articles }: ArticleProps) {
  const router = useRouter();
  return <ArticleGridView base_href={router.pathname} articles={articles} />;
}
