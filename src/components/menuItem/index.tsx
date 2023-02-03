import React from 'react';
import styles from './style.module.css';

interface MenuItemProps {
  children: React.ReactNode
  title: string
  disabled?: boolean
}

export const MenuItem = ({children, title, disabled = false}: MenuItemProps) => {
  return (
    <li className={`${styles.item} ${disabled ? styles.disabled : ''}`}>
      {children}
      <span>{title}</span>
    </li>
  )
}