import { Card, Grid, Text, Link, Container, Checkbox, Spacer, Progress, Radio, Button } from "@nextui-org/react";
import { Inter } from '@next/font/google'
import { SP } from "next/dist/shared/lib/utils";

const inter = Inter({ subsets: ['latin'] })

const CardMockItem = ({ name }: { name: string }) => {
  return (
    <Card css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        <img
          alt="nextui logo"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {name}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>{name}.org</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          A description of {name}
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link
          color="primary"
          target="_blank"
          href="https://github.com/nextui-org/nextui"
        >
          {name} Link
        </Link>
      </Card.Footer>
    </Card>
  )
}

const CardsMockLayout = () => {
  return (
    <>
      <Text
        h1
        size={30}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Card
      </Text>
      <Grid.Container gap={2} justify="center">
        <Grid xs><CardMockItem name="DAO1" /></Grid>
        <Grid xs><CardMockItem name="DAO2" /></Grid>
        <Grid xs><CardMockItem name="DAO3" /></Grid>
        <Grid xs><CardMockItem name="DAO3" /></Grid>
      </Grid.Container>
    </>
  );
}

const CheckBoxMockLayout = () => {
  return (
    <>
      <Text
        h1
        size={30}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        CheckBox
      </Text>
      <Grid.Container gap={2} direction="column" wrap="wrap">
        <Checkbox color="primary">
          Primary
        </Checkbox>
        <Spacer />
        <Checkbox color="secondary">
          Secondary
        </Checkbox>
        <Spacer />
        <Checkbox color="success">
          Success
        </Checkbox>
        <Spacer />
        <Checkbox color="warning">
          Warning
        </Checkbox>
        <Spacer />
        <Checkbox color="error">
          Error
        </Checkbox>
        <Spacer />
        <Checkbox color="gradient">
          Gradient
        </Checkbox>
      </Grid.Container>
    </>
  );
}


const ProgressBarMockLayout = () => {
  return (
    <>
      <Text
        h1
        size={30}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Progress Bar
      </Text>
      <Grid.Container gap={2}>
        <Grid>
          <Progress value={50} color="primary" />
        </Grid>
        <Grid>
          <Progress value={30} color="secondary" />
        </Grid>
        <Grid>
          <Progress value={70} color="success" />
        </Grid>
        <Grid>
          <Progress value={90} color="warning" />
        </Grid>
        <Grid>
          <Progress value={10} color="error" />
        </Grid>
        <Grid>
          <Progress value={30} color="gradient" />
        </Grid>
      </Grid.Container>
    </>
  );
}

const RadioMockLayout = () => {
  return (
    <>
      <Text
        h1
        size={30}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Radio Button
      </Text>
      <Radio.Group defaultValue="primary" orientation="vertical">
        <Radio value="primary" color="primary" labelColor="primary">
          primary
        </Radio>
        <Radio value="secondary" color="secondary" labelColor="secondary">
          secondary
        </Radio>
        <Radio value="success" color="success" labelColor="success">
          success
        </Radio>
        <Radio value="warning" color="warning" labelColor="warning">
          warning
        </Radio>
        <Radio value="error" color="error" labelColor="error">
          error
        </Radio>
      </Radio.Group>
    </>
  );
}

const ButtonMockLayout = () => {
  return (
    <>
      <Text
        h1
        size={30}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Buttons
      </Text>
      <Grid.Container gap={2}>
        <Grid>
          <Button color="primary" auto>
            Primary
          </Button>
        </Grid>
        <Grid>
          <Button color="secondary" auto>
            Secondary
          </Button>
        </Grid>
        <Grid>
          <Button color="success" auto>
            Success
          </Button>
        </Grid>
        <Grid>
          <Button color="warning" auto>
            Warning
          </Button>
        </Grid>
        <Grid>
          <Button color="error" auto>
            Error
          </Button>
        </Grid>
        <Grid>
          <Button color="gradient" auto>
            Gradient
          </Button>
        </Grid>
      </Grid.Container>
    </>
  );
}

export default function Home() {
  return (
    <Container css={{paddingTop: "20px"}}>
      <CardsMockLayout />
      <Spacer />
      <CheckBoxMockLayout />
      <Spacer />
      <RadioMockLayout />
      <Spacer />
      <ButtonMockLayout />
    </Container>
  )
}
