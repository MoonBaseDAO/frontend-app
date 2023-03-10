import { Button, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { MoonIcon } from '../icons/moon';
import { SunIcon } from '../icons/sun';

const ThemeSwitcher = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const handleSwitch = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <Button
      auto
      color="gradient"
      onClick={handleSwitch}
      icon={isDark ? <SunIcon fill="currentColor" filled /> : <MoonIcon fill="currentColor" filled />}
    />
  )
}

export default ThemeSwitcher;