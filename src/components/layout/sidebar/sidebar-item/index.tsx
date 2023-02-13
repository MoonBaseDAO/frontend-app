import { Button } from "@nextui-org/react";
import { Router, useRouter } from "next/router";

interface SidebarItemProps {
  label: string;
  icon?: React.ReactNode;
  link?: string;
}

const SidebarItem = ({ label, icon, link }: SidebarItemProps) => {
  const router = useRouter();
  
  const handleRouter = () => {
    router.push(link);
  }

  return (
    <Button auto light css={{ justifyContent: "flex-start" }} icon={icon} onClick={handleRouter} >
      {label}
    </Button>
  );
}

export default SidebarItem;