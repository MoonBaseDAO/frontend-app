import { initSDK, wallet, signIn, signOut } from "@/hooks/near"
import { Button } from "@nextui-org/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const WalletButton = () => {
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

  return (
    <Button onPress={handleConnect} auto>
      {isConnected ? accountId : 'Connect'}
    </Button>
  )
}

export default WalletButton;