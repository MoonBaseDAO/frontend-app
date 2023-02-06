import { Button, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { MoonIcon } from '../icons/icon-moon';
import { SunIcon } from '../icons/icon-sun';

const ThemeSwitcher = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const handleSwitch = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <Button
      auto
      onClick={handleSwitch}
      icon={isDark ? <SunIcon fill="currentColor" filled /> : <MoonIcon fill="currentColor" filled />}
    />
  )
}

export default ThemeSwitcher;