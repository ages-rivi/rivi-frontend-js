import { Flex, Text } from '@chakra-ui/react';
import { ArticleGrid, FilterArticles } from 'src/components/@core/ui';
import useArticle from 'src/hooks/useArticle';
import SiteTemplate from '../../../templates/site';

interface ArtigosProps {
  categories: string[];
}

export default function Artigos({ categories }: ArtigosProps) {
  const { articles, setFilter } = useArticle();
  return (
    <SiteTemplate>
      <Flex p="5" direction="column" mt="5" align="center" gap="3">
        <Text textAlign="center" fontWeight="medium" fontSize="4xl">
          Artigos
        </Text>
        <FilterArticles onFilter={setFilter} categories={categories} />
        <Flex>
          <ArticleGrid articles={articles} />
        </Flex>
      </Flex>
    </SiteTemplate>
  );
}
