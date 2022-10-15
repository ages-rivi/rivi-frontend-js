import { articles as mockArticles } from '@api/mock/articles';
import { Flex, Text } from '@chakra-ui/react';
import ArticleGrid from '@components/ArticleGrid';
import Filter from '@components/Filter';
import SearchInput from '@components/SearchInput';
import { Article } from '@interfaces/Article';
import { useState } from 'react';

export default function Artigos({
  articles,
}: {
  articles: Article[];
}): React.ReactNode {
  const [articlesState, setArticlesState] = useState<Article[]>(articles);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Flex p="5" direction="column" mt="5" align="center" gap="3">
      <Text textAlign="center" fontWeight="medium" fontSize="4xl">
        Artigos
      </Text>
      <SearchInput
        setIsLoading={setIsLoading}
        setSearchResult={setArticlesState}
        filter={Filter}
        url="search?q"
      />
      <Flex>
        <ArticleGrid isLoading={isLoading} articles={articlesState} />
      </Flex>
    </Flex>
  );
}

export async function getStaticProps() {
  return {
    props: {
      articles: mockArticles,
    },
  };
}
