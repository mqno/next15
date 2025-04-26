'use client';

import { useSession } from "next-auth/react";
import TabNav from '@/components/TabNav/TabNav';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const isAuthenticated = status === 'authenticated' && session;

  return (
    <>
      {isAuthenticated && <TabNav />}
      <main className={`main-content ${isAuthenticated ? 'authenticated' : ''}`}>
        {children}
      </main>
    </>
  );
}