import { Navbar, Button, Text } from "@nextui-org/react";
import Logo from './logo';
import Link from "next/link";

const Header = () => {
  return (
    <Navbar maxWidth="fluid" variant="floating">
      <Navbar.Brand>
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
        <Logo />
        <Text b color="inherit">MoonBase</Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="highlight">
        <Navbar.Link isActive href="#">Home</Navbar.Link>
        <Navbar.Link href="#">Bounties Area</Navbar.Link>
        <Navbar.Link href="#">Actions</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Button auto>
            Connect
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}

export default Header;