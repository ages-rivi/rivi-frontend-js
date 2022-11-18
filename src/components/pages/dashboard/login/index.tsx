import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import LoginView from 'src/components/@core/ui/organisms/views/Login';
// import LoginPage from ;

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const handleLoginClick = () => {};
  return (
    <Flex direction="column" h="100vh" w="full">
      <LoginView
        showPassword={showPassword}
        handleShowClick={handleShowClick}
        handleLoginClick={handleLoginClick}
      />
    </Flex>
  );
}
