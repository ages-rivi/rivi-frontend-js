import { useRouter } from 'next/router';
import { IconType } from 'react-icons';
import { FiHome } from 'react-icons/fi';
import SideBarView from '../../views/Sidebar';

interface SidebarProps {
  children: React.ReactNode;
}
interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, href: '/admin' },
];

export default function Sidebar({ children }: SidebarProps) {
  const router = useRouter();
  return (
    <SideBarView
      active_href={router.pathname}
      base_href="/admin"
      links={LinkItems}
    >
      {children}
    </SideBarView>
  );
}
