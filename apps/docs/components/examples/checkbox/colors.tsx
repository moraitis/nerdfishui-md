'use client'

import * as React from 'react'
import {Checkbox} from '@moraitis/ui'

export function CheckboxColors() {
  return (
    <div className="items-top flex flex-col space-x-2">
      <Checkbox
        bgClassName="text-red-500"
        textClassName="text-white"
        name="newsletters4"
        label="Subscribe to our newsletter"
        defaultChecked
      />
    </div>
  )
}
