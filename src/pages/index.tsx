import HomeLayout from '@/components/layout/home';
import Sidebar from '@/components/layout/sidebar';
import { Inter } from '@next/font/google';
import { Card, Grid, Text } from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Grid.Container gap={1} justify="center">
      <Grid css={{ minWidth: "300px" }} xs={0} sm={2}>
        <Sidebar />
      </Grid>
      <Grid css={{  }} xs>
        <HomeLayout />
      </Grid>
    </Grid.Container>
  )
}
