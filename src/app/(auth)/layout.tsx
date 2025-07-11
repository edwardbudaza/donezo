'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  const isSignIn = pathname === '/sign-in';

  return (
    <main className="min-h-screen bg-neutral-100">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex items-center justify-between">
          <Image src="/logo.svg" height={100} width={300} alt="Logo" />
          <Button variant="secondary" asChild>
            <Link href={isSignIn ? '/sign-up' : '/sign-in'}>{isSignIn ? 'Sign Up' : 'Login'}</Link>
          </Button>
        </nav>

        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">{children}</div>
      </div>
    </main>
  );
};
export default AuthLayout;
