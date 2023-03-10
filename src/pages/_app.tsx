import Header from '@/components/layout/header';
import { darkTheme, lightTheme } from '@/components/theme-switcher/theme';
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { StrictMode } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          <Header />
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </StrictMode>
  );
}
