'use client'

import * as React from 'react'
import {Input} from '@moraitis/ui'
import {CheckCircle} from 'lucide-react'

export function InputIcon() {
  return (
    <div className="w-full space-y-2">
      <Input
        name="input-icon"
        icon={CheckCircle}
        label="email"
        type="email"
        placeholder="Email"
      />
    </div>
  )
}
