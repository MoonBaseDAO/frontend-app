import { Card, Text } from "@nextui-org/react";
import { meetings } from "@/mock/home";
import ScheduleCard from "@/components/schedule-card";

const ScheduleLayout = () => {
  return (
    <Card>
      <Card.Body>
        <Text h3>Schedule</Text>
        {meetings.map((meeting) => {
          return <ScheduleCard startTime={meeting.startTime} endTime={meeting.endTime} title={meeting.title} users={meeting.users} />
        })}
      </Card.Body>
    </Card>
  );
}

export default ScheduleLayout;