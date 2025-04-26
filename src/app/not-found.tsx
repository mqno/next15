'use client';
 
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <motion.div 
        className={styles.content}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.errorCode}>404</div>
        <h1>Not all those who wander are lost</h1>
        <h2>Except you... you are definitely lost</h2>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className={styles.homeLink}>
            Find your way back
          </Link>
        </motion.div>
        <div className={styles.compass}>
          <motion.div 
            className={styles.needle}
            animate={{ 
              rotate: [0, 180, 360],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}