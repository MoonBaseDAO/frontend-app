import Header from '@/components/layout/header';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { AppProps } from 'next/app';

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: 'light',
})

const darkTheme = createTheme({
  type: 'dark',
})

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
        <Header />
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}
