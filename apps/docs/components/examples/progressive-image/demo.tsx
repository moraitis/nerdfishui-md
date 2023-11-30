'use client'

import * as React from 'react'
import {ProgressiveImage} from '@moraitis/ui'

export function ProgressiveImageDemo() {
  return (
    <ProgressiveImage
      className="w-full"
      img={<img src="https://picsum.photos/3000/3000" alt="picsum" />}
      placeholder="https://picsum.photos/25/25"
    />
  )
}
