import { NextPage } from "next";
import { Card, Grid, Spacer, Button, Text, Input, User } from "@nextui-org/react";
import Sidebar from '@/components/layout/sidebar';
import { SearchButton } from "./SearchButton";
import { SearchIcon } from "./SearchIcon";

const MyOrg: NextPage = () => {
  return (
    <Grid.Container gap={1} justify="center">
      <Grid css={{ minWidth: "300px" }} xs={0} sm={2}>
        <Sidebar />
      </Grid>
      <Grid xs>
        <Grid.Container gap={2}>
          <Grid sm={12} md={5} direction='column'>
            <Card>
              <Card.Header>
                <Text b>Discover</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Input
                  clearable
                  underlined
                  contentRightStyling={false}
                  placeholder="Type DAO name"
                  contentRight={
                    <SearchButton>
                      <SearchIcon />
                    </SearchButton>
                  }
                />
              </Card.Body>
            </Card>
            <Spacer y={1} />
            <Card>
              <Card.Header>
                <Text b>Top Categories</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                <Button.Group color="gradient" ghost>
                  <Button>DAOs</Button>
                  <Button>Traditional</Button>
                  <Button>Clubs</Button>
                  <Button>All</Button>
                </Button.Group>
              </Card.Body>
            </Card>
            <Spacer y={1} />
            <Card>
              <Card.Header>
                <Text b>Top Trending DAOs</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                <Grid sm={12} justify='space-between'>
                  <User
                    src="https://i.pravatar.cc/150?u=a048581f4e29026701d"
                    name="SpaceRanch DAO"
                    size="md"
                  />
                  <Button shadow color="success" auto>Join</Button>
                </Grid>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}

export default MyOrg;