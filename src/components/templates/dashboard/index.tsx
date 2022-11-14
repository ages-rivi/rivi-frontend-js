import { Flex } from '@chakra-ui/react';
import { Sidebar } from '../../@core/ui';

interface SiteTemplateProps {
  children: React.ReactNode;
}

export default function DashboardTemplate({ children }: SiteTemplateProps) {
  return (
    <Flex direction="column" h="100vh" w="full">
      <Sidebar>{children}</Sidebar>
    </Flex>
  );
}
