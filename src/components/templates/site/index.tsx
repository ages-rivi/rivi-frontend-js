import { Flex } from '@chakra-ui/react';
import { Footer, Header } from '../../@core/ui';

interface SiteTemplateProps {
  children: React.ReactNode;
}

export default function SiteTemplate({ children }: SiteTemplateProps) {
  return (
    <Flex direction="column" h="100vh" w="full">
      <Header />
      <Flex h="full" direction="column" justify="space-between">
        {children}
        <Footer />
      </Flex>
    </Flex>
  );
}
