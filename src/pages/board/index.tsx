import styles from './style.module.css';
import { Navbar } from '../../components/navbar';
import { Sidebar } from '../../components/sidebar';
import { Content } from '../../components/content';
import { TaskStatus } from '../../constants';
import { categories } from '@/mock';

export default function Board() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <Content categories={categories} />
      <Sidebar notifications={10} />
    </div>
  );
}