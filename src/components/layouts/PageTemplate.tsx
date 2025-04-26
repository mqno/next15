'use client';

import styles from './PageTemplate.module.scss';
import { motion } from 'framer-motion';

interface PageTemplateProps {
  title: string;
  children: React.ReactNode;
}

export default function PageTemplate({ title, children }: PageTemplateProps) {
  return (
    <motion.div 
      className={styles.pageContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <header className={styles.pageHeader}>
        <h1>{title}</h1>
      </header>
      <div className={styles.pageContent}>
        {children}
      </div>
    </motion.div>
  );
}