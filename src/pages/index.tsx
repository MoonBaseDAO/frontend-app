import Sidebar from '@/components/layout/sidebar';
import { Inter } from '@next/font/google';
import { Card, Grid, Text } from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })

const MockItem = ({ text }: { text: string }) => {
  return (
    <Card css={{ h: "$20", $$cardColor: '$colors$primary' }}>
      <Card.Body>
        <Text h6 size={15} color="white" css={{ m: 0 }}>
          {text}
        </Text>
      </Card.Body>
    </Card>
  );
};

export default function Home() {
  return (
    <Grid.Container gap={1} justify="center">
      <Grid css={{minWidth: "300px"}} xs={0} sm={2}>
        <Sidebar />
      </Grid>
      <Grid xs>
        <MockItem text="2 of 3" />
      </Grid>
    </Grid.Container>
  )
}
