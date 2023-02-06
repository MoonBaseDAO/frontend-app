import ThemeSwitcher from "@/components/theme-switcher";
import WalletButton from "@/components/wallet-button";
import { Navbar, Text } from "@nextui-org/react";
import Logo from './logo';

const Header = () => {
  return (
    <Navbar maxWidth="fluid" variant="floating">
      <Navbar.Brand>
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
        <Logo />
        <Text b color="inherit">MoonBase</Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline-rounded">
        <Navbar.Link isActive href="#">Home</Navbar.Link>
        <Navbar.Link href="#">Bounties Area</Navbar.Link>
        <Navbar.Link href="#">Actions</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <ThemeSwitcher />
        </Navbar.Item>
        <Navbar.Item>
          <WalletButton />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}

export default Header;