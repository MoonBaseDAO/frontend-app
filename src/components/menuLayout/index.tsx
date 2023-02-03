import React from 'react';
import styles from './style.module.css';

interface MenuLayoutProps {
  children: React.ReactNode
}

export const MenuLayout = ({children}: MenuLayoutProps) => {
  return (
    <ul className={styles.layout}>
      {children}
    </ul>
  )
}