import { TaskType } from "@/components/layout/home";
import { ScheduleCardProps } from "@/components/schedule-card";

export const tasks: TaskType[] = [
  {
    id: 1,
    title: "Dashboard Design Implementation",
    status: "approved"
  },
  {
    id: 2,
    title: "Create a userflow",
    status: "progress"
  },
  {
    id: 3,
    title: "Application Implementation",
    status: "review"
  },
  {
    id: 4,
    title: "Create a Dashboard Design",
    status: "progress"
  },
  {
    id: 5,
    title: "Create a Web Application Design",
    status: "approved"
  },
  {
    id: 6,
    title: "API integration",
    status: "waiting"
  },
];

const userPictures: string[] = [
  "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  "https://i.pravatar.cc/150?u=a04258114e29026702d",
  "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
];

export const meetings: ScheduleCardProps[] = [
  {
    startTime: "10:00",
    endTime: "14:00",
    title: "Daily Meeting",
    users: [...userPictures.slice(0, 3)]
  }, {
    startTime: "12:00",
    endTime: "15:00",
    title: "Meeting with Clients",
    users: [...userPictures.slice(1, 3)]
  }, {
    startTime: "15:00",
    endTime: "17:00",
    title: "Discussion of Project",
    users: [...userPictures.slice(2, 5)]
  }
]

