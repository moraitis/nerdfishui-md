'use client'

import * as React from 'react'
import {Input} from '@moraitis/ui'

export function InputSize() {
  return (
    <div className="w-full space-y-2">
      <Input
        name="input-size-1"
        label="email"
        type="email"
        placeholder="Email"
        inputSize="sm"
      />
      <Input
        name="input-size-2"
        label="email"
        type="email"
        placeholder="Email"
        inputSize="md"
      />
      <Input
        name="input-size-3"
        label="email"
        type="email"
        placeholder="Email"
        inputSize="lg"
      />
    </div>
  )
}
