import Header from '@/components/layout/header';
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Header/>
      <Component {...pageProps}/>
    </NextUIProvider>
  );
}
