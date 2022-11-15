import { Box, HStack, Text } from '@chakra-ui/react';

export default function PesquisadorStack({
  pesquisadores,
}: {
  pesquisadores: string;
}): JSX.Element {
  if (!pesquisadores) {
    return <Box />;
  }
  console.log('Pesquisador Array: ', pesquisadores);
  return (
    <HStack direction="row" justify="center" paddingBottom="24px">
      <Text>{pesquisadores}</Text>;
    </HStack>
  );
}
