import { Flex, Grid, GridItem, Spinner } from '@chakra-ui/react';
import { Article } from '@interfaces/Article';
import ArticleCard from './ArticleCard';

export default function ArticleGrid({
  articles,
  isLoading,
}: {
  articles: Article[];
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <Flex mt="12">
        <Spinner color="teal.500" />
      </Flex>
    );
  }

  return (
    <Flex maxW="1000px" w="full" mx="auto" align="center" justify="center">
      <Grid mt="6" templateColumns="repeat(12, 1fr)" gap={6} w="full">
        {articles.map(({ href, title, category, description }) => {
          return (
            <GridItem colSpan={{ base: 12, md: 6 }} key={href}>
              <ArticleCard
                title={title}
                category={category}
                description={description}
                href={href}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
}
