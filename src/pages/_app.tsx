import { ChakraProvider, Flex } from '@chakra-ui/react';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  const router = useRouter();
  return (
    <ChakraProvider>
      <Flex direction="column" h="100vh">
        {!router.pathname.includes('/auth') && <Navbar />}
        <Component {...pageProps} />
        {!router.pathname.includes('/auth') && <Footer />}
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
