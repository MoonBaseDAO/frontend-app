import { Button } from "@nextui-org/react";

interface SidebarItemProps {
  label: string;
  icon?: React.ReactNode;
}

const SidebarItem = ({ label, icon }: SidebarItemProps) => {
  return (
    <Button auto light css={{ justifyContent: "flex-start" }} icon={icon}>
      {label}
    </Button>
  );
}

export default SidebarItem;