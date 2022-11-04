import { Img } from '@chakra-ui/react';
import Link from 'next/link';

interface LogoProps {
  href?: string;
}

export default function Logo({ href }: LogoProps) {
  return (
    <Link href={href || '/'}>
      <Img src="/Logo.svg" />
    </Link>
  );
}
