import { ChakraProvider, Flex } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import SidebarWithHeader from 'old_src/components/Dashboard/Sidebar';
import Footer from 'old_src/components/Footer';
import Navbar from 'old_src/components/Navbar';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  const router = useRouter();
  const renderNavFooter = !(
    router.pathname.includes('/auth') || router.pathname.includes('/admin')
  );
  const isDashboard = router.pathname.includes('/admin');

  return (
    <ChakraProvider>
      <Flex direction={isDashboard ? 'row' : 'column'} h="100vh" w="full">
        {renderNavFooter && <Navbar />}
        {isDashboard ? (
          <SidebarWithHeader>
            <Flex w="full" h="full" direction="column" justify="space-between">
              <Component {...pageProps} />
              {renderNavFooter && <Footer />}
            </Flex>
          </SidebarWithHeader>
        ) : (
          <Flex h="full" direction="column" justify="space-between">
            <Component {...pageProps} />
            {renderNavFooter && <Footer />}
          </Flex>
        )}
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
