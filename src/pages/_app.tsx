import Header from '@/components/layout/header';
import { darkTheme, lightTheme } from '@/components/theme-switcher/theme';
import { NextUIProvider, Container } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        {/* <Header /> */}
          <Header />
          <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}
