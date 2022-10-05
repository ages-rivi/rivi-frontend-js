/* import { ChakraProvider } from '@chakra-ui/react';
import DataTable from '@components/DataTable';
import { createColumnHelper } from '@tanstack/react-table';
*/

import { Flex, Text } from '@chakra-ui/react';

function ListaProjetos(): JSX.Element {
  return (
    <Flex direction="column" maxW="1330px" w="full" margin="auto" gap="3">
      <Text textAlign="center" fontWeight="medium" fontSize="5xl">
        Lista Projetos
      </Text>
    </Flex>
  );
}

export default ListaProjetos;
