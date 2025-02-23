'use client'

import * as React from 'react'
import {Label, Switch} from '@moraitis/ui'

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="sugar-on-cake" />
      <Label htmlFor="sugar-on-cake">Sugar on cake</Label>
    </div>
  )
}
