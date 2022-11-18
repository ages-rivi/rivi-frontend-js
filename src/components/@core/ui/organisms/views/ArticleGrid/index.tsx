// TO DO: Adicionar nova propriedade DOI no Grid

import { Flex, Grid, GridItem } from '@chakra-ui/react';
import ArticleCard from '../../../molecules/views/Cards/ArticleCard';

interface Article {
  id: string;
  title: string;
  category: string;
  description: string;
}

interface ArticleGridProps {
  articles: Article[];
  base_href: string;
}

export default function ArticleGrid({ articles, base_href }: ArticleGridProps) {
  return (
    <Flex maxW="1000px" w="full" mx="auto" align="center" justify="center">
      <Grid mt="6" templateColumns="repeat(12, 1fr)" gap={6} w="full">
        {articles.map(({ id, title, category, description }) => {
          return (
            <GridItem colSpan={{ base: 12, md: 6 }} key={id}>
              <ArticleCard
                href={`${base_href}/${id}`}
                title={title}
                category={category}
                description={description}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
}
