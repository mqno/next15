'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './global-error.module.scss';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global Error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className={styles.errorContainer}>
          <motion.div 
            className={styles.errorCard}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.errorIcon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z" fill="currentColor"/>
                <path d="M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="currentColor"/>
              </svg>
            </div>
            <h1>Something went wrong!</h1>
            <p>{error.message || 'An unexpected error occurred'}</p>
            <motion.button
              className={styles.resetButton}
              onClick={reset}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try again
            </motion.button>
          </motion.div>
        </div>
      </body>
    </html>
  );
}