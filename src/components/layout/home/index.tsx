import { Spacer, Table, Text, Card } from "@nextui-org/react";
import { columns } from "@/constants/home";
import { tasks } from "@/mock/home";
import renderHomeTableCell from "./table-cell";

export type TaskType = {
  id: string | number,
  title?: string,
  status: "approved" | "progress" | "review" | "waiting",
};

const HomeLayout = () => {
  return (
    <Card css={{ width: "100%" }}>
      <Card.Body>
        <Text b h3 css={{ p: '$3' }}>Today Tasks</Text>
        <Table
          aria-label="Example table with custom cells"
          css={{
            height: "auto",
            width: "100%",
          }}
          selectionMode="multiple"
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column
                key={column.uid}
                hideHeader={column.uid === "actions"}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={tasks}>
            {(task: TaskType) => (
              <Table.Row>
                {(columnKey) => (
                  <Table.Cell>
                    {renderHomeTableCell(task, columnKey)}
                  </Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
        <Spacer />
        <Text b h3 css={{ p: '$3' }}>Upcoming Tasks</Text>
        <Table
          aria-label="Example table with custom cells"
          css={{
            height: "auto",
            width: "100%",
          }}
          selectionMode="multiple"
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column
                key={column.uid}
                hideHeader={column.uid === "actions"}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={tasks}>
            {(task: TaskType) => (
              <Table.Row>
                {(columnKey) => (
                  <Table.Cell>
                    {renderHomeTableCell(task, columnKey)}
                  </Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default HomeLayout;