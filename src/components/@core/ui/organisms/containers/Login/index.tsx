import { useState } from 'react';
import LoginView from '../../views/Login';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const handleLoginClick = () => {};
  return (
    <LoginView
      showPassword={showPassword}
      handleShowClick={handleShowClick}
      handleLoginClick={handleLoginClick}
    />
  );
}
