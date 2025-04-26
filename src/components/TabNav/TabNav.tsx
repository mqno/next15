'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import styles from './TabNav.module.scss';
import clsx from 'clsx';

export default function TabNav() {
  const pathname = usePathname();
  const tabs = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Profile', path: '/profile' },
    { name: 'Settings', path: '/settings' },
    { name: 'Analytics', path: '/analytics' }
  ];

  const handleLogout = () => {
    signOut({ callbackUrl: '/auth/login' });
  };

  return (
    <nav className={styles.tabNav}>
      {tabs.map((tab) => (
        <Link 
          key={tab.path} 
          href={tab.path}
          className={clsx(styles.tab, pathname === tab.path && styles.active)}
        >
          {tab.name}
        </Link>
      ))}
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </nav>
  );
}