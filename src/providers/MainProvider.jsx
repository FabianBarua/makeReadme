/* eslint-disable react/prop-types */
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ReadmeProvider } from '../context/readme'

export function Providers ({ children }) {
  return (
    <NextUIProvider className='min-h-dvh flex flex-col'>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        <ReadmeProvider>
          {children}
        </ReadmeProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}
