import styles from './style.module.css';
import { Navbar } from '../../components/navbar';
import { Sidebar } from '../../components/sidebar';
import { Content } from '../../components/content';
import { TaskStatus } from '../../constants';

const categories = [
  {
    title: "Today Tasks",
    tasks: [
      {
        title: 'Dashboard Design Implementation',
        status: TaskStatus.APPROVED
      },
      {
        title: 'Dashboard Api Implementation',
        status: TaskStatus.PROGRESS
      },
      {
        title: 'Dashboard Bug Fixing',
        status: TaskStatus.REVIEW
      },
      {
        title: 'Dashboard QA',
        status: TaskStatus.WAITING
      }
    ]
  },
  {
    title: "Upcoming Tasks",
    tasks: [
      {
        title: 'Dashboard Design Implementation',
        status: TaskStatus.APPROVED
      },
      {
        title: 'Dashboard Api Implementation',
        status: TaskStatus.PROGRESS
      },
      {
        title: 'Dashboard Bug Fixing',
        status: TaskStatus.REVIEW
      },
      {
        title: 'Dashboard QA',
        status: TaskStatus.WAITING
      }
    ]
  }
]

export default function Board() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <Content categories={categories} />
      <Sidebar notifications={10} />
    </div>
  );
}