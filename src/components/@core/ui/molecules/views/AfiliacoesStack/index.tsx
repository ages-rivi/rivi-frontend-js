import { Box, HStack, Text } from '@chakra-ui/react';

export default function AfiliacoesStack({
  afiliacoes,
}: {
  afiliacoes: string;
}): JSX.Element {
  if (!afiliacoes) {
    return <Box />;
  }

  return (
    <HStack direction="row" justify="center" paddingBottom="24px">
      <Text>{afiliacoes}</Text>
    </HStack>
  );
}
