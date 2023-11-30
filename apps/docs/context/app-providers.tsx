'use client'

import * as React from 'react'
import {ThemeProvider as NerdfishThemeProvider} from '@moraitis/theme'
import {ToastProvider} from '@moraitis/ui'

import {MobileNavProvider} from './mobile-nav-provider'
import {ThemeProvider} from './theme-provider'

type AppProvidersProps = {
  children: React.ReactNode
}

function AppProviders({children}: AppProvidersProps) {
  return (
    <ThemeProvider>
      <NerdfishThemeProvider>
        <MobileNavProvider>
          <ToastProvider>{children}</ToastProvider>
        </MobileNavProvider>
      </NerdfishThemeProvider>
    </ThemeProvider>
  )
}

export {AppProviders}
