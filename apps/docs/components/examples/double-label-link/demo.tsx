'use client'

import * as React from 'react'
import {DoubleLabelLink} from '@moraitis/ui'

export function DoubleLabelLinkDemo() {
  return (
    <DoubleLabelLink description="label 2" href="https://www.nerdfish.be">
      label 1
    </DoubleLabelLink>
  )
}
