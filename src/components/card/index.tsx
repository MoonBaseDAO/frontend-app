import React from 'react';
import styles from './style.module.css';

const typeStyles = {
  'yellow': styles.yellow,
  'blue': styles.blue,
  'red': styles.red,
  'green': styles.green
}

interface CardProps {
  children: React.ReactNode
  time: string
  title: string
  type?: string
}

export const Card = ({ children, time, title, type = "green" }: CardProps) => {
  const getTagStyle = (type: string) => {
    switch(type) {
      case 'yellow': return styles.yellow;
      case 'blue': return styles.blue;
      case 'red': return styles.red;
      case 'green': return styles.green;
      default: return styles.green;
    }
  }

  return (
    <div className={`${styles.layout} ${getTagStyle(type)}`}>
      <div className={styles.description}>
        <div className={styles.time}>{time}</div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.more}></div>
      <div className={styles.members}>
        {children}
      </div>
    </div>
  );
}