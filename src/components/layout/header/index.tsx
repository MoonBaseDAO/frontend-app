import ThemeSwitcher from "@/components/theme-switcher";
import WalletButton from "@/components/wallet-button";
import { Link, Navbar, Text } from "@nextui-org/react";
import Logo from './logo';

const Header = () => {
  const collapseItems = [
    "Home",
    "Bounties",
    "Actions",
  ];

  return (
    <Navbar maxWidth="fluid" variant="floating">
      <Navbar.Brand>
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
        <Logo />
        <Text b color="inherit" hideIn="xs">MoonBase</Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline-rounded">
        <Navbar.Link isActive href="#">Home</Navbar.Link>
        <Navbar.Link href="#">Bounties</Navbar.Link>
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
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;