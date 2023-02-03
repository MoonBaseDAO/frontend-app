import { TaskStatus } from "@/constants";

export const categories = [
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