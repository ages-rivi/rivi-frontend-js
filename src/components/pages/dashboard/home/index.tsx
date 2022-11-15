import { Flex } from '@chakra-ui/react';
import DashboardTemplate from 'src/components/templates/dashboard';

export default function Home() {
  return (
    <DashboardTemplate>
      <Flex w="full">Widgets</Flex>
    </DashboardTemplate>
  );
}
