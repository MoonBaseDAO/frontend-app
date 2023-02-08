import HomeLayout from '@/components/layout/home';
import ScheduleLayout from '@/components/layout/schedule';
import Sidebar from '@/components/layout/sidebar';
import ScheduleCard from '@/components/schedule-card';
import { Inter } from '@next/font/google';
import { Grid } from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Grid.Container gap={1} justify="center">
      <Grid css={{ minWidth: "300px" }} xs={0} sm={2}>
        <Sidebar />
      </Grid>
      <Grid xs>
        <HomeLayout />
      </Grid>
      <Grid css={{ minWidth: "300px"}} xs={12} sm={2}>
        <ScheduleLayout />
      </Grid>
    </Grid.Container>
  )
}
