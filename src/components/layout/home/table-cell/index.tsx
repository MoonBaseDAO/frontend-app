import IconButton from "@/components/icon-button";
import StyledBadge from "@/components/styled-badge";
import { DeleteIcon } from "@/components/icons/delete";
import { EditIcon } from "@/components/icons/edit";
import { EyeIcon } from "@/components/icons/eye";
import {TaskType} from "@/components/layout/home";
import { Col, Row, Text, Tooltip } from "@nextui-org/react";

const renderHomeTableCell = (task: TaskType, columnKey: React.Key) => {
  const cellValue = task[columnKey];
  switch (columnKey) {
    case "status":
      return <StyledBadge type={task?.status}>{cellValue}</StyledBadge>;

    case "actions":
      return (
        <Row justify="center" align="center">
          <Col css={{ d: "flex" }}>
            <Tooltip content="Details">
              <IconButton onClick={() => console.log("View task", task?.id)}>
                <EyeIcon size={20} fill="#979797" />
              </IconButton>
            </Tooltip>
          </Col>
          <Col css={{ d: "flex" }}>
            <Tooltip content="Edit task">
              <IconButton onClick={() => console.log("Edit task", task?.id)}>
                <EditIcon size={20} fill="#979797" />
              </IconButton>
            </Tooltip>
          </Col>
          <Col css={{ d: "flex" }}>
            <Tooltip
              content="Delete task"
              color="error"
              onClick={() => console.log("Delete task", task?.id)}
            >
              <IconButton>
                <DeleteIcon size={20} fill="#FF0080" />
              </IconButton>
            </Tooltip>
          </Col>
        </Row>
      );
    default:
      return cellValue;
  }
};

export default renderHomeTableCell;