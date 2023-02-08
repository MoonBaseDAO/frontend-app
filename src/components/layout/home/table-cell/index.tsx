import { DeleteIcon } from "@/components/icons/delete";
import { EditIcon } from "@/components/icons/edit";
import { EyeIcon } from "@/components/icons/eye";
import { TaskType } from "@/components/layout/home";
import StyledBadge from "@/components/styled-badge";
import { Button, Col, Row } from "@nextui-org/react";

const renderHomeTableCell = (task: TaskType, columnKey: React.Key) => {
  const cellValue = task[columnKey];
  switch (columnKey) {
    case "status":
      return (
        <Row justify="start">
          <StyledBadge type={task?.status} label={cellValue} />
        </Row>
      )
    case "actions":
      return (
        <Row justify="center" align="center">
          <Col css={{ d: "flex", width: "auto" }}>
            <Button
              auto
              light
              icon={<EyeIcon size={20} fill="#979797" />}
              onClick={() => console.log("View task", task?.id)}
            />
          </Col>
          <Col css={{ d: "flex", width: "auto" }}>
            <Button
              auto
              light
              icon={<EditIcon size={20} fill="#979797" />}
              onClick={() => console.log("Edit task", task?.id)}
            />
          </Col>
          <Col css={{ d: "flex", width: "auto" }}>
            <Button
              auto
              light
              onChangeCapture={() => console.log("Delete task")}
              icon={<DeleteIcon size={20} fill="#FF0080" />}
            />
          </Col>
        </Row>
      );
    default:
      return cellValue;
  }
};

export default renderHomeTableCell;