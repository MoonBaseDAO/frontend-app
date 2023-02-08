import { Avatar, Card, Container, Text } from "@nextui-org/react"
import IconButton from "../icon-button"
import { MoreIcon } from "../icons/more"

export interface ScheduleCardProps {
  startTime: string;
  endTime: string;
  title: string;
  users: string[];
}

const ScheduleCard = ({ startTime, endTime, title, users }: ScheduleCardProps) => {
  return (
    <Card isHoverable variant="shadow" css={{ mw: "400px", mb: '$5' }}>
      <Card.Body>
        <Container display="flex" alignItems="center" justify="space-between" fluid css={{ paddingLeft: "$2", mb: "$5" }}>
          <div>
            <Text h6>{startTime} - {endTime}</Text>
            <Text h5>{title}</Text>
          </div>
          <IconButton>
            <MoreIcon />
          </IconButton>
        </Container>
        <Container fluid css={{ paddingLeft: "$3" }}>
          <Avatar.Group>
            {users.map((url, index) => (
              <Avatar
                key={index}
                size="lg"
                pointer
                src={url}
                bordered
                color="gradient"
                stacked
              />
            ))}
          </Avatar.Group>
        </Container>
      </Card.Body>
    </Card >
  );
}

export default ScheduleCard;