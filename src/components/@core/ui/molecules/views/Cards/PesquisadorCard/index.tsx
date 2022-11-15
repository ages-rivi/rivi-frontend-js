// Copiada da Molécula ArticleCard
// TO DO: Trazer informações do arquivo do MemberCard legado

import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import SocialStack from '../../SocialStack';
import TagStack from '../../TagStack';

interface Social {
  facebook: string;
  instagram: string;
  linkedin: string;
}

interface PesquisadorCardProps {
  nome: string;
  descricao: string;
  tags: string[];
  social: Social;
  colors: (index: number) => string;
}

export default function PesquisadorCard({
  nome,
  descricao,
  tags,
  social,
  colors,
}: PesquisadorCardProps) {
  return (
    <Box
      borderBottom={1}
      p="5"
      w="full"
      maxW="400px"
      minW={{ base: 'full', sm: '350px' }}
      borderStyle="solid"
      borderColor="gray.100"
      borderRadius="20"
      shadow="xl"
      bg="gray.100"
      mx="auto"
    >
      <Flex
        color="gray.700"
        direction="column"
        py="7"
        justify="space-between"
        align="center"
        h="full"
      >
        <Flex direction="column" align="center">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Text fontWeight="bold" py="4">
            {nome}
          </Text>
          <Text pb="6">{descricao}</Text>
        </Flex>
        <Flex w="full" direction="column" align="center">
          <TagStack tags={tags} colors={colors} />
          <SocialStack social={social} />
        </Flex>
      </Flex>
    </Box>
  );
}
