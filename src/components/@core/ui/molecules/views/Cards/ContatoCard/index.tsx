// Copiada da Molécula ArticleCard
// TO DO: Fazer card de contato utilizando o Átomo SocialButton

import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import limit from '../../../../../../../utils/limit';

interface ArticleCardProps {
  title: string;
  category: string;
  description: string;
  href: string;
}

export default function ArticleCard({
  title,
  category,
  description,
  href,
}: ArticleCardProps) {
  const router = useRouter();

  const navigateToLink = () => {
    router.push(href);
  };

  return (
    <Flex gap={{ base: 2, md: '6' }} direction={{ base: 'column', md: 'row' }}>
      <Box w={{ base: 'full', md: '40' }} h="40" bgColor="teal.500" />
      <Flex direction="column" justify="space-between" p="1">
        <Flex direction="column" maxW="300px" w="full">
          <Flex direction="column">
            <Text fontSize="xl" fontWeight="semibold">
              {limit(title, 25)}
            </Text>
            <Text fontWeight="medium" color="gray.500">
              {category}
            </Text>
          </Flex>
          <Text mt="2" mb={{ base: 2, md: 0 }}>
            {limit(description, 60)}
          </Text>
        </Flex>
        <Flex>
          <Button variant="link" colorScheme="teal" onClick={navigateToLink}>
            VER MAIS
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
