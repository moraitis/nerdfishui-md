'use client'

import * as React from 'react'
import {Input} from '@moraitis/ui'

export function InputTextArea() {
  return (
    <div className="w-full space-y-2">
      <Input
        name="input-textarea"
        label="message"
        type="textarea"
        placeholder="message"
      />
    </div>
  )
}
