import { initNear } from '@/near/near-setup';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    initNear();
    setLoading(false);
  }, []);
  
  return isLoading ? <>Loading</> : <Component {...pageProps} />
}
