import { Button, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ArticleExtended } from 'old_src/interfaces/Article';
import { FiFile } from 'react-icons/fi';

export default function Article({ article }: { article: ArticleExtended }) {
  console.log(article);
  return (
    <Flex w="full" direction="column">
      <Flex w="full" h="64" bgColor="teal.500" align="center" p="8">
        <Flex maxW="1100px" w="full" mx="auto" direction="column">
          <Text fontSize="4xl" color="white" fontWeight="semibold">
            {article.title}
          </Text>
          <Text color="white">
            {article.authors.map((author, index) => {
              const comma = index === article.authors.length - 1 ? '' : ', ';
              return `${author}${comma}`;
            })}
          </Text>
          <Text color="white" as="i" mt="2">
            {article.location}
          </Text>
        </Flex>
      </Flex>
      <Flex mt="8" p="8">
        <Flex maxW="1100px" w="full" mx="auto" direction="column">
          <Text fontSize="2xl" fontWeight="semibold">
            Abstract
          </Text>
          <Text mt="2">{article.abstract}</Text>
          <Flex mt="16" gap="3" direction={{ base: 'column', sm: 'row' }}>
            <Button colorScheme="teal" leftIcon={<FiFile />}>
              Ler Artigos
            </Button>
            <Button colorScheme="teal" variant="outline">
              Exportar Citação
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

interface StaticPathsProps {
  params: {
    id: string;
  };
}

// get all establishments ids
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(
    'https://rivi-backend-node.onrender.com/api/article/artigosId'
  );
  const ids = data;

  if (!ids) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths: StaticPathsProps[] = ids.map((e: { id: any }) => {
    return {
      params: {
        id: e.id,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

// get establishment data by id
export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string };

  console.log(`https://rivi-backend-node.onrender.com/api/article/${id}`);

  try {
    const { data } = await axios.get(
      `https://rivi-backend-node.onrender.com/api/article/${id}`
    );
    return {
      props: {
        article: data,
      },
      revalidate: 1 * 60 * 60, // 1 hour
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
