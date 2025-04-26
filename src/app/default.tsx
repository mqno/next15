'use client';

import { motion } from 'framer-motion';
import styles from './default.module.scss';

export default function Default() {
  return (
    <div className={styles.defaultContainer}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.pulsingDot}>
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={styles.dot}
          />
        </div>
        <h1>Loading Content</h1>
        <p>Please wait while we prepare your content...</p>
        <div className={styles.loadingBars}>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.bar}
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}