'use client'

import * as React from 'react'
import {Section} from '@moraitis/ui'

export function SectionDemo() {
  return (
    <div className="w-full space-y-2">
      <Section>
        <div>Hello world</div>
        <div>Hello world</div>
      </Section>
    </div>
  )
}
