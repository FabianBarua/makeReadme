'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import { IconSun, IconMoon } from './Icons'

export function ThemeSwitcher () {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const togleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button
      onClick={togleTheme}
      isIconOnly color='default'
      variant='light'
      aria-label='Change theme'
    >
      {theme === 'light' ? <IconMoon /> : <IconSun />}
    </Button>
  )
}
