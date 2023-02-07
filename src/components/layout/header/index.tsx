import ThemeSwitcher from "@/components/theme-switcher";
import WalletButton from "@/components/wallet-button";
import { Link, Navbar, Text } from "@nextui-org/react";
import Logo from './logo';

const Header = () => {
  const collapseItems = [
    "Inbox",
    "Today",
    "Upcoming",
    "Important",
    "Meetings",
    "Trash",
    "Family",
    "Vacation",
    "Festival",
    "Concerts"
  ];

  return (
    <Navbar maxWidth="fluid" variant="sticky">
      <Navbar.Brand>
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
        <Logo />
        <Text h3 b color="secondary" hideIn="xs">MoonBase</Text>
      </Navbar.Brand>
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