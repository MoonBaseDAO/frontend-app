import React from 'react';
import styles from './style.module.css';

interface ContentProps {
  children?: React.ReactNode
  categories: any;
}

export const Content = ({ children, categories }: ContentProps) => {
  const getTagStyle = (status: string) => {
    switch(status) {
      case 'approved': return styles.approved;
      case 'progress': return styles.progress;
      case 'waiting': return styles.waiting;
      case 'review': return styles.review;
      default: return styles.waiting;
    }
  }

  return (
    <div className={styles.layout}>
      {categories.map((category: any) => {
        return (
          <div key={category.title}>
            <div className={styles.header}>{category.title}</div>
            <div className={styles.taskLayout}>
              {category.tasks.map((task: any, index: number) => {
                return (
                  <div key={index} className={styles.task}>
                    <span className={styles.labelText}>{task.title}</span>
                    <span className={`${styles.tag} ${getTagStyle(task.status.id as string)}`}>{task.status.title}</span>
                  </div>
                )
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}