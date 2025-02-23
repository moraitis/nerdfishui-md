'use client'

import * as React from 'react'
import {H2} from '@moraitis/ui'

export function TypographyTitle() {
  return (
    <div className="flex flex-col">
      <H2>Default</H2>
      <H2 variant="primary">Primary</H2>
      <H2 variant="secondary">Secondary</H2>
      <H2 variant="special">Special</H2>
    </div>
  )
}
