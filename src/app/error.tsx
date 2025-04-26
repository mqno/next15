'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './error.module.scss';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  const handleAction = () => {
    if (session) {
      router.push('/dashboard');
    } else {
      reset();
    }
  };

  return (
    <div className={styles.errorContainer}>
      <h2>Something went wrong!</h2>
      <p>{error.message || 'An unexpected error occurred'}</p>
      <button
        onClick={handleAction}
        className={styles.retryButton}
      >
        {session ? 'Go to Dashboard' : 'Try again'}
      </button>
    </div>
  );
}