import * as React from 'react'
import {cx} from '@moraitis/utils'

export function Prose({
  as: Component = 'div',
  className,
  ...props
}: {
  as?: React.ElementType
  className?: string
  [key: string]: any
}) {
  return (
    <Component
      className={cx(className, 'mx-auto max-w-screen-lg')}
      {...props}
    />
  )
}
