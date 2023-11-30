'use client'

import * as React from 'react'
import {Checkbox} from '@moraitis/ui'

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox name="newsletter" label="Subscribe to our newsletter" />
    </div>
  )
}
