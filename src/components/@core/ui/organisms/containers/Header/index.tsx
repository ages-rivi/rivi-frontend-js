import { useRouter } from 'next/router';
import routes from 'src/configs/routes.json';
import HeaderView from '../../views/Header';

const headerRoutes = routes.filter((route) => {
  return !route.isAuth;
});

const authRoutes = routes.filter((route) => {
  return route.isAuth;
});

export default function Header() {
  const router = useRouter();
  return (
    <HeaderView
      activeRoute={router.pathname}
      routes={headerRoutes}
      signIn={authRoutes[0].path}
      signUp={authRoutes[1].path}
    />
  );
}
