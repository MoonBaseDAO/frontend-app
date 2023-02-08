import { initSDK, signIn, signOut, wallet } from "@/hooks/near"
import { Dropdown } from "@nextui-org/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { UserIcon } from "@/components/icons/user";

const LoginButton = () => {
  const router = useRouter();
  const [isConnected, setConnected] = useState(false);
  const [accountId, setAccountId] = useState<string | null>(null);

  useEffect(() => {
    initSDK();

    if (wallet?.getAccountId()) {
      setConnected(true);
      setAccountId(wallet?.getAccountId());
    }
  }, [])

  const handleConnect = async () => {
    if (isConnected) {
      await signOut();
      setConnected(false);
      setAccountId(null);
      router.replace('/');
    }
    else {
      await signIn();
    }
  }

  const handleLogin = (key: any) => {
    const keyString = key as string;
    if(keyString == "Near")
      handleConnect();
  }

  return (
    // <Button color="gradient" onPress={handleConnect} auto>
    //   {isConnected ? accountId : 'Connect'}
    // </Button>
    <Dropdown>
      <Dropdown.Button flat color="gradient" css={{color: "white"}}>
        {isConnected ? accountId : 'Login'}
      </Dropdown.Button>
      <Dropdown.Menu onAction={handleLogin} color="secondary" aria-label="Actions" css={{ $$dropdownMenuWidth: "280px" }}>
        {/* <Dropdown.Item
          key="email"
          description="Login with Email"
          icon={<UserIcon size={22} fill="var(--nextui-colors-secondary)" />}
        >
          Email
        </Dropdown.Item>
        <Dropdown.Item
          key="metamask"
          description="Login with MetaMask"
          icon={
            <UserIcon size={22} fill="var(--nextui-colors-secondary)" />
          }
        >
          MetaMask
        </Dropdown.Item> */}
        <Dropdown.Item
          key="Near"
          description="Authenticate with Near Wallet"
          icon={
            <UserIcon size={22} fill="var(--nextui-colors-secondary)" />
          }
        >
          {isConnected ? 'SignOut' : 'Near Wallet'}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default LoginButton;