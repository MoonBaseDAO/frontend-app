import { Card, Spacer } from "@nextui-org/react";
import SidebarItem from "./sidebar-item";
import { NotificationIcon } from "@/components/icons/notification";
import { InboxIcon } from "@/components/icons/inbox";
import { CalendarIcon } from "@/components/icons/calendar";
import { UpcomingIcon } from "@/components/icons/upcoming";
import { StarIcon } from "@/components/icons/star";
import { MeetingIcon } from "@/components/icons/meeting";
import { TrashIcon } from "@/components/icons/trash";
import { SunIcon } from "@/components/icons/sun";
import { WaterIcon } from "@/components/icons/water";
import { BadgeIcon } from "@/components/icons/concerts";

const Sidebar = () => {
  return (
    <Card>
      <Card.Body>
        <SidebarItem label="Inbox" icon={<InboxIcon fill="currentColor" filled />} />
        <SidebarItem label="Today" icon={<CalendarIcon fill="currentColor" filled />} />
        <SidebarItem label="Upcoming" icon={<UpcomingIcon fill="currentColor" filled />} />
        <SidebarItem label="Important" icon={<StarIcon fill="currentColor" filled />} />
        <SidebarItem label="Meetings" icon={<MeetingIcon fill="currentColor" filled />} />
        <SidebarItem label="Trash" icon={<TrashIcon fill="currentColor" filled />} />
        <Spacer />
        <SidebarItem label="My Org" icon={<MeetingIcon fill="currentColor" filled />} link="/myorg" />
        <SidebarItem label="Discover" icon={<SunIcon fill="currentColor" filled />} />
        <SidebarItem label="Bounties" icon={<WaterIcon fill="currentColor" filled />} />
        <SidebarItem label="Chat" icon={<BadgeIcon fill="currentColor" filled />} />
      </Card.Body>
    </Card>
  );
}

export default Sidebar;